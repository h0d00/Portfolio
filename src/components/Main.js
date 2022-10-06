import React from "react";
import styled from "styled-components";
import Typewriter from "typewriter-effect";
import { BiDownArrowAlt } from "react-icons/bi";
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
                `<br/> <span style="color: #27ae60;">임호준</span>입니다.`
              )
              .start()
              .pauseFor(100);
          }}
        />
      </Box>
      <Arrow>
        <BiDownArrowAlt />
        <br />
        스크롤을 내려주세요.
      </Arrow>
    </Wrap>
  );
}
const Wrap = styled.div`
  height: 100vh;
`;

const Box = styled.div`
  margin: 0 auto;
  width: 70%;
  height: 90vh;
  display: grid;
  place-items: center;
  text-align: center;
  font-size: 35px;
`;

const Arrow = styled.div`
  text-align: center;
  svg {
    font-size: 30px;
    animation: motion 0.7s linear 0s infinite alternate;
    margin-top: 0;
  }
  @keyframes motion {
    0% {
      margin-top: 0px;
    }
    100% {
      margin-top: 10px;
    }
  }
`;
