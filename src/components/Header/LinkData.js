export const Links = [
  { path: "/", name: "Home", ref: "#home" },
  { path: "/", name: "About", ref: "#skill" },
  { path: "/", name: "Services", ref: "#service" },
  { path: "/", name: "Contact", ref: "#contact" },
  {
    path: "/",
    name: "Project",
    dropdown: [
      { path: "/", name: "Recent Project", ref: "#latest" },
      { path: "/", name: "Ongoing Project", ref: "#ongoing" },
      { path: "/", name: "Static Project", ref: "#static" },
    ],
  },
];
