import { Text } from "@chakra-ui/react";
import { Hero } from "../components/Hero";
import { Container } from "../components/Container";
// import { Main } from "../components/Main";
import { DarkModeSwitch } from "../components/DarkModeSwitch";
import { CTA } from "../components/CTA";
import { Footer } from "../components/Footer";
import React from "react";
import { Works } from "../components/Works";
import { Stacks } from "../components/Stack";
import { Contact } from "../components/Contact";

const Index = () => (
  <Container minW={{ base: "container" }} px={{ base: 4, md: 6 }} minHeight="100vh" transition="background-color 800ms linear">
    <Hero />
    <Stacks />
    <Works />
    <DarkModeSwitch />
    <Contact />
    {/* <CTA /> */}
    <Footer />
  </Container>
);

export default Index;
