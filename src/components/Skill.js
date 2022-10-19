import React from "react";
import styled from "styled-components";
import RubberBand from "react-reveal/RubberBand";

export default function Skill(props) {
  let position = props.position;

  return (
    <Wrap position={position} id="2">
      <h1>Skill</h1>
      <SkillZone>
        <RubberBand>
          <img className="html" alt="html" src="https://ifh.cc/g/kGWm2Z.png" />
          <img className="css" alt="css" src="https://ifh.cc/g/zvOV2G.png" />
          <img className="js" alt="js" src="https://ifh.cc/g/XBjTbX.png" />
          <img
            className="react"
            alt="react"
            src="https://ifh.cc/g/r6BqB9.png"
          />
          <img
            className="redux"
            alt="redux"
            src="https://ifh.cc/g/cK565K.png"
          />
        </RubberBand>
      </SkillZone>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  padding-top: 5vh;
  color: white;
  background: rgb(0, 0, 0);
  background: ${(props) => `
  linear-gradient(
    ${props.position / 13}deg,
    rgba(0,0,0,1) 5%, rgba(149,15,195,1) 27%, rgba(139,200,200,1) 67%, rgba(0,0,0,1) 90%
  )
  `};

  h1 {
    text-align: center;
    font-size: 50px;
  }
`;

const SkillZone = styled.div`
  margin: 200px auto;
  width: 70%;
  display: flex;
  justify-content: center;
  img {
    width: 200px;
  }
`;
