import React from "react";
import {
  HeroSection,
  HeroText,
  ButtonWrapper,
  VideoIframe,
  VideoContainer,
  Button,
  Container,
  MainHeading,
} from "./HeroStyles";

import { Slide } from "react-awesome-reveal";

const Hero = () => {
  return (
    <HeroSection>
      <Container>
        <Slide direction="left" delay={1}>
          <MainHeading>Database Management</MainHeading>
        </Slide>
        <HeroText>
          Our expertise lies in the conception and maintenance of scalable
          databases, a process through which we guarantee the accessibility,
          security, and systematic arrangement of your data. By constructing
          databases with the ability to expand seamlessly as your data volume
          grows, we enable efficient data retrieval and manipulation. Our
          stringent security measures safeguard your data against unauthorized
          access or breaches, fostering a trustworthy environment. Furthermore,
          we meticulously organize the data within these databases, enhancing
          searchability and enabling swift extraction of relevant information.
        </HeroText>
        <VideoContainer>
          <VideoIframe src="https://www.youtube.com/embed/cMUQznvYZ6w" />
        </VideoContainer>
        <ButtonWrapper>
          <Button>Find Jobs</Button>
          <Button>Resources</Button>
        </ButtonWrapper>
      </Container>
    </HeroSection>
  );
};

export default Hero;
