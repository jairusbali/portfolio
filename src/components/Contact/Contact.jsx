import React from "react";
import styled from "styled-components";

import { contactData } from "../../profileData";
import { Container } from "../GlobalStyledComponents/";

const Section = styled(Container)`
  flex-grow: 0;
  flex-direction: column;
  height: 40rem;
  background: #616161;
`;

const ContactHeader = styled.h2``;

const ContactMediums = styled.h3``;

export default props => (
  <Section id="contact">
    <ContactHeader>{contactData.header}</ContactHeader>
    {contactData.contactMediums.map(medium => (
      <ContactMediums key={medium}>{medium}</ContactMediums>
    ))}
  </Section>
);
