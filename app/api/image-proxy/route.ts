import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const imageUrl = searchParams.get("url");
  const profileUrl = searchParams.get("profile");

  // Handle LinkedIn profile URL to extract profile image
  if (profileUrl && profileUrl.includes("linkedin.com/in/")) {
    try {
      // Try to fetch the profile page and extract image URL
      const response = await fetch(profileUrl, {
        headers: {
          "User-Agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        },
      });

      if (response.ok) {
        const html = await response.text();
        // Try to extract profile image URL from meta tags or JSON-LD
        const metaImageMatch = html.match(
          /<meta\s+property="og:image"\s+content="([^"]+)"/i
        );
        if (metaImageMatch && metaImageMatch[1]) {
          const extractedImageUrl = metaImageMatch[1];
          // Proxy the extracted image
          return fetch(extractedImageUrl, {
            headers: {
              "User-Agent":
                "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
              Referer: "https://www.linkedin.com/",
            },
          }).then(async (imgResponse) => {
            if (imgResponse.ok) {
              const imageBuffer = await imgResponse.arrayBuffer();
              const contentType = imgResponse.headers.get("content-type") || "image/jpeg";
              return new NextResponse(imageBuffer, {
                headers: {
                  "Content-Type": contentType,
                  "Cache-Control": "public, max-age=3600, s-maxage=3600",
                  "Access-Control-Allow-Origin": "*",
                },
              });
            }
          });
        }
      }
    } catch (error) {
      console.error("Error fetching profile:", error);
    }
    return new NextResponse("Could not extract profile image", { status: 404 });
  }

  if (!imageUrl) {
    return new NextResponse("Missing image URL", { status: 400 });
  }

  // Only allow LinkedIn images for security
  if (!imageUrl.startsWith("https://media.licdn.com")) {
    return new NextResponse("Invalid image source", { status: 400 });
  }

  try {
    const response = await fetch(imageUrl, {
      headers: {
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        Referer: "https://www.linkedin.com/",
      },
      next: { revalidate: 3600 }, // Cache for 1 hour
    });

    if (!response.ok) {
      return new NextResponse("Failed to fetch image", { status: response.status });
    }

    const imageBuffer = await response.arrayBuffer();
    const contentType = response.headers.get("content-type") || "image/jpeg";

    return new NextResponse(imageBuffer, {
      headers: {
        "Content-Type": contentType,
        "Cache-Control": "public, max-age=3600, s-maxage=3600",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error("Error proxying image:", error);
    return new NextResponse("Error fetching image", { status: 500 });
  }
}

