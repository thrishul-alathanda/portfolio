

import { flushSync } from "react-dom";
import emoji from "react-easy-emoji";

const illustration = {
  animated: true // set to false to use static SVG
};

const greeting = {
  username: "Thrishul Alathanda",
  title: "Hi all, I'm Thrishul",
  subTitle: emoji(
    "A passionate Full Stack Developer 🚀 having an experience of building Web and Mobile applications with JavaScript / Reactjs / Nodejs / React Native and some other cool libraries and frameworks."
  ),
  resumeLink:
    "",
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/thrishul-alathanda",
  linkedin: "https://www.linkedin.com/in/thrishul-alathanda/",
  gmail: "thrishul.alathanda004@gmail.com",
 // gitlab: "https://gitlab.com/",
  twitter: "https://twitter.com/04zed",
  facebook: "https://www.facebook.com/thrishul.alathanda",
  instagram: "https://instagram.com/thrishul_alathanda",
  stackoverflow: "https://stackoverflow.com/users/13155901/thrishul-alathanda",
  // Instagram and Twitter are also supported in the links!
  display: true 
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    emoji(
      "⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications"
    ),
    emoji("⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks")
   // emoji("⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean")
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
   /* {
      skillName: "sass",
      fontAwesomeClassname: "fab fa-sass"
    }, */
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
   /* {
      skillName: "swift",
      fontAwesomeClassname: "fab fa-swift"
    }, */
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
   /* {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    }, */
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "python",
      fontAwesomeClassname: "fab fa-python"
    }
   /* {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    } */
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Manglore University",
      logo: require("./assets/images/MULogo.png"),
      subHeader: "Bachelors in Computer Application",
      duration: "June 2017 - Nov 2020",
      desc: "Actively participated in various events:",
      descBullets: [
        "2018 | Participated in fest organised by V.C. Puttur.",
        "2019 | Participated in fest organised by Don Bosco, Angadikadavu, Kerala."
      ]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Kodagu",
      logo: require("./assets/images/JNVLogo.png"),
      subHeader: "12th Grade - PCMC [CBSE Board]",
      duration: "March 2017",
      desc: "Ranked top 10% in the program. Took courses about C/C++",
      descBullets: ["Developed strong knowledge about programming"]
    },
    {
      schoolName: "Jawahar Navodaya Vidyalaya, Kodagu",
      logo: require("./assets/images/JNVLogo.png"),
      subHeader: "10th Grade [CBSE Board]",
      duration: "March 2015"
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "QA Engineer",
      company: "ConnectM",
      companylogo: require("./assets/images/CMLogo.png"),
      date: "April 2021 – Present",
      desc: "ConnectM brings insight and intelligence to residential mechanical rooms, the transportation & logistics sector, and commercial infrastructure.",
      descBullets: [
        "ConnectM is the world’s first full stack platform for service companies to seamlessly digitize their business"
      ]
    }, 
    {
      role: "Team Lead",
      company: "Pharmaceutical",
      companylogo: require("./assets/images/PLogo.png"),
      date: "2019-2020",
      desc: "A Pharmacy Management System, which automates modern pharmacy with great user interface and purchase platform.",
      descBullets: [
         "This project was submitted to University as final semester project.",
         "Secured 799/800 score for this project."
       
      ]
    },
    // {
    //   role: "Full Stack Developer",
    //   company: "ProjectRideShare",
    //   companylogo: require("./assets/images/RideShareLogo.png"),
    //   date: "2020-2021",
    //   desc: "This is the fun project created by me and two other friends. This project was created to replicate the popular ride sharing apps like Ola and Uber and then combine the best functionality of both app with Rapido. Due to lack of resource and funding this project was paused. (or dropped may be 😂)"
    // },
    {
       role: "Full Stack Developer",
       company: "ChatsApp",
       companylogo: require("./assets/images/ChatsApp.png"),
       date: "2021",
       desc: "This is private chatting application with real end-to-end encryption and basic features like send medias, documents and also typing & seen status indicator. This is developed keeping user privacy as priority, rather than throwing some random new privacy & policy like tech giants which raised concern among many"
    }
  ]
  
};


/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "false", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME BIG PROJECTS I WORKED ON",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Digital Marketing",
      subtitle:
        "Achieved Certification from google for completition of Digital Marketing",
      image: require("./assets/images/GoogleDU.webp"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1Au3Eom27imMzQYTK9zz21cTL1ABZgtB1/view?usp=sharing"
        },
      ]
    },
    {
      title: "Grasshopper Coding Fundamentals",
      subtitle:
        "Completed Grasshoppers Coding Fundamentals with certificate of completion",
      image: require("./assets/images/GrasshopperLogo.png"),
      footerLink: [
        {
          name: "Certificate",
          url: "https://drive.google.com/file/d/1r4J-qOAx7qIM1Uu4R3awhWzzfnlx4pUd/view?usp=sharing"
        }
      ]
    }, 

    {
      title: "Photoshop CC ",
      subtitle: "Completed Certifcation for Photoshop CC 2020",
      image: require("./assets/images/PS.png"),
      footerLink: [
        {
          name: "Certificate", 
          url: "https://drive.google.com/file/d/1MyiV1rfuRBA0-oiHgdgnP1yVP52_9i0L/view?usp=sharing"
        }
      ]
    } 
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",

  blogs: [
    {
      url: "",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "",
      subtitle: "",
      slides_url: "",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    ""
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-7676150676",
  email_address: "004zed@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "04zed", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

export {
  illustration,
  greeting,
  socialMediaLinks,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails
};
