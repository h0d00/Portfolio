import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { BiDownArrowAlt } from "react-icons/bi";
import { Link } from "react-scroll";

export default function Main() {
  return (
    <Wrap>
      <Box>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString("안녕하세요")
              .deleteAll()
              .typeString("사용자에게 편리함을 주고싶은")
              .deleteAll()
              .typeString("트렌드에 민감한")
              .deleteAll()
              .typeString("성장할 준비가 된")
              .deleteAll()
              .typeString("프론트엔드 개발자")
              .pauseFor(100)
              .typeString(
                `<br/><span style=" background: linear-gradient(45deg, Violet, Orange);
                font-size:50px;
                color: transparent; -webkit-background-clip: text;">임호준</span> 입니다.`
              )
              .start()
              .pauseFor(100);
          }}
        />
      </Box>
      <Arrow>
        <Link to="1" spy={true} smooth={true}>
          <BiDownArrowAlt />
          <br />
          스크롤을 내려주세요.
        </Link>
      </Arrow>
    </Wrap>
  );
}
const Wrap = styled.div`
  height: 100vh;
  background-color: #000000;
`;

const Box = styled.div`
  margin: 0 auto;
  width: 90%;
  height: 90vh;
  display: grid;
  place-items: center;
  text-align: center;
  color: #cecece;
  font-size: 35px;
`;

const Arrow = styled.div`
  width: 30%;
  margin: auto;
  text-align: center;
  color: #cecece;
  svg {
    font-size: 30px;
    animation: motion 0.6s linear 0s infinite alternate;
    margin-top: 0;
    cursor: pointer;
  }
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 7px;
    }
  }
`;
