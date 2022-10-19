import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { HiOutlineMail } from "react-icons/hi";
import { BsGithub } from "react-icons/bs";
export default function About(props) {
  let position = props.position;

  return (
    <Wrap id="1">
      <AboutWrap>
        <Fade>
          <h1>About Me</h1>
        </Fade>
        <Fade>
          <Top>
            <PhotoWrap>
              <Won>
                <img src="https://ifh.cc/g/byj32v.png" alt="내사진" />
              </Won>
            </PhotoWrap>
            <SnsWrap>
              <a href="mailto:rho510@naver.com">
                <SnsBtn>
                  <HiOutlineMail />
                </SnsBtn>
              </a>
              <a
                href="https://velog.io/@hodoo"
                target="_blank"
                rel="noreferrer"
              >
                <SnsBtn>
                  <svg role="img" viewBox="0 0 24 24">
                    <path d="M3 0C1.338 0 0 1.338 0 3v18c0 1.662 1.338 3 3 3h18c1.662 0 3-1.338 3-3V3c0-1.662-1.338-3-3-3H3Zm6.883 6.25c.63 0 1.005.3 1.125.9l1.463 8.303c.465-.615.846-1.133 1.146-1.553.465-.66.893-1.418 1.283-2.273.405-.855.608-1.62.608-2.295 0-.405-.113-.727-.338-.967-.21-.255-.608-.577-1.193-.967.6-.765 1.35-1.148 2.25-1.148.48 0 .878.143 1.193.428.33.285.494.704.494 1.26 0 .93-.39 2.093-1.17 3.488-.765 1.38-2.241 3.457-4.431 6.232l-2.227.156-1.711-9.628h-2.25V7.24c.6-.195 1.305-.406 2.115-.63.81-.24 1.358-.36 1.643-.36Z" />
                  </svg>
                </SnsBtn>
              </a>
              <a
                href="https://github.com/h0d00"
                target="_blank"
                rel="noreferrer"
              >
                <SnsBtn>
                  <BsGithub />
                </SnsBtn>
              </a>
            </SnsWrap>
          </Top>
          <Bottom>
            <span
              style={{
                fontSize: `${position / 30}px`,
              }}
            >
              사용자에게 최고의 서비스를 선물하는
              <br />
              <br />
              누구든지 쉽게 이용할 수 있는
              <br />
              <br />
              최고의 웹 사이트를 개발하고싶습니다.
            </span>
          </Bottom>
        </Fade>
      </AboutWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  padding-top: 5vh;
  position: sticky;
  background-color: #000000;
  color: #cecece;
`;

const AboutWrap = styled.div`
  margin: 0 auto;
  width: 90%;
  text-align: center;

  h1 {
    font-size: 50px;
  }
`;

const Top = styled.div`
  margin: 100px auto;
  width: 70%;
  display: flex;
  justify-content: center;
  gap: 100px;
`;

const PhotoWrap = styled.div`
  img {
    width: 200px;
    height: 200px;
  }
`;

const Won = styled.div`
  border-radius: 100%;
  background: linear-gradient(45deg, Violet, Orange);
  overflow: hidden;
`;

const SnsWrap = styled.div`
  width: 200px;
  font-size: 24px;
  display: grid;
`;

const SnsBtn = styled.div`
  width: 50px;
  height: 50px;
  line-height: 60px;
  border-radius: 28px;
  color: black;
  background-color: white;

  svg {
    width: 24px;
    height: 24px;
  }

  a {
    text-decoration: none;
    color: black;
  }
  :hover {
    width: 200px;
    transition: 0.5s;
    background: linear-gradient(45deg, Violet, Orange);
  }
`;

const Bottom = styled.div`
  width: 100%;
  margin: 0 auto;
  height: 300px;
`;
