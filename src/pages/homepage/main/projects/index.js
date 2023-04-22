import React from "react";

import { Box, Stack, Link, forwardRef } from "@chakra-ui/react";
import { ProjectCard, ProjectInfoCard } from "../../../../components/card";

import { Line, SectionHeader } from "../../../../components/layout";
import { Heading2 } from "../../../../components/typography";
import projects from "../../../../content/projects";


const Projects = forwardRef(({ ...props }, ref) => {
  return (
    <Box
      outline="0"
      ref={ref}
      tabIndex={-1}
      minH="50vh"
      as="section"
      mx="auto"
      {...props}
    >
      <Box mb="128px">
        <SectionHeader sibling={<Line />} mr="16px">
          <Heading2>projects</Heading2>
        </SectionHeader>
      </Box>
      {projects.map((project) => (
        <Stack
          mx="auto"
          w={{ xl: "80%", xxl: "100%" }}
          p={{ md: "2em", lg: "4em" }}
          rounded="8px"
          boxShadow={{ md: "0 0 0 2px" }}
          key={project.id}
          align={{ base: "center", xxl: "unset" }}
          justify="center"
          spacing={4}
          direction={{ base: "column", xxl: "row" }}
          mb="128px"
        >
          <ProjectCard media={project.media} />
          <ProjectInfoCard length={project.length} {...project} />
        </Stack>
      ))}
    </Box>
  );
});

export default Projects;
