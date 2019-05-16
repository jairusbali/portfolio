import React from "react";

import styled from "styled-components";
import { Container } from "../../GlobalStyledComponents";

const StyledCard = styled(Container)`
  width: 30%;
  height: 80%;
  flex-direction: column;
  justify-content: space-evenly;

  h4 {
    width: 100%;
    font-weight: 200;
  }

  @media only screen and (max-width: 60rem) {
    height: 30%;
    width: 100%;
    margin: 0 auto 1rem;
  }

  p {
    width: 100%;
  }

  h3 {
    width: 100%;
  }

  img {
    height: 250px;
    width: 250px;

    padding: 1rem;
  }
`;

const IconLink = styled.a`
  color: inherit;
  div {
    justify-content: space-evenly;
    height: 100%;
  }

  &:hover {
    background-color: white;
    i,
    span {
      color: #404a51;
    }
  }

  text-decoration: none;
  width: 80%;
  border: 1px solid black;
  border-radius: 45px;
  margin: 0 auto;
  background-color: #404a51;
  padding: 0.7rem 0;

  i {
    height: 2rem;
    font-size: 2rem;
    color: white;
  }

  @media only screen and (max-width: 60rem) {
    width: 80%;
    border: 1px solid black;
    border-radius: 45px;
    margin: 0;
    background-color: #404a51;
    padding: 0.7rem 0;
    width: 50%;

    i {
      height: 1rem;
      font-size: 1rem;
    }
  }
`;

const Card = ({ imgName, title, description, gitLink, codeLink }) => {
  return (
    <StyledCard>
      <img src={imgName} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>

      <IconLink href={gitLink} target="_blank" rel="noopener noreferrer">
        <Container>
          <i className="fab fa-github-alt" /> <span>Code</span>
        </Container>
      </IconLink>

      <IconLink href={codeLink} target="_blank" rel="noopener noreferrer">
        <Container>
          <i className="fas fa-eye" /> <span>Live</span>
        </Container>
      </IconLink>
    </StyledCard>
  );
};

export default Card;
