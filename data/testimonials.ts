interface Testimonial {
  id: number;
  companyUrl: string; // can be an image URL or fallback text
  name: string; // person's name
  title: string;
  company: string;
  testimonial: string;
  personAvatar: string; // can be an image URL or fallback text
  linkedinUrl?: string;
}


export const testimonials: Testimonial[] = [
    {
      id: 1,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Manish Mishra",
      title: "Senior Engineering Manager",
      company: "GEP Worldwide",
      testimonial:
        "I had the pleasure of working with Shweta during her tenure as a Software Developer...",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHtCA8UC2OWfA/profile-displayphoto-scale_400_400/B4DZjirTCmHsAw-/0/1756149661161?e=1769040000&v=beta&t=vTrdk2OgPtKrMLBx_dCOn0rQNmJmxp6s3g0exDhaCMc",
      linkedinUrl:
        "https://www.linkedin.com/in/manish-mishra-243a2220/",
    },
    {
      id: 2,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Kaleemullah Shaikh",
      title: "Principle Software Engineer",
      company: "GEP Worldwide",
      testimonial:
        "I had the privilege of working with Shweta Shekhar on the GEP Smart Contracts team, and I can confidently say she was one of the most driven and solution-focused professionals I've collaborated with. Over the course of our time together, I witnessed her significant growth in both technical expertise and sense of ownership....",
      personAvatar: "",
      linkedinUrl:
        "https://www.linkedin.com/in/kaleemullah-shaikh-846772109/",
    },
    {
      id: 3,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQHeJ-2mFiqcmQ/company-logo_200_200/company-logo_200_200/0/1732599862731?e=1759363200&v=beta&t=8rnfNvoNhUx10bZnN2ExDi0SW5F5W2ZztYhkpaSDU3g",
      name: "Sumitra Iyer",
      title: "Associate Director of Academics",
      company: "upGrad",
      testimonial:
        "I had the pleasure of working closely with Shweta during my time as the Student Council Faculty In charge, where she consistently demonstrated strong leadership, initiative, and dedication. Shweta played a key role in managing college events, showing exceptional organizational skills and motivating the entire team to perform at their best. She worked closely with me during various college fests and activities, and I found her to be proactive, dependable, and solutions-driven. While excelling academically including topping one of the key subjects, Shweta also actively participated in hackathons, competitions, and inter-college events, often taking the lead and inspiring peers through action....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHRlsyB0M2xQw/profile-displayphoto-scale_400_400/B4DZlHOKzCIgAg-/0/1757836522730?e=1769040000&v=beta&t=zTsc9P29QQ6YEw8UJlWGQF3HnS7iBzQZ7mITj91QjDY",
      linkedinUrl:
        "https://www.linkedin.com/in/sumitraiyer/",
    },
    {
      id: 4,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C4E0BAQFKa_ObftR_8w/company-logo_200_200/company-logo_200_200/0/1634555714140/nielsen_logo?e=1759363200&v=beta&t=03uvwtvAlErQCHcYWPW-_8G6_lsAIMms08vruAPhtX0",
      name: "Omkar Patil",
      title: "Software Engineer at Nielsen",
      company: "Nielsen",
      testimonial:
        "I’ve had the pleasure of knowing Shweta Shekhar for several years now—first as a friend and batchmate during our 11th and 12th in the PCMB + IT stream, and later as a colleague at GEP. From our school days to the corporate world, her passion for technology and problem-solving has always stood out....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5603AQGi84XK3TM-Gg/profile-displayphoto-scale_400_400/B56ZtExKJ7HsAk-/0/1766385297963?e=1769040000&v=beta&t=DxrBesr6Trk_tZpDBM8yQfFrACH9aS1iOXAg_cxzwTE",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 5,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Parag Wagh",
      title: "Senior Business Analyst at GEP Worldwide",
      company: "GEP Worldwide",
      testimonial:
        "I had the opportunity to work closely with Shweta during our time on the Citi client project. As a Implementation analyst, I collaborated with her across several initiatives, particularly around bulk utility operations and incident management......",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQEhQ6jRnv6ixg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1732547313464?e=1769040000&v=beta&t=lR8wIcRbXIN5l6Mt4-nFNtFxn9qTweH3qVaV4GJoQ0Q",
      linkedinUrl:
        "https://www.linkedin.com/in/paragwagh/",
    },
    {
      id: 6,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Rimjhim Sandhir",
      title: "Sr.Consultant-Digital Transformation",
      company: "GEP Worldwide",
      testimonial:
        "It was a privilege working with Shweta. We've worked within cross-functional teams for a common software product.Shweta is a bright individual and has a great potential. She was one of the greatest developers in the team, and was always eager to learn and help. She can do wonders in whatever field show chooses for her future, and as an acquaintance one can always vouch on her.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5603AQHmxsgRfdD3xg/profile-displayphoto-scale_400_400/B56Zt.xzQDJEAg-/0/1767358544866?e=1769040000&v=beta&t=LQUs6vqQMjmJVyGybsxlGrUD2uPw4PSsKc7zFVJbp1c",
      linkedinUrl:
        "https://www.linkedin.com/in/rimjhim-sandhir-61377a50/",
    },
    {
      id: 7,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQF6TmzLkch0dQ/company-logo_200_200/company-logo_200_200/0/1630556159190/new_york_university_logo?e=1759363200&v=beta&t=5uuiWDerbMeHX9YJ5-HCwify4N_FXah5tpmhEhGMEv0",
      name: "Ansh Harjai",
      title: "Graduate Assistant at NYU",
      company: "New York University",
      testimonial:
        "I had the pleasure of working with Shweta on multiple NYU projects, and I can confidently say she is one of the most dedicated, thoughtful, and innovative teammates I've collaborated with....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5635AQGYPqE-x8l6Qg/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1738359560915?e=1768150800&v=beta&t=HZKgY6CsyJqrnc8WlQlV4fXyG7GokSeHnz0VQcUn8Wo",
      linkedinUrl:
        "https://www.linkedin.com/in/ansh-harjai-7a422b245/",
    },
    {
      id: 8,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C4D0BAQGKc55wKjYy2A/company-logo_200_200/company-logo_200_200/0/1660715835929/sbi_life_insurance_co__ltd__logo?e=1759363200&v=beta&t=US_dGJaTbIlfBc_znwl-nUJs4wa6zGgFKaO-GOOv1PA",
      name: "Omkar Warade",
      title: "RPA Developer with Automation Anywhere",
      company: "SBI Life Insurance Co. Ltd.",
      testimonial:
        "Shweta is highly motivated individual.She is good at understanding user's need be it any project.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQF6_NPO0dak0w/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1683902302774?e=1769040000&v=beta&t=DUvhxDsVazSMltWY2Zt1wzvE4vq16MlRisqnLP7BTos",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 9,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C560BAQFyJGIrZBoY0g/company-logo_200_200/company-logo_200_200/0/1630611526356/punchcut_logo?e=1759363200&v=beta&t=fosUcE2vdc_bWxY2LSbsE5vh0wDM2ESRpuqkA49FZ9s",
      name: "Vrunda Mange",
      title: "Interaction Designer @Punchcut",
      company: "Punchcut",
      testimonial:
        "Shweta is exceptionally dedicated to her work. Her developer expertise is extensive, and she has excellent problem-solving abilities....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQFe4iBs3HJhDA/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1704425676427?e=1762387200&v=beta&t=d4U-9BjF5mE0zoxP0lGmRuViqr1O-UpYBZSE7cZrjIo",
      linkedinUrl:
        "https://www.linkedin.com/in/vrunda-mange/",
    },
    {
      id: 10,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEgtOEcxlXMog/company-logo_200_200/B4DZfqEQWkHAAQ-/0/1751978673981/accenture_logo?e=1759363200&v=beta&t=HWcOmfyJi6ul3p7saiO6BhC7eDIV3EDR2Bhoa9u5Q9I",
      name: "Saiprasad Ganesan",
      title: "Data Scientist specializing in AI-ML using Python",
      company: "Accenture",
      testimonial:
        "I had the privilege of studying Computer Engineering with Shweta, and throughout those four years, they consistently stood out as one of the most reliable and sharp-minded individuals in our batch. Shweta brought a strong technical foundation, a problem-solving mindset, and a calm, team-first attitude whenever we collaborated on projects. We took part in multiple project competitions and hackathons ( got 2nd Prize) throughout Engineering. Her inputs in all phases of projects were equally crucial whether it was ideation, solution approach, development etc. Shweta excelled in Academia as well and always helped others by explaining academic concepts or topics. Her excellent communication skills were definitely an enabler in this regard. Academics and Projects aside, she was always willing to support others, share knowledge, and raise the overall level of any team or group she was part of....",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/C5603AQEGkVPhTdzI7A/profile-displayphoto-shrink_100_100/profile-displayphoto-shrink_100_100/0/1595769353200?e=1762387200&v=beta&t=WR3wvXa4KS9rNEfQFVQ5aKbLL41R92e7KFi2fsCzSYk",
      linkedinUrl:
        "https://www.linkedin.com/in/shwetashekhar98/details/recommendations/",
    },
    {
      id: 11,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/C511BAQEgJywU_jIMUQ/company-background_10000/company-background_10000/0/1584233244179/nmims_mpstme_alumni_association_cover?e=1758801600&v=beta&t=232wvzHJbIRPquslo_tstcoQeuRq5peZBV3QcIyBGV0",
      name: "Dr. Masooda Modak",
      title: "Assistant Professor at MPSTME-NMIMS",
      company: "MPSTME-NMIMS",
      testimonial:
        "I am pleased to recommend shweta who worked under my guidance on a project related to detection of learning disabilities during their final year of the B.E. program.....",
      personAvatar: "",
      linkedinUrl:
        "https://www.linkedin.com/in/dr-masooda-modak-264a7695/",
    },
    {
      id: 12,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Dilmanpreet Singh",
      title: "Software Engineer",
      company: "GEP Worldwide",
      testimonial:
        "I've worked alongside Shweta for over 2 years and it's always been a pleasure. Her technical depth, clear communication, and collaborative approach make her a great teammate. She's someone you can always count on to bring thoughtfulness and precision to any project.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D5603AQEeNRzO7wam9g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1720688351966?e=1761177600&v=beta&t=aXGsx_JzvrYYmax-Aa5yvDTIUCAHLb8kZiSUMRxlfNg",
      linkedinUrl:
        "https://www.linkedin.com/in/dilmanpreetsingh/",
    },
    {
      id: 13,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQGsGR9p4ikS5w/company-logo_200_200/company-logo_200_200/0/1708946550425/tata_consultancy_services_logo?e=1761177600&v=beta&t=2yqQrYEIwQXu7wfX5Z_D8J9CE212dqtNcwj0Kywr1Qc",
      name: "Aravind Acharya",
      title: "Lead Full Stack Developer",
      company: "Tata Consultancy Services",
      testimonial:
        "Shweta is a great peer to work with as she is very dedicated and meticulous about assigned tasks.She also possesses great technical and analytical skills.",
      personAvatar:
        "https://media.licdn.com/dms/image/v2/D4D03AQHB5rncS-AVYA/profile-displayphoto-shrink_400_400/B4DZPsv7GaG0Ag-/0/1734843807093?e=1761177600&v=beta&t=6OC-B2W4OvjR6OYvUQH1HAwUDdID_PIG65aAE6pDFno",
      linkedinUrl:
        "https://www.linkedin.com/in/aravind-acharya-317710129/",
    },
    {
      id: 14,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Manish Mishra",
      title: "Senior Engineering Manager",
      company: "GEP Worldwide",
      testimonial:
        "I had the pleasure of working with Shweta during her tenure as a Software Developer, and I can confidently say she has been an invaluable asset to our team. Shweta possesses strong expertise in full-stack development, with a solid command over .NET Core, API development, Angular, and Azure. She consistently delivered high-quality work on time, demonstrating excellent problem-solving skills and attention to detail. One of her standout qualities is her ability to quickly grasp new concepts and technologies, allowing her to adapt seamlessly to evolving project requirements. Shweta is highly proactive, open to taking on challenging tasks, and approaches each assignment with dedication and a positive mindset. Her collaborative nature, technical proficiency, and commitment to excellence make her a top-tier professional in her field. I wholeheartedly recommend Shweta for any role that requires a skilled, dependable, and adaptable full-stack developer. She will be a great asset to any organization.",
      personAvatar: "",
      linkedinUrl:
        "https://www.linkedin.com/in/manish-mishra-243a2220/",
    },
    {
      id: 15,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Aniket Rahane",
      title: "Senior to Shweta at GEP Smart Contracts",
      company: "GEP Worldwide",
      testimonial:
        "I had the opportunity to work closely with Shweta Shekhar during our time together on the GEP Smart Contracts team, and I was consistently impressed with her enthusiasm to learn and grow. Though I was in a senior role, I always found our interactions to be more of a mutual exchange of ideas, driven by her curiosity and dedication. She was never afraid to dive into unfamiliar modules or ask insightful questions that reflected a deeper desire to truly understand the product. I remember walking her through various features and technical flows, and she always went beyond surface-level understanding—challenging herself to analyze use cases, consider edge scenarios, and think about how it fits into the broader platform. What stood out to me the most was her mindset. She didn't just look for answers—she wanted to understand why something worked the way it did. Whether we were debugging, ideating, or discussing feature logic, she consistently pushed herself to think in more holistic and scalable ways. Her curiosity, persistence, and technical acumen make her a great teammate and a quick learner. I'm confident she'll bring the same energy and thoughtfulness to every team she joins.",
      personAvatar: "https://media.licdn.com/dms/image/v2/D4E03AQGRxZPj2qy7jg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1687753019980?e=1769040000&v=beta&t=3NbJ6BkRKaQZV_JOzWaBrRaJghieXBvH-a9j8dPx_wM",
      linkedinUrl:
        "https://www.linkedin.com/in/aniket-rahane-a9327516b/",
    },
    {
      id: 16,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Sayli Karanjkar",
      title: "Product Manager | Procurement SaaS",
      company: "GEP Worldwide",
      testimonial:
        "I had the opportunity to work with Shweta on the Contract module at GEP Solutions. She is a dedicated and quick-learning professional, always willing to take initiative and contribute effectively to the team's success. Shweta's easy-going nature allows her to adapt seamlessly to any team environment and collaborate effortlessly with colleagues. Her strong understanding of the Contract module make her a valuable asset in improving and optimizing contracting processes",
      personAvatar: "https://media.licdn.com/dms/image/v2/C4D03AQHXHSscPiXjEQ/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1654090550792?e=1769040000&v=beta&t=HGX5sT6mnFIpOdDyzv7-uiNS3KpLDyWfKoqjxkU72Kk",
      linkedinUrl:
        "https://www.linkedin.com/in/sayli-karanjkar/",
    },
    {
      id: 17,
      companyUrl: "",
      name: "Dr. Namrata Patel",
      title: "Assistant Professor",
      company: "South Indian Education Society Graduate School Of Technology",
      testimonial:
        "I know Shweta as my student.She is disciplined,curious and hardworking child.I wish her best future",
      personAvatar: "https://media.licdn.com/dms/image/v2/C5103AQFqD3w4WbOOBw/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1523602302013?e=1769040000&v=beta&t=up_Hl4w5quu1Mn53GIWRmh7FHM-zHxNi08-kchN1S6E",
      linkedinUrl:
        "https://www.linkedin.com/in/dr-namrata-patel-99bab4126/",
    },
    {
      id: 18,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Altamash Qureshi",
      title: "Software Engineer",
      company: "GEP Worldwide",
      testimonial:
        "I had the privilege of working with Shweta during my time at GEP in the Contracts team. As my senior, Shweta always stood out for her deep subject knowledge, structured approach to problem-solving, and her ability to simplify even the most complex contract-related challenges. What impressed me the most was her willingness to mentor and guide juniors like me. She was approachable, patient, and always ready to share her expertise, which made learning so much easier and enjoyable. Shweta not only ensured that work was delivered with accuracy and timeliness but also created a collaborative environment where everyone felt valued. Her professionalism, coupled with her supportive nature, makes her an outstanding teammate and leader. I am truly grateful for the learning opportunities I had while working with her and would highly recommend her to any organization looking for a dedicated and inspiring professional.",
      personAvatar: "https://media.licdn.com/dms/image/v2/C4D03AQF2ode66uWZGg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1661243431514?e=1769040000&v=beta&t=8FF2maCwvH8aq4udN6IEA2zT5xbUPnGG8rvl0K4RYtw",
      linkedinUrl:
        "https://www.linkedin.com/in/altamashq/",
    },
    {
      id: 19,
      companyUrl: "",
      name: "Surya Walujkar",
      title: "Founder's Office | Product & Program Manager",
      company: "Servify",
      testimonial:
        "I have known Shweta since our undergraduate days, where we worked together on multiple assignments and projects. She always impressed me with her dedication, structured approach, and ability to contribute fresh ideas that elevated the team's work. Later, at GEP Worldwide, I had the opportunity to see the same qualities in action on client-focused projects. Shweta took ownership of her responsibilities and ensured successful delivery with professionalism and attention to detail. Her combination of teamwork, problem-solving skills, and client orientation makes her a true asset to any organization. I have no doubt that Shweta will continue to excel in her career and add immense value wherever she contributes.",
      personAvatar: "https://media.licdn.com/dms/image/v2/C5103AQHpCoYGdXTtrA/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1583343996886?e=1769040000&v=beta&t=HEsbDPCeoF3NnWQrWFSRp9CWJu9dLqJ5pfhv8Yjd4Cs",
      linkedinUrl:
        "https://www.linkedin.com/in/surya-walujkar-002909180/",
    },
    {
      id: 20,
      companyUrl: "",
      name: "Omkar Patil",
      title: "Senior Data Engineer",
      company: "Fractal",
      testimonial:
        "I've had the pleasure of knowing Shweta Shekhar for several years now—first as a friend and batchmate during our 11th and 12th in the PCMB + IT stream, and later as a colleague at GEP. From our school days to the corporate world, her passion for technology and problem-solving has always stood out. Back in college, we collaborated on project competitions where she consistently brought a creative and analytical approach to the table. Her ability to break down problems and think of practical solutions was impressive even then. Our paths crossed again at GEP, where although we worked on different teams, we often discussed solution strategies, technical challenges, and full-stack development ideas. These conversations always left me with fresh perspectives, thanks to her structured thinking and eagerness to explore different possibilities. What sets her apart is her consistency—whether in academics or in the professional space, she puts in the effort to truly understand the problem, question assumptions, and come up with well-thought-out solutions. She's a great team player, always open to discussions and willing to help. I've seen her evolve across stages, and I'm confident she'll continue to do amazing things ahead.",
      personAvatar: "https://media.licdn.com/dms/image/v2/D5603AQGi84XK3TM-Gg/profile-displayphoto-scale_400_400/B56ZtExKJ7HsAk-/0/1766385297963?e=1769040000&v=beta&t=DxrBesr6Trk_tZpDBM8yQfFrACH9aS1iOXAg_cxzwTE",
      linkedinUrl:
        "https://www.linkedin.com/in/omkar-patil-5ab62b190/",
    },
    {
      id: 21,
      companyUrl:
        "https://media.licdn.com/dms/image/v2/D4D0BAQEYVD5i8grh2g/company-logo_200_200/B4DZfGRTzuGsAI-/0/1751378116345/gep_worldwide_logo?e=1761177600&v=beta&t=OxNFnoDbGj6nggT1Wtqs8xe0oPhp6To8lmZwH2Gsl0A",
      name: "Aniket Patil",
      title: "Manager at GEP",
      company: "GEP Worldwide",
      testimonial:
        "I worked with Shweta for 4 years starting August 2020 when she joined as Associate Software Engineer. Me & everyone in the team as well as people from other teams found Shweta to be very hard working & cooperative. She's a quick learner & even assisted many others in her tenure. She's a go to team member for any complex developments. She used to complete the given tasks well within time & with minimal support, even helping out team mates with their tasks whenever required. Shweta puts full efforts into every task & completes it with perfection. Her work was praised by many in the org. With her skills & positive attitude, Shweta will be an asset to any project. I look forward to working with her again in the future & highly recommend for any role.",
      personAvatar: "",
      linkedinUrl:
        "https://www.linkedin.com/in/aniket-patil-76a00377/",
    },
  ];