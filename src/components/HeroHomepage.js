import React, { Component } from "react";
import Img from "gatsby-image";
import styled from "react-emotion";
import "../css/aslezak.scss";

import { ThemeProvider } from "emotion-theming";
import theme from "../css/Theme";
import {
  Flex,
  Subhead,
  Box,
  Heading,
  Absolute,
  Container,
  Relative
} from "rebass";
import XRay from "react-x-ray";
import { Link as ScrollLink, Element } from "react-scroll";

import HomeHeroHeaderLight1 from "../styled/HomeHeroHeaderLight1";
import HomeHeroSubHeaderLight from "../styled/HomeHeroSubHeaderLight";
import HomeHeroOverlay from "../styled/HomeHeroOverlay";

export default class componentName extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Flex>
          <Box w={1} mt={1}>
            <Absolute w={1} z={-1}>
              <Img
                className="homeHero-background"
                sizes={this.props.background.sizes}
                backgroundColor="#99765E"
              />
            </Absolute>

            <Relative w={1}>
              <Absolute w={1} z={2}>
                <Container w={1} align="center">
                  <Box w={1}>
                    <Flex column>
                      <Subhead pt={[0, 3, 3, 4]} w={1} pt={[3, 4]}>
                        <HomeHeroHeaderLight1
                          f={[5, 6, 6, 7]}
                          letterSpacing={1}
                          lineheight={1 * 1.5}
                        >
                          <Box mb={[0, 0, 0, 0]}>Andy Slezak</Box>
                        </HomeHeroHeaderLight1>
                        <Box>
                          <HomeHeroSubHeaderLight
                            f={[4, 4, 4, 5]}
                            letterSpacing={1}
                            lineheight={1 * 1.25}
                          >
                            <Box>Design & code smart web apps</Box>
                          </HomeHeroSubHeaderLight>
                        </Box>
                      </Subhead>
                    </Flex>
                  </Box>
                </Container>
              </Absolute>
              <HomeHeroOverlay w={1} z={2}>
                <Relative z={1}>
                  <ScrollLink
                    to="hello"
                    smooth={true}
                    duration={500}
                    offset={-75}
                    animation="easeInOutQuart"
                  >
                    <Img
                      className="homeHero-gear"
                      sizes={this.props.gear.sizes}
                    />
                  </ScrollLink>
                </Relative>
              </HomeHeroOverlay>
              <Absolute />
            </Relative>
          </Box>
        </Flex>
      </ThemeProvider>
    );
  }
}
