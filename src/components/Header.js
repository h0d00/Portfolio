import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "../fonts/font.css";
export default function Header() {
  return (
    <Wrap>
      <Box>
        <Logo>Hodoo Portfolio</Logo>
        <Nav>
          <Link to="1" spy={true} smooth={true}>
            <span>About</span>
          </Link>
          <Link to="2" spy={true} smooth={true}>
            <span>Skill</span>
          </Link>{" "}
          <Link to="3" spy={true} smooth={true}>
            <span>Project</span>
          </Link>
        </Nav>
      </Box>
    </Wrap>
  );
}

const Wrap = styled.header`
  width: 100%;
  height: 5vh;
  color: white;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  opacity: 0.9;
  background-color: black;
  border-bottom: 1px solid black;
  font-family: "Logo";
`;

const Box = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 70%;
  height: 100%;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
`;
const Logo = styled.div``;
const Nav = styled.div`
  display: flex;
  gap: 20px;
`;
const Navitem = styled.div``;
