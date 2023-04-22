import { Box, Link, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import React, { forwardRef, useEffect } from "react";
import { ImageProfile } from "../../../../assets/images";
import { Line, SectionHeader } from "../../../../components/layout";
import {
  Body,
  BodyLink,
  Bullet,
  Heading2,
  Heading3,
} from "../../../../components/typography";
import useColorSwitcher from "../../../../utils/hooks/useColorSwitcher";

const About = forwardRef(({ ...props }, ref) => {
  const greyBg = useColorModeValue("neutral.300", "neutral.500");
  const lightGreyBg = useColorModeValue("neutral.100", "neutral.700");
  const { secondary } = useColorSwitcher();

  return (
    <Box as="section" outline="0" ref={ref} tabIndex={-1} {...props} w="100%">
      <Box w="100%" mb={{ base: "32px", md: "64px", xl: "128px" }}>
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>about</Heading2>
        </SectionHeader>
      </Box>
      <Stack
        align="center"
        spacing={16}
        direction={{ base: "column-reverse", xl: "row" }}
        justify={{ base: "space-between", xl: "space-evenly" }}
      >
        <Box
          bg={lightGreyBg}
          rounded="full"
          display="grid"
          placeItems="center"
          p={{ base: "8px", md: "16px" }}
        >
          <Box
            bg={greyBg}
            rounded="full"
            display="grid"
            placeItems="center"
            p={{ base: "8px", md: "16px" }}
          >
            <ImageProfile />
          </Box>
        </Box>
        <Stack spacing={12} p="8px" w={{ base: "100%", xl: "50%" }}>
          <Body mb="2em">
          Greetings! I'm Diego, a novice front-end developer located in Cádiz, Spain.
          I relish the opportunity to tackle thrilling ventures that challenge my knowledge
          and allow me to explore the ever-progressing technologies available. I'm continuously
          searching for innovative and, most significantly, ethical and inclusive approaches to
          address the typical issues we encounter on a regular basis.
          </Body>
          <Box>
            <Heading3>What I've been up to:</Heading3>
            <Stack as="ul">
              <Bullet as="li">Building this!</Bullet>
              <Bullet as="li">Getting deeper into React and Nodejs</Bullet>
              <Bullet as="li">Learning Flutter</Bullet>
              {/* <Bullet as="li">
                Live Coding on{" "}
                <Link
                  color={secondary}
                  textDecor="underline"
                  href="https://www.twitch.tv/"
                >
                  Twitch
                </Link>
              </Bullet>
              <Bullet as="li">
                Starting the{" "}
                <Link
                  color={secondary}
                  textDecor="underline"
                  href="https://chingu.io/"
                >
                  Chingu Voyage 28
                </Link>
              </Bullet> */}
            </Stack>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
});

export default About;
