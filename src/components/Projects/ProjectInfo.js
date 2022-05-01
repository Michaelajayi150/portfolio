import bgOne from "./project-images/bg-project.jpeg";
import bgTwo from "./project-images/bg-projects.jpeg";
import bgThree from "./project-images/bg-two.jpeg";

export const ProjectInfo = [
  {
    Features: [
      { text: "Interactive" },
      { text: "User Friendly" },
      { text: "Responsive" },
    ],
    LatestProject: [
      {
        image: `${bgOne}`,
        imageAlt: "Fine boy",
        url: "http://michaelajayi150.github.io/portfolio/",
        name: "TheDev Portfolio",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "React" }, { tag: "JavaScript" }, { tag: "HTML" }],
      },
      {
        image: `${bgTwo}`,
        imageAlt: "Fine boy",
        url: "http://michaelajayi150.github.io/portfolio/",
        name: "TheDev Portfolio",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "CSS" }, { tag: "JavaScript" }, { tag: "HTML" }],
      },
      {
        image: `${bgThree}`,
        imageAlt: "Fine boy",
        url: "http://michaelajayi150.github.io/portfolio/",
        name: "TheDev Portfolio",
        about:
          "Eu enim sunt fugiat qui officia consectetur ut magna minim commodo qui sit labore. Adipisicing amet cillum proident aliqua irure eu laboris ipsum laboris reprehe nderit nulla eiusmod.",
        stack: [{ tag: "NODE" }, { tag: "JavaScript" }, { tag: "MERN" }],
      },
    ],
  },
];
