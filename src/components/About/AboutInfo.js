import React from "react";
import * as GiIcons from "react-icons/gi";
import * as GrIcons from "react-icons/gr";

export const AboutData = [
  {
    aboutText:
      "I was born and raised in Nigeria, I also studied in Nigeria. I love listening to music, playing video games and making techonlogical research. I have been certified by more than four prrogramming institution online (FreeCodeCamp, Pluralsight and Google). I also help the programming community by creating web templates and putting them out for free, I also help other developer in answering question on Stackoverflow and other programming communtity platforms like Slack.",

    aboutTag: [
      {
        icon: <GiIcons.GiGamepad size="3rem" />,
        text: "Interest",
        info: "Listening to Music, Playing Video games, Techonlogical Research",
      },
      {
        icon: <GrIcons.GrCertificate size="2.5rem" />,
        text: "Certification",
        info: "Certified by FreeCodeCamp, Pluralsight and Google",
      },
      {
        icon: <GrIcons.GrAchievement size="2.5rem" />,
        text: "Achievement",
        info: "Successfully deployed 10+ React web apps",
      },
    ],

    aboutSkill: [
      { tag: "HTML", percent: "97%" },
      { tag: "CSS", percent: "90%" },
      { tag: "JavaScript", percent: "85%" },
      { tag: "React JS", percent: "80%" },
      { tag: "Node JS", percent: "75%" },
    ],

    Experiences: [
      {
        year: "May 17, 2020",
        company: "Hello World Hub",
        info: "Started my first programming career with Hello World Hub, assisted in the development of their official website",
      },
      {
        year: "May 17, 2020",
        company: "FreeCodeCamp",
        info: "Started learning programming with Freecodecamp learning platform, got my FreeCodeCamp certificate",
      },
      {
        year: "June 1, 2020",
        company: "HNDi8",
        info: "Participated in the HNDi8 internship program, was eliminated in the late stages",
      },
      {
        year: "April 20, 2022",
        company: "LA Draws",
        info: "Created a portfolio website for LA Draws while working as a freelancer.",
      },
      {
        year: "April 30, 2022",
        company: "TheDev",
        info: "Fully finished my portfolio website after completing getting my FreeCodeCamp certificate.",
      },
    ],
    Education: [
      {
        year: "May 17, 2020",
        company: "Hello World Hub",
        info: "Started my first programming career with Hello World Hub, assisted in the development of their official website.",
      },
      {
        year: "May 17, 2020",
        company: "FreeCodeCamp",
        info: "Started learning Web development with FreeCodeCamp learning platform.",
      },
      {
        year: "June 1, 2020",
        company: "HNDi8",
        info: "Participated in the HNDi8 internship program, was eliminated in the late stages",
      },
      {
        company: "Pluralsight",
        year: "October 12, 2020",
        info: "Started learning Web development on pluralsight learning platform.",
      },
      {
        company: "Federal University Of Akure",
        year: "November 21, 2021",
        info: "Learning Computer Science as a course at Federal University of Akure.",
      },
    ],
  },
];
