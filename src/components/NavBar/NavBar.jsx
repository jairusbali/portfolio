import React, { useState, useEffect } from "react";

import styled, { css, keyframes } from "styled-components";

import { Container } from "../GlobalStyledComponents/";

// used to control offset between sections
import { Link } from "react-scroll";

// initiates active styling for a nav link
// that is clicked even though the navbar is not
// on top of the section
import Scrollspy from "react-scrollspy";

const Navbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  height: 3rem;
  background-color: #3a3e3e;
  z-index: 10;
`;

const ContainerSpaceBetween = styled(Container)`
  justify-content: space-between;
  flex-grow: 1;

  li {
    display: inline-block;
    margin: 0 1rem;

    a {
      text-decoration: none;
      color: white;
      cursor: pointer;
    }
  }
`;

const Logo = styled.div`
  background-color: red;
  margin-left: 2rem;
`;

const NavItems = styled.div`
  display: block;
`;

const MenuContainer = styled.div`
  cursor: pointer;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-right: 2rem;

  /* hamburger bars */
  div {
    height: 5px;
    padding: 2px 0;
    width: 100%;
    background-color: #000;
    border-radius: 2px;
  }
`;

const HamburgerMenu = styled.div`
  display: none;
`;

const slideIn = keyframes`
  0% {
    transform: translateX(20rem);
  }
  100% {
    transform: translateX(0);
  }
`;

const slideOut = keyframes`
  0% {
    transform:  translateX(0);
  }
  100% {
    transform:translateX(20rem);
  }
`;

const SideNav = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  top: 3rem;
  right: 0;
  z-index: 20;
  position: fixed;
  height: 100vh;
  width: 20rem;
  background-color: #fff;

  li {
    margin: 1rem 0;
    text-align: center;

    a {
      text-decoration: none;
      color: black;
      cursor: pointer;
    }
  }
  animation: ${props =>
    props.show
      ? css`
          ${slideIn} 500ms ease-out both;
        `
      : css`
          ${slideOut} 500ms ease-out both;
        `};
`;

const Backdrop = styled.div`
  display: ${props => (props.show ? "block" : "none")};
  position: fixed;
  height: 100vh;
  width: 100vw;
  z-index: 10;
  background-color: rgba(0, 0, 0, 0.5);
`;

const navItems = ["home", "about", "projects", "contact"];

export default () => {
  const [mobileState, setMobileState] = useState(false);
  const [state, setState] = useState(false);

  const backdrop = state ? (
    <Backdrop show={state && mobileState} onClick={() => setState(!state)} />
  ) : (
    <Backdrop />
  );

  useEffect(() => {
    setMobileState(window.matchMedia("(max-width: 40rem)"));
  }, []);

  const navLinks = (
    <Scrollspy items={navItems} currentClassName="is-current" offset={-48}>
      {navItems.map(item => (
        <li
          key={item}
          onClick={() =>
            setTimeout(
              () => (mobileState && state ? setState(!state) : null),
              500
            )
          }
        >
          <Link
            // activeClass="is-current"
            to={item}
            spy={true}
            smooth={"easeOutQuad"}
            offset={-48}
            duration={500}
            onClick={() =>
              setTimeout(() => mobileState && state && setState(!state), 1000)
            }
          >
            {item.toUpperCase()}
          </Link>
        </li>
      ))}
    </Scrollspy>
  );

  const sideNav = state ? (
    <SideNav show={state && mobileState}>{navLinks}</SideNav>
  ) : (
    <SideNav>{navLinks} </SideNav>
  );

  return (
    <React.Fragment>
      {backdrop}
      {sideNav}
      <Navbar>
        <ContainerSpaceBetween>
          <Logo>Hello</Logo>
          <HamburgerMenu id="hamburger" onClick={() => setState(!state)}>
            <MenuContainer>
              <div />
              <div />
              <div />
            </MenuContainer>
          </HamburgerMenu>
          <NavItems id="navitems">{navLinks}</NavItems>
        </ContainerSpaceBetween>
      </Navbar>
    </React.Fragment>
  );
};
