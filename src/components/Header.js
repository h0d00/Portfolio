import React from "react";
import styled from "styled-components";
import { Link } from "react-scroll";
import "../fonts/font.css";
export default function Header(props) {
  let position = props.position;

  return (
    <Wrap>
      <Box>
        <Logo>Hodoo Portfolio</Logo>
        <Nav>
          <Link to="1" spy={true} smooth={true}>
            {400 < position && position < 1605 ? (
              <Scroll>About</Scroll>
            ) : (
              <span>About</span>
            )}
          </Link>
          <Link to="2" spy={true} smooth={true}>
            {1605 < position && position < 2500 ? (
              <Scroll>Skill</Scroll>
            ) : (
              <span>Skill</span>
            )}
          </Link>
          <Link to="3" spy={true} smooth={true}>
            {2500 < position ? <Scroll>Project</Scroll> : <span>Project</span>}
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
  z-index: 3;
  opacity: 0.8;
  background-color: black;
  border-bottom: 1px solid black;
  font-family: "Logo";
`;

const Box = styled.div`
  margin: 0 auto;
  padding: 10px 0;
  width: 90%;
  height: 100%;
  display: flex;
  font-size: 20px;
  justify-content: space-between;
`;
const Logo = styled.div``;
const Nav = styled.div`
  display: flex;
  gap: 20px;

  span {
    cursor: pointer;
  }
`;
const Navitem = styled.div``;
const Scroll = styled.span`
  cursor: pointer;
  border-bottom: 3px solid white;
`;
