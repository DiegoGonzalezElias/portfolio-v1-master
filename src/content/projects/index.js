import React from "react";
import { GitjobsImg, PortfolioImg } from "../../assets/images";

const projects = [
  {
    name: "Sitetoapp",
    info: [
      "Develop a customized Android or IOS mobile app using your website URL as reference. You can add ads and notifications to your app",
      "You can see a previsualization of your website in small devices",
      "Supports stripe payment service.",
    ],
    media: <GitjobsImg />,
    live: "asdasdasd",
    repo: null,
    id: 1,
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
  },
  
];

export default projects;
