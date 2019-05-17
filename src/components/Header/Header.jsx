import React from "react";
import styled from "styled-components";
import { Container } from "../GlobalStyledComponents/";

import { headerData } from "../../profileData";

const Heading = styled.h1`
  width: 100%;
  height: 2rem;
  text-align: center;
  font-size: 4rem;
  font-weight: inherit;
  margin-bottom: 1rem;
`;

const SubHeading = styled.h2`
  width: 100%;
  text-align: center;
  margin: 2rem;
  font-weight: inherit;
  line-height: 1.8rem;
`;

const Section = styled(Container)`
  height: calc(100vh - 3rem);
  background-image: ${props => props.img && `url(${props.img})`};
  background-size: cover;
  align-content: center;
  font-weight: 400;
  padding: 5rem;

  @media only screen and (max-width: 60rem) {
    ${Heading} {
      font-size: 2rem;
    }

    ${SubHeading} {
      font-size: 1rem;
      margin: 2rem auto;
    }
  }
`;

export default props => {
  return (
    <Section id="home" img={headerData.backgroundImage}>
      <Heading>Hi I'm {headerData.firstName}</Heading>
      <SubHeading>{headerData.subHeading}</SubHeading>
    </Section>
  );
};
