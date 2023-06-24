import { Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import profile from "./me.jpg";
import portfolio from "./portfolio";
import gitjobs from "./gitjobs";
import ticTac from "../images/tic-tac/tic-tac.png";
import puzzles from "../images/puzzles/puzzles.png";
import pomodoro from "../images/pomodoro/Pomodoro.png";
import talkhub from "../images/talkhub/TalkHub.png";
//logos
import typescriptLogo from "../images/logos/Typescript_logo.png";
import reactLogo from "../images/logos/React_logo.png";
import nextjsLogo from "../images/logos/Nextjs_logo.png";
import jsLogo from "../images/logos/JS_logo.png";
import vueLogo from "../images/logos/Vue_logo.png";
import flutterLogo from "../images/logos/Flutter_logo.png";
import tailwindLogo from "../images/logos/Tailwind_logo.png";
import sassLogo from "../images/logos/Sass_logo.png";
import stripeLogo from "../images/logos/Stripe_logo.png";
import firebaseLogo from "../images/logos/Firebase_logo.png";

export const ImageProfile = () => {
  return (
    <Image
      mx="auto"
      borderRadius="full"
      objectFit="cover"
      boxSize={{
        base: "160px",
        sm: "240px",
        md: "300px",
        lg: "320px",
        xl: "400px",
      }}
      src={profile}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Diego Gonzalez"
    />
  );
};

export const PortfolioImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      maxW="850px"
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={portfolio.light[2]}
      srcSet={`${
        colorMode === "light" ? portfolio.light[0] : portfolio.dark[0]
      } 400w, ${
        colorMode === "light" ? portfolio.light[1] : portfolio.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Portfolio Site"
    />
  );
};

export const GitjobsImg = () => {
  const { colorMode } = useColorMode();
  return (
    <Image
      maxW="850px"
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={gitjobs.light[2]}
      srcSet={`${
        colorMode === "light" ? gitjobs.light[0] : gitjobs.dark[0]
      } 400w, ${
        colorMode === "light" ? gitjobs.light[1] : gitjobs.dark[1]
      } 800w`}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Gitjobs project"
    />
  );
};

export const TicTacImg = () => {
  return (
    <Image
      maxW="850px"
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={ticTac}
      fallbackSrc="https://via.placeholder.com/500"
      alt="tic tac toe react project"
    />
  );
};

export const Pomodoro = () => {
  return (
    <Image
      maxW="850px"
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={pomodoro}
      fallbackSrc="https://via.placeholder.com/500"
      alt="pomodoro with vue"
    />
  );
};

export const TalkHub = () => {
  return (
    <Image
      maxW="850px"
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={talkhub}
      fallbackSrc="https://via.placeholder.com/500"
      alt="chat app with vue"
    />
  );
};

export const PuzzlesImg = () => {
  return (
    <Image
      maxW="850px"
      rounded="8px"
      mx={{ base: "auto", xxl: 0 }}
      objectFit="cover"
      boxSize="100%"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={puzzles}
      fallbackSrc="https://via.placeholder.com/500"
      alt="flutter puzzles app project"
    />
  );
};


//APP TEC USED LOGOS
export const TypeScriptLogo = () => {
  return (
    <Image
      width="100%"
      height="20px"
      maxW="20px"
      rounded="2px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={typescriptLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="typescript logo"
    />
  )
}

export const ReactLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={reactLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="reactjs logo"
    />
  )
}

export const TailwindLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={tailwindLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Tailwind logo"
    />
  )
}

export const NextjsLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={nextjsLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="nextjs logo"
    />
  )
}

export const JsLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={jsLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="JS logo"
    />
  )
}

export const VueLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={vueLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Vue logo"
    />
  )
}

export const SassLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={sassLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Sass logo"
    />
  )
}

export const StripeLogo = () => {
  return (
    <Image
      width="100%" 
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={stripeLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Stripe logo"
    />
  )
}


export const FirebaseLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={firebaseLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Firebase logo"
    />
  )
}


export const FlutterLogo = () => {
  return (
    <Image
      width="100%"
      maxW="20px"
      rounded="2px"
      height="20px"
      boxShadow={{ base: "0 0 0 2px", md: "0 0 0 4px" }}
      src={flutterLogo}
      fallbackSrc="https://via.placeholder.com/500"
      alt="Flutter logo"
    />
  )
}