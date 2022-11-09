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
  margin: 0 auto;
  min-height: 1vh;
  width: 100%;
  padding: 50px 0;
  color: white;
  background: rgb(0, 0, 0);
  background: ${(props) => `
  linear-gradient(
    ${props.position / 4}deg,
    red, blue
  )
  `};

  h1 {
    text-align: center;
    font-size: 50px;
  }
`;

const SkillZone = styled.div`
  margin: 50px auto;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  img {
    width: 150px;
  }
`;
