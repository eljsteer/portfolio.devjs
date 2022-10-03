const ProjectData = [  
    {
      id: 1,
      name: "Password-Genie", 
      description: "A Password Generator Application", 
      technologies: ["Javascript | CSS | HTML "], 
      sourceCode: "https://github.com/eljsteer/password-genie", 
      livePreview: "https://eljsteer.github.io/password-genie/",
      image: "../Assets/images/projects/passwordGenie-img.jpg",
      alt: "Password Generator app"
    }, 
    {
      id: 2,
      name: "Weather-man", 
      description: "A Global Weather Application.", 
      technologies: ["OneApp Weather API | Javascript | CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/weather-man", 
      livePreview: "https://eljsteer.github.io/weather-man/",
      image: "../Assets/images/projects/weatherMan-img.jpg",
      alt: "Weather app"
    }, 
    {
      id: 3,
      name: "Marvel Universe", 
      description: "A Marvel Fan Application to view Images of Marvel Characters", 
      technologies: ["Marvel API | Google API | Javascript | CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/marvel_universe", 
      livePreview: "https://mdkgray.github.io/marvel_universe/",
      image: "../Assets/images/projects/marvelUniverse-img.png",
      alt: "Marvel universe photo app"
    }, 
    {
      id: 4,
      name: "noteStaker", 
      description: "A note taking application to allow developers to write and save notes in order to keep track of tasks that need to be completed.", 
      technologies: ["Express.js | Node.js | Javascript | CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/noteStaker", 
      livePreview: "https://radiant-thicket-41331.herokuapp.com/",
      image: "../Assets/images/projects/noteStaker-img.jpg",
      alt: "Note taking app"
    }, 
    {
      id: 5,
      name: "Movie God", 
      description: "This Application is your one-stop-shop for all your latest Movie information. Leave Reviews and Ratings on movie greats or new and upcoming movie releases.", 
      technologies: ["Handlebars| mySQL | Sequelise |Express.js | Node.js| Javascript| CSS | HTML"], 
      sourceCode: "https://github.com/eljsteer/Movie-God", 
      livePreview: "https://limitless-island-08145.herokuapp.com/",
      image: "../Assets/images/projects/movieGod-img.jpg",
      alt: "Movies Central App"
    }, 
    {
      id: 6,
      name: "Social Mongoose (NoSqueal)", 
      description: "A Backend application with endroutes for a Social Media Application", 
      technologies: ["MongoDB | Mongoose | Express.js | Node.js | Javascript"], 
      sourceCode: "https://github.com/eljsteer/Social-Mongoose_NoSqueal", 
      livePreview: null,
      image: "../Assets/images/projects/socialMongoose-img.jpg",
      alt: "Social media Software backend routes"
    }
]

const HomeData = {
    animation: "",
    header: "Jason Steer",
    theAllure: 
    `Avid Web Developer, Lover of Mother Earth, with a curious and analytical mind`,
  }

const AboutData = {
    ProfilePhoto: "../../Assets/images/standingProf-resz1.jpg",
    Description: 
    `I was born and raised in the countryside just outside of Christchurch, NZ.
    In July 2018 I shifted over to Sydney for warmer weather and greatly improved career opportunities.
    A career change into Software & Web development is a priority for me at the moment.
    I am primarily wanting a change from my current role as an Accountant to the world of Tech, 
    along with oppportunities to level-up my creative problem-solving skills and explore the complexities of blockchain technology.
    My long term dream is to eventually work into a role as a blockchain or DApp developer`,
    Role: "Full Stack Web Developer",
  }

const ResumeData = [
  {
    name:"HTML",
    icon:""
  }, {
    name:"CSS & Bootstrap",
    icon:""
  }, {
    name:"Javscript",
    icon:""
  }, {
    name:"NodeJS",
    icon:""
  }, {
    name:"MySQL",
    icon:""
  }, {
    name:"MongoDB",
    icon:""
  }, {
    name:"NoSQL",
    icon:""
  }, {
    name:"React",
    icon:""
  }, {
    name:"Git",
    icon:""
  }
]

  const ContactData = {
    Email: "el.jsteer@gmail.com",
    Github: "https://github.com/eljsteer",
    LinkedIn: "https://www.linkedin.com/in/devjs-jason-steer/"
  }

export {HomeData, AboutData, ProjectData, ResumeData, ContactData};