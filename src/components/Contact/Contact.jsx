import React from "react";
import styled from "styled-components";

import { contactData } from "../../profileData";
import { Container, SectionTitle } from "../GlobalStyledComponents/";

const Section = styled(Container)`
  flex-grow: 0;
  flex-direction: column;
  justify-content: space-evenly;
  height: 40rem;
  background: #616161;
`;

const ContactMediums = styled.h3`
  font-weight: 200;
`;

export default props => (
  <Section id="contact">
    <SectionTitle>{contactData.header}</SectionTitle>
    {contactData.contactMediums.map(medium => (
      <ContactMediums key={medium}>{medium}</ContactMediums>
    ))}
  </Section>
);
