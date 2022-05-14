export const contentVariants = {
  offscreen: {
    x: -100,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};

export const cardVariants = {
  offscreen: {
    y: 100,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const skillVariants = {
  offscreen: {
    position: "absolute",
    x: 100,
    opacity: 0,
  },
  onscreen: {
    position: "relative",
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
    },
  },
};

export const sectionVariants = {
  offscreen: {
    opacity: 0.1,
    visibility: "hidden",
  },
  onscreen: {
    opacity: 1,
    visibility: "visible",
    transition: {
      type: "spring",
      duration: 3,
    },
  },
};
