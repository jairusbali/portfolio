import React from "react";
import styled from "styled-components";
import { Container, SectionTitle } from "../GlobalStyledComponents/";
import Card from "./Card/Card";

import { projectsData } from "../../profileData";

const Section = styled(Container)`
  height: 40rem;
  background: #000;
  text-align: center;

  @media only screen and (max-width: 60rem) {
    height: 120rem;
  }
`;

const ProjectsContainer = styled(Container)`
  height: 95%;
  padding: 0 5rem;

  @media only screen and (max-width: 60rem) {
    height: 100%;
    width: 100%;
    padding: 5rem;
    flex-direction: column;
    justify-content: space-evenly;
  }
`;

const ProjectsSectionTitle = styled(SectionTitle)`
  margin-top: 1.5rem;
`;

export default props => {
  return (
    <Section id="projects">
      <ProjectsSectionTitle>Here are some of my projects</ProjectsSectionTitle>
      <ProjectsContainer>
        {projectsData.map(card => {
          return (
            <Card {...card} key={Date.now() * (Math.random() * (1000 - 1))}>
              {card}
            </Card>
          );
        })}
      </ProjectsContainer>
    </Section>
  );
};
