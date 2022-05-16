// Ongoing Thumbs
import LaPortfolioThumb from "../project-images/la-portfolio.png";
import GymWitThumb from "../project-images/gym-witness.png";
import ChefThumb from "../project-images/chef-palace.jpg";

// Ongoing Projects
export const OngoingProject = [
  {
    image: `${GymWitThumb}`,
    imageAlt: "An gym training website",
    to: "/error",
    name: "Gym Witness",
    about:
      "Working out via online gym classes and tutors. A gyming website to facilitate human strength.",
    stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "HTML" }],
  },
  {
    image: `${ChefThumb}`,
    imageAlt: "A cooking recipe website",
    to: "/error",
    name: "The CHEF Palace",
    about:
      "Order your favourite dish from our kitchen. Spicy, Saucy, Hot and Delicious anyhow you want it, WE DELIVER!",
    stack: [{ tag: "React JS" }, { tag: "HTML" }, { tag: "JavaScript" }],
  },
  {
    image: `${LaPortfolioThumb}`,
    imageAlt: "La Draws Portfolio",
    to: "/error",
    name: "La Draws Portfolio",
    about:
      "Get La_Draws awesome painting and brushes for free on his official website.",
    stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "React JS" }],
  },
];
