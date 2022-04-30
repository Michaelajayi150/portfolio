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
        year: "April 20, 2001",
        company: "Hello World Hub",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        year: "April 20, 2001",
        company: "LA Draws",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        year: "April 20, 2001",
        company: "TheDev",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        year: "April 20, 2001",
        company: "HNDi10",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        year: "April 20, 2001",
        company: "HNDi08",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
    ],
    Education: [
      {
        company: "HNDi08",
        year: "April 20, 2021",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        company: "HNDi10",
        year: "April 20, 2021",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        company: "TheDev",
        year: "April 20, 2021",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        company: "Hello World Hub",
        year: "April 20, 2021",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
      {
        company: "LA Draws",
        year: "April 20, 2021",
        info: "Consectetur sint elit sunt mollit proident laboris deserunt sint aliquip quis laborum ex sint anim.",
      },
    ],
  },
];
