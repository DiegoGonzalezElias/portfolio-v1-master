import React from "react";
import { GitjobsImg, PortfolioImg, TicTacImg, PuzzlesImg, Pomodoro, ReactLogo, TypeScriptLogo, NextjsLogo, TailwindLogo, StripeLogo, FirebaseLogo, JsLogo, FlutterLogo, VueLogo, SassLogo, TalkHub } from "../../assets/images";


const projects = [
  {
    name: "Sitetoapp",
    info: [
      "Develop a customized Android or IOS mobile app using your website URL as reference. You can add ads and notifications to your app",
      "You can see a previsualization of your website in small devices",
      "Supports stripe payment service.",
    ],
    media: <GitjobsImg />,
    live: "https://sitetoapp.vercel.app",
    repo: null,
    id: 1,
    logos: [<ReactLogo />, <NextjsLogo />, <TailwindLogo />, <StripeLogo />, <FirebaseLogo />]
  },
  {
    name: "This Site",
    info: [
      "Built with React using parcel bundler for it's no-config approach.",
      "Using Chakra UI to build the UI.",
      "Using storybook for visual testing and building reusable components.",
      "Going forward, I'm hoping to integrate Gatsby for it's SEO, MDX & SSG features.",
    ],
    media: <PortfolioImg />,
    live: null,
    // need to update to current site url once site goes public
    repo: "https://github.com/DiegoGonzalezElias/portfolio-v1-master",
    id: 2,
    logos: [<ReactLogo />, <JsLogo />]
  },
  {
    name: "Magic Puzzles",
    info: [
      "Built with Flutter for Android devices, published on google play store.",
      "Ads integration with admob",
      "firebase database for user control",
      "100k+ downloads",
    ],
    media: <PuzzlesImg />,
    live: "https://play.google.com/store/apps/details?id=com.devscorpinc.puzzlesdeslizantesmagicos&gl=ES",
    // need to update to current site url once site goes public
    repo: null,
    id: 3,
    logos: [<FlutterLogo />, <FirebaseLogo />]
  },
  {
    name: "AI Tic-Tac-Toe PWA",
    info: [
      "Built with React using vercel.",
      "Using some algorithms to perform better movements.",
      "PWA to allow installation on any device.",
    ],
    media: <TicTacImg />,
    live: "https://ai-ttt.vercel.app",
    // need to update to current site url once site goes public
    repo: "https://github.com/DiegoGonzalezElias/tic-tac-toe",
    id: 4,
    logos: [<ReactLogo />, <TypeScriptLogo />]
  },
  {
    name: "Pomodoro",
    info: [
      "Built with Vuejs using vite.",
      "Add your todos to a list to be productive.",
      "Use Pomodoro function to be focused 25min per sesssion.",
    ],
    media: <Pomodoro />,
    live: "https://pomodoro-roan-nu.vercel.app",
    // need to update to current site url once site goes public
    repo: "https://github.com/DiegoGonzalezElias/pomodoro",
    id: 5,
    logos: [<VueLogo />, <SassLogo />]
  },
  {
    name: "talkHub",
    info: [
      "Built with Vuejs using vite.",
      "log in with google.",
      "add another user and chat with him/her in real time.",
    ],
    media: <TalkHub />,
    live: "https://talkhub-indol.vercel.app/",
    // need to update to current site url once site goes public
    repo: "https://github.com/DiegoGonzalezElias/talkhub",
    id: 6,
    logos: [<VueLogo />, <SassLogo />]
  },


];

export default projects;
