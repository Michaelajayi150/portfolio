import { OngoingProject } from "./Sections/Ongoing";
import { LatestProject } from "./Sections/Recent";
import { StaticProject } from "./Sections/Static";
// Use CSS Grid, Flex will spoil your work ooo

export const ProjectInfo = [
  {
    Features: [
      { text: "Interactive" },
      { text: "User Friendly" },
      { text: "Responsive" },
    ],
    ProjectItem: [
      {
        item: LatestProject,
        name: "latest",
        heading: "Recent Projects",
        quote: "Excellence is not a skill, it's an attitude.",
      },
      {
        item: OngoingProject,
        name: "ongoing",
        heading: "Ongoing Projects",
        quote: "A little progress each day adds up to big results.",
      },
      {
        item: StaticProject,
        name: "static",
        heading: "Snippet and Landing Page Projects",
        quote: "You'll be amazed how your business got by without them!",
      },
    ],
  },
];
