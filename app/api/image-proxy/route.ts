import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageUrl = searchParams.get("url");
  const profileUrl = searchParams.get("profile");

  // Handle LinkedIn profile URL to extract profile image
  if (profileUrl && profileUrl.includes("linkedin.com/in/")) {
    try {
      // Try multiple proxy services to fetch LinkedIn profile page
      const proxies = [
        `https://api.allorigins.win/get?url=${encodeURIComponent(profileUrl)}`,
        `https://corsproxy.io/?${encodeURIComponent(profileUrl)}`,
      ];

      let html = null;
      for (const proxyApiUrl of proxies) {
        try {
          const response = await fetch(proxyApiUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
            },
            next: { revalidate: 3600 },
          });

          if (response.ok) {
            const data = await response.json();
            html = data.contents || data;
            if (html) break;
          }
        } catch (e) {
          continue;
        }
      }

      if (html) {
        // Try to extract profile image from meta tags
        const metaImageMatch = html.match(
          /<meta\s+property=["']og:image["']\s+content=["']([^"']+)["']/i
        );
        
        if (metaImageMatch && metaImageMatch[1]) {
          const extractedImageUrl = metaImageMatch[1];
          
          // Try to fetch the extracted image directly first
          try {
            const imgResponse = await fetch(extractedImageUrl, {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
                Referer: "https://www.linkedin.com/",
              },
            });

            if (imgResponse.ok) {
              const imageBuffer = await imgResponse.arrayBuffer();
              const contentType = imgResponse.headers.get("content-type") || "image/jpeg";
              return new NextResponse(imageBuffer, {
                headers: {
                  "Content-Type": contentType,
                  "Cache-Control": "public, max-age=86400, s-maxage=86400",
                  "Access-Control-Allow-Origin": "*",
                },
              });
            }
          } catch (e) {
            // Continue to proxy method
          }

          // If direct fetch fails, try weserv.nl proxy
          try {
            const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(extractedImageUrl)}&output=webp&q=80`;
            const proxyResponse = await fetch(proxyUrl, {
              headers: {
                "User-Agent":
                  "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
              },
            });
            
            if (proxyResponse.ok) {
              const imageBuffer = await proxyResponse.arrayBuffer();
              const contentType = proxyResponse.headers.get("content-type") || "image/jpeg";
              return new NextResponse(imageBuffer, {
                headers: {
                  "Content-Type": contentType,
                  "Cache-Control": "public, max-age=86400, s-maxage=86400",
                  "Access-Control-Allow-Origin": "*",
                },
              });
            }
          } catch (e) {
            // Continue
          }
        }
      }
    } catch (error) {
      console.error("Error fetching profile image:", error);
      return new NextResponse(
        JSON.stringify({ error: "Could not fetch profile image", details: error instanceof Error ? error.message : String(error) }),
        { 
          status: 404,
          headers: { "Content-Type": "application/json" }
        }
      );
    }
    return new NextResponse(
      JSON.stringify({ error: "Could not extract image from LinkedIn profile - profile may require authentication" }),
      { 
        status: 404,
        headers: { "Content-Type": "application/json" }
      }
    );
  }

  if (!imageUrl) {
    return new NextResponse("Missing image URL", { status: 400 });
  }

  // Only allow LinkedIn images for security
  if (!imageUrl.startsWith("https://media.licdn.com")) {
    return new NextResponse("Invalid image source", { status: 400 });
  }

  try {
    // Try multiple methods to fetch the image
    let response: Response | null = null;

    // Method 1: Direct fetch with proper headers
    try {
      response = await fetch(imageUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
          Referer: "https://www.linkedin.com/",
          Accept: "image/webp,image/apng,image/*,*/*;q=0.8",
        },
        next: { revalidate: 3600 },
      });

      if (response.ok) {
        const imageBuffer = await response.arrayBuffer();
        const contentType = response.headers.get("content-type") || "image/jpeg";

        return new NextResponse(imageBuffer, {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } catch (error) {
      // Continue to next method
    }

    // Method 2: Try with images.weserv.nl proxy
    try {
      const proxyUrl = `https://images.weserv.nl/?url=${encodeURIComponent(imageUrl)}&output=webp&q=80`;
      response = await fetch(proxyUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
        },
      });

      if (response.ok) {
        const imageBuffer = await response.arrayBuffer();
        const contentType = response.headers.get("content-type") || "image/jpeg";

        return new NextResponse(imageBuffer, {
          headers: {
            "Content-Type": contentType,
            "Cache-Control": "public, max-age=86400, s-maxage=86400",
            "Access-Control-Allow-Origin": "*",
          },
        });
      }
    } catch (error) {
      // Continue
    }

    return new NextResponse("Failed to fetch image", { status: 404 });
  } catch (error) {
    console.error("Error proxying image:", error);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}

