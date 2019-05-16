import React from "react";
import styled from "styled-components";

import { aboutData } from "../../profileData";

import { Container, SectionTitle } from "../GlobalStyledComponents/";

const StyledAboutContainer = styled(Container)`
  height: 40rem;
  background-color: #616161;
  align-content: center;
  align-items: center;
  align-content: center;
`;

const Image = styled(Container)`
  width: 30%;
  height: 80%;
  text-align: center;
  background-image: url(${props => props.image || ""});
  justify-content: flex-end;

  img {
    height: 300px;
    width: 250px;
    border-radius: 50%;
    margin: 4rem;
  }

  @media (max-width: 680px) {
    width: 100%;
    height: 50%;
    justify-content: center;
    img {
      margin: 0;
    }
  }
`;

const Description = styled(Container)`
  width: 40%;
  height: 80%;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
  padding-right: 5rem;
  font-weight: 200;
  letter-spacing: 0.02rem;
  word-spacing: 0.02rem;

  @media (max-width: 680px) {
    width: 90%;
    height: 40%;
    padding: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const IconSection = styled.div`
  margin-top: 2rem;
  i {
    font-size: 3rem;
    margin: 0.8rem;
  }
  @media (max-width: 680px) {
    margin: 0;
  }
`;

export default () => {
  return (
    <StyledAboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      <Image>
        <img src={aboutData.profilePicUrl} alt="profile pic" />
      </Image>
      <Description>
        <p>{aboutData.description}</p>
        <IconSection>
          <i className="fab fa-html5" />
          <i className="fab fa-css3-alt" />
          <i className="fab fa-js-square" />
          <i className="fab fa-react" />
          <i className="fab fa-npm" />
          <i className="fab fa-sass" />
          <i className="fab fa-git-square" />
        </IconSection>
      </Description>
    </StyledAboutContainer>
  );
};
