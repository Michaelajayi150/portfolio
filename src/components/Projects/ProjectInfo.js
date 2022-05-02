// import bgOne from "./project-images/bg-project.jpeg";
// import bgTwo from "./project-images/bg-projects.jpeg";
// import bgThree from "./project-images/bg-two.jpeg";

// Separate all sections and put their data into a var(M), map the var(M) and give same thing triple times
// Use CSS Grid, Flex will spoil your work ooo

// Recent Thumbs
import CartThumb from "./project-images/cart_e-commerce.png";
import PortfolioThumb from "./project-images/portfolio.png";
import RoyalValueThumb from "./project-images/royal-value.png";

// Ongoing Thumbs
import LaPortfolioThumb from "./project-images/la-portfolio.png";
import GymWitThumb from "./project-images/gym-witness.png";
import ChefThumb from "./project-images/chef-palace.jpg";

// Static Thumbs
import BeautyThumb from "./project-images/beauty.png";
import TanyaThumb from "./project-images/tanya-tucker.png";
import WeatherThumb from "./project-images/weather-check.png";

export const ProjectInfo = [
  {
    Features: [
      { text: "Interactive" },
      { text: "User Friendly" },
      { text: "Responsive" },
    ],

    // Latest Project
    LatestProject: [
      {
        image: `${CartThumb}`,
        imageAlt: "An e-commerce website",
        url: "https://michaelajayi150.github.io/envato-project/index.html",
        name: "Cart E-Commerce",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "HTML" }],
      },
      {
        image: `${PortfolioThumb}`,
        imageAlt: "My Portfolio",
        url: "http://michaelajayi150.github.io/portfolio/",
        name: "TheDev Portfolio",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "React JS" }, { tag: "HTML" }, { tag: "JavaScript" }],
      },
      {
        image: `${RoyalValueThumb}`,
        imageAlt: "A transport website",
        url: "https://michaelajayi150.github.io/Royal-Value-Logistics/index.html",
        name: "Ride Express",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "HTML" }],
      },
    ],

    // Ongoing Projects
    OngoingProject: [
      {
        image: `${GymWitThumb}`,
        imageAlt: "An gym training website",
        url: "https://michaelajayi150.github.io/envato-project/index.html",
        name: "Gym Witness",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "HTML" }],
      },
      {
        image: `${ChefThumb}`,
        imageAlt: "A cooking recipe website",
        url: "http://michaelajayi150.github.io/portfolio/",
        name: "The CHEF Palace",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "React JS" }, { tag: "HTML" }, { tag: "JavaScript" }],
      },
      {
        image: `${LaPortfolioThumb}`,
        imageAlt: "La Draws Portfolio",
        url: "https://michaelajayi150.github.io/Royal-Value-Logistics/index.html",
        name: "La Draws Portfolio",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "React JS" }],
      },
    ],

    // Static Projects
    StaticProject: [
      {
        image: `${BeautyThumb}`,
        imageAlt: "A beauty website",
        url: "https://beauty-beta-newavengers.netlify.app/",
        name: "Glam Haven",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "HTML" }],
      },
      {
        image: `${WeatherThumb}`,
        imageAlt: "A weather checker website",
        url: "https://javascript-challenge-test.netlify.app/",
        name: "Weather Checker",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "Snippet" }, { tag: "APIs" }, { tag: "JavaScript" }],
      },
      {
        image: `${TanyaThumb}`,
        imageAlt: "Tanya Tucker Portfolio",
        url: "https://confident-visvesvaraya-960f42.netlify.app/",
        name: "Tanya Tucker Portfolio",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "React JS" }],
      },
    ],
  },
];
