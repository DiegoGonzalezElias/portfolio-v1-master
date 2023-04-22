import { createIcon, defaultProps, Icon, useColorMode } from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";
import { Children } from "react";
import useColorSwitcher from "../../../utils/hooks/useColorSwitcher";
import logoLight from "./logo.png";
import logoDark from "./logo-dark.png"


const groupVariants = {
  hidden: {
    fillOpacity: -25,
  },
  visible: {
    fillOpacity: 1,

    transition: {
      // delay: 0.5,
      duration: 2.5,
      ease: "easeInOut",
    },
  },
};

const pathVariants = {
  hidden: {
    pathLength: 0,
    pathOffset: 1,
    opacity: 0,
  },
  visible: {
    pathLength: 1,
    pathOffset: 0,
    opacity: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

const Logo = ({ boxSize = "64px", ...props }) => {
  const { colorMode } = useColorMode();
  const logoSrc = colorMode === "light" ? logoLight : logoDark;
  return <img
  src={logoSrc}
  alt="Logo de la empresa"
  width="50"
  height="50"
  />
};

export default Logo;
