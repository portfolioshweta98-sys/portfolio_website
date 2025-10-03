import React from "react";
import { LinkedinIcon, ExternalLinkIcon } from "lucide-react";
import { Avatar } from "./ui/Avatar";
import { CompanyLogo } from "./ui/CompanyLogo";

interface Testimonial {
  id: number;
  companyUrl: string; // can be an image URL or fallback text
  title: string;
  company: string;
  testimonial: string;
  personAvatar: string; // can be an image URL or fallback text
  linkedinUrl?: string;
}

const TestimonialSection = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1759363200&v=beta&t=YMKaTl66QK2gM5iZHDVBe-iuf5YxlbMSKPqR2Gau6S8",
      title: "Senior Engineering Manager",
      company: "GEP Worldwide",
      testimonial:
        "I had the pleasure of working with Shweta during her tenure as a Software Developer...",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHtCA8UC2OWfA/profile-displayphoto-scale_200_200/B4DZjirTCmHsAo-/0/1756149661161?e=1759363200&v=beta&t=K01s4tlvj1LbNeapWZ17h1I0qdRR1Is3mIxPOCqmDbQ",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 2,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1759363200&v=beta&t=YMKaTl66QK2gM5iZHDVBe-iuf5YxlbMSKPqR2Gau6S8",
      title: "Principle Software Engineer",
      company: "GEP Worldwide",
      testimonial:
        "I had the privilege of working with Shweta Shekhar on the GEP Smart Contracts team, and I can confidently say she was one of the most driven and solution-focused professionals I’ve collaborated with. Over the course of our time together, I witnessed her significant growth in both technical expertise and sense of ownership....",
      personAvatar: "",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 3,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHeJ-2mFiqcmQ/company-logo_200_200/company-logo_200_200/0/1732599862731?e=1759363200&v=beta&t=8rnfNvoNhUx10bZnN2ExDi0SW5F5W2ZztYhkpaSDU3g",
      title: "Associate Director of Academics",
      company: "upGrad",
      testimonial:
        "I had the pleasure of working closely with Shweta during my time as the Student Council Faculty In charge, where she consistently demonstrated strong leadership, initiative, and dedication. Shweta played a key role in managing college events, showing exceptional organizational skills and motivating the entire team to perform at their best. She worked closely with me during various college fests and activities, and I found her to be proactive, dependable, and solutions-driven. While excelling academically including topping one of the key subjects, Shweta also actively participated in hackathons, competitions, and inter-college events, often taking the lead and inspiring peers through action....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHRlsyB0M2xQw/profile-displayphoto-crop_800_800/B4DZlHOKzCIgAI-/0/1757836522635?e=1761177600&v=beta&t=T8gMa4yJdRJH_3PhDG22jvKTZOzdiWvRP3ysQyKE6Ds",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 4,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQFKa_ObftR_8w/company-logo_200_200/company-logo_200_200/0/1634555714140/nielsen_logo?e=1759363200&v=beta&t=03uvwtvAlErQCHcYWPW-_8G6_lsAIMms08vruAPhtX0",
      title: "Software Engineer at Nielsen",
      company: "Nielsen",
      testimonial:
        "I’ve had the pleasure of knowing Shweta Shekhar for several years now—first as a friend and batchmate during our 11th and 12th in the PCMB + IT stream, and later as a colleague at GEP. From our school days to the corporate world, her passion for technology and problem-solving has always stood out....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D35AQGYDEElc3gOSA/profile-framedphoto-shrink_800_800/B4DZg0_YeUGkAg-/0/1753235687615?e=1758801600&v=beta&t=T_EDqgqQdECR16dw78hH0QddWpbfFHQqoO3fAzcfPo4",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 5,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1759363200&v=beta&t=YMKaTl66QK2gM5iZHDVBe-iuf5YxlbMSKPqR2Gau6S8",
      title: "Senior Business Analyst at GEP Worldwide",
      company: "GEP Worldwide",
      testimonial:
        "I had the opportunity to work closely with Shweta during our time on the Citi client project. As a Implementation analyst, I collaborated with her across several initiatives, particularly around bulk utility operations and incident management......",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQEhQ6jRnv6ixg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1732547313464?e=1759363200&v=beta&t=PfPUnvocUtJ1528IBbR47fOVlv-9ojpNM8aJH6oKKYg",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 6,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1759363200&v=beta&t=YMKaTl66QK2gM5iZHDVBe-iuf5YxlbMSKPqR2Gau6S8",
      title: "Sr.Consultant-Digital Transformation",
      company: "GEP Worldwide",
      testimonial:
        "It was a privilege working with Shweta. We've worked within cross-functional teams for a common software product.Shweta is a bright individual and has a great potential. She was one of the greatest developers in the team, and was always eager to learn and help. She can do wonders in whatever field show chooses for her future, and as an acquaintance one can always vouch on her.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5603AQGWQ7qEH8FhYA/profile-displayphoto-shrink_200_200/B56Zb4Rf_WHoAY-/0/1747922063410?e=1759363200&v=beta&t=wdeD9W-YuxRDyKPN0X4pvHtjTNwKNHZMWAMQNWe3RLk",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 7,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQF6TmzLkch0dQ/company-logo_200_200/company-logo_200_200/0/1630556159190/new_york_university_logo?e=1759363200&v=beta&t=5uuiWDerbMeHX9YJ5-HCwify4N_FXah5tpmhEhGMEv0",
      title: "Graduate Assistant at NYU",
      company: "New York University",
      testimonial:
        "I had the pleasure of working with Shweta on multiple NYU projects, and I can confidently say she is one of the most dedicated, thoughtful, and innovative teammates I’ve collaborated with....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5635AQGYPqE-x8l6Qg/profile-framedphoto-shrink_800_800/profile-framedphoto-shrink_800_800/0/1738359560915?e=1758801600&v=beta&t=x3YbK1aZWXVZSHqK1SCwPlQ53KqTWVEiXy4aTHYq5L8",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 8,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQGKc55wKjYy2A/company-logo_200_200/company-logo_200_200/0/1660715835929/sbi_life_insurance_co__ltd__logo?e=1759363200&v=beta&t=US_dGJaTbIlfBc_znwl-nUJs4wa6zGgFKaO-GOOv1PA",
      title: "RPA Developer with Automation Anywhere",
      company: "SBI Life Insurance Co. Ltd.",
      testimonial:
        "Shweta is highly motivated individual.She is good at understanding user's need be it any project.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQF6_NPO0dak0w/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1683902302774?e=1759363200&v=beta&t=lMZpPlyPKdMbBlWnDjdloGKe5CYqU2QkT7xJM8qTqy0",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 9,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQFyJGIrZBoY0g/company-logo_200_200/company-logo_200_200/0/1630611526356/punchcut_logo?e=1759363200&v=beta&t=fosUcE2vdc_bWxY2LSbsE5vh0wDM2ESRpuqkA49FZ9s",
      title: "Interaction Designer @Punchcut",
      company: "Punchcut",
      testimonial:
        "Shweta is exceptionally dedicated to her work. Her developer expertise is extensive, and she has excellent problem-solving abilities....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQFe4iBs3HJhDA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1704425676427?e=1759363200&v=beta&t=UmbfX337T4imkFz3Itnz0DP5L8hGhhfYNtDluE68VwA",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 10,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEgtOEcxlXMog/company-logo_200_200/B4DZfqEQWkHAAQ-/0/1751978673981/accenture_logo?e=1759363200&v=beta&t=HWcOmfyJi6ul3p7saiO6BhC7eDIV3EDR2Bhoa9u5Q9I",
      title: "Data Scientist specializing in AI-ML using Python",
      company: "Accenture",
      testimonial:
        "I had the privilege of studying Computer Engineering with Shweta, and throughout those four years, they consistently stood out as one of the most reliable and sharp-minded individuals in our batch. Shweta brought a strong technical foundation, a problem-solving mindset, and a calm, team-first attitude whenever we collaborated on projects. We took part in multiple project competitions and hackathons ( got 2nd Prize) throughout Engineering. Her inputs in all phases of projects were equally crucial whether it was ideation, solution approach, development etc. Shweta excelled in Academia as well and always helped others by explaining academic concepts or topics. Her excellent communication skills were definitely an enabler in this regard. Academics and Projects aside, she was always willing to support others, share knowledge, and raise the overall level of any team or group she was part of....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/C5603AQEGkVPhTdzI7A/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1595769353200?e=1759363200&v=beta&t=5piHU3LFdEq6JRq6MO81yfskU9zERBVCePQTPF3_53g",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 11,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C511BAQEgJywU_jIMUQ/company-background_10000/company-background_10000/0/1584233244179/nmims_mpstme_alumni_association_cover?e=1758801600&v=beta&t=232wvzHJbIRPquslo_tstcoQeuRq5peZBV3QcIyBGV0",
      title: "Assistant Professor at MPSTME-NMIMS",
      company: "MPSTME-NMIMS",
      testimonial:
        "I am pleased to recommend shweta who worked under my guidance on a project related to detection of learning disabilities during their final year of the B.E. program.....",
      personAvatar: "",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 12,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      title: "Software Engineer",
      company: "GEP Worldwide",
      testimonial:
        "I've worked alongside Shweta for over 2 years and it’s always been a pleasure. Her technical depth, clear communication, and collaborative approach make her a great teammate. She's someone you can always count on to bring thoughtfulness and precision to any project.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5603AQEeNRzO7wam9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720688351966?e=1761177600&v=beta&t=aXGsx_JzvrYYmax-Aa5yvDTIUCAHLb8kZiSUMRxlfNg",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 13,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQGsGR9p4ikS5w/company-logo_200_200/company-logo_200_200/0/1708946550425/tata_consultancy_services_logo?e=1761177600&v=beta&t=2yqQrYEIwQXu7wfX5Z_D8J9CE212dqtNcwj0Kywr1Qc",
      title: "Lead Full Stack Developer",
      company: "Tata Consultancy Services",
      testimonial:
        "Shweta is a great peer to work with as she is very dedicated and meticulous about assigned tasks.She also possesses great technical and analytical skills.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHB5rncS-AVYA/profile-displayphoto-shrink_400_400/B4DZPsv7GaG0Ag-/0/1734843807093?e=1761177600&v=beta&t=6OC-B2W4OvjR6OYvUQH1HAwUDdID_PIG65aAE6pDFno",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
  ];

  return (
    <section className="bg-black-100 py-12 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-10">
          {/* Title */}
          <div className="text-center">
            <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 relative">
              <span className="absolute inset-0 bg-gradient-to-r from-[#0077B6] via-[#B0BEC5] to-[#0077B6] bg-clip-text text-transparent blur-sm scale-105 opacity-60" />
              <span className="relative bg-gradient-to-r from-[#0077B6] via-[#B0BEC5] to-[#0077B6] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,119,182,0.5)]">
                LinkedIn Recommendations
              </span>
            </h2>
          </div>
          <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto">
            Stories and perspectives from people who’ve journeyed with me
            professionally and academically
          </p>
        </div>

        {/* Masonry Layout */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="break-inside-avoid bg-black-200 rounded-2xl p-5 sm:p-6 shadow-lg transition-all duration-300 hover:shadow-[0_0_20px_rgba(59,130,246,0.6)]"
            >
              {/* Top Row (Company logo + LinkedIn) */}
              <div className="flex justify-between items-center mb-4">
                <CompanyLogo
                  src={testimonial.companyUrl}
                  alt={`${testimonial.company} logo`}
                />
                {testimonial.linkedinUrl && (
                  <a
                    href={testimonial.linkedinUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <LinkedinIcon className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 hover:text-blue-300 transition-colors" />
                  </a>
                )}
              </div>

              {/* Testimonial */}
              <p className="text-gray-300 leading-relaxed text-sm sm:text-base mb-5">
                “{testimonial.testimonial}”
              </p>

              {/* Person Info */}
              <div className="flex items-center space-x-3 mb-4">
                <Avatar
                  src={testimonial.personAvatar}
                  alt={`${testimonial.title}'s avatar`}
                />
                <div>
                  <div className="text-white font-medium text-sm sm:text-base">
                    {testimonial.title}
                  </div>
                  <div className="text-gray-400 text-xs sm:text-sm">
                    {testimonial.company}
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div className="border-t border-gray-700 my-3"></div>

              {/* Bottom Link */}
              {testimonial.linkedinUrl && (
                <a
                  href={testimonial.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-400 text-xs sm:text-sm hover:text-gray-300 transition-colors"
                >
                  <span>Click to view on LinkedIn</span>
                  <ExternalLinkIcon className="w-3 h-3 sm:w-4 sm:h-4" />
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
