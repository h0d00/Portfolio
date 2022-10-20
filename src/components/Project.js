import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";
import { FaHtml5, FaCss3Alt, FaReact } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";

export default function Project(props) {
  let position = props.position;
  console.log(position);
  return (
    <Wrap id="3">
      <Fade>
        <h1>Project</h1>
      </Fade>
      <ProjectWrap>
        <ProjectItem>
          <Fade bottom>
            <ProjectImg position={position}>
              <img
                alt="gif"
                src="https://user-images.githubusercontent.com/110148272/188800978-552b2556-136f-4a61-9528-5f3e56e361b1.gif"
              />
            </ProjectImg>
          </Fade>
          <Fade bottom>
            <Detail>
              <strong>쇼핑몰 사이트</strong>
              <Skill>
                <FaHtml5 color="#dc4b24" />
                <FaCss3Alt color="#31a4d4" />
                <SiJavascript color="#eed91b" />
                <FaReact color="#7ad9f4" />
              </Skill>
              <div>
                jsonplaceholder를 이용한 RESTful 비동기 통신 후 Redux를 이용하여
                상품목록 구현
              </div>
              <div>
                localstorage를 이용해서 장바구니 기능 / 라이트모드 다크모드 구현
              </div>
              <div>Media Query를 통해 반응형 웹 구현</div>
              <LinkZone>
                <Href
                  href="https://github.com/h0d00/Hodoo-Shop"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Href>
                <Href
                  href="https://hodoo-shop.vercel.app/"
                  target="_blank"
                  rel="noreferrer"
                >
                  URL
                </Href>
              </LinkZone>
            </Detail>
          </Fade>
        </ProjectItem>
        <ProjectItem>
          <Fade bottom>
            <ProjectImg position={position}>
              <img
                alt="gif"
                src="https://user-images.githubusercontent.com/110148272/195049062-7063d7ac-76b1-45be-b398-73ca1969d882.gif"
              />
            </ProjectImg>
          </Fade>
          <Fade bottom>
            <Detail>
              <strong>스타크래프트 강의 플랫폼 (FE:2/BE:3 TeamProject)</strong>
              <Skill>
                <FaHtml5 color="#dc4b24" />
                <FaCss3Alt color="#31a4d4" />
                <SiJavascript color="#eed91b" />
                <FaReact color="#7ad9f4" />
              </Skill>
              <div>카카오 오븐을 통해 와이어프레임 설계</div>
              <div>
                Restful API로 게이머, 강의, 게시판 글 데이터로 CRUD 기능 구현
              </div>
              <div>Redux를 통해 전역상태 관리</div>
              <div>Ouath 2.0을 이용한 Kakao, google 로그인 구현</div>
              <div>Admin 로그인 /강의, 게이머, 회원정보 CRUD 구현</div>
              <div>
                React-Quill 에디터를 이용한 게시판 기능, 이미지 업로드 구현
              </div>
              <LinkZone>
                <Href
                  href="https://github.com/h0d00/Stardy"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </Href>
                <Href
                  href="https://dokuny.notion.site/Stardy-1a5d71be1ff149c8b8495a148c1bca3c"
                  target="_blank"
                  rel="noreferrer"
                >
                  Notion
                </Href>
              </LinkZone>
            </Detail>
          </Fade>
        </ProjectItem>
      </ProjectWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  height: 100vh;
  padding-top: 5vh;
  background-color: #000000;
  color: #cecece;

  h1 {
    font-size: 50px;
    text-align: center;
  }
`;

const ProjectWrap = styled.div`
  margin: 100px auto;
  width: 95%;
  display: flex;
  flex-direction: column;
  gap: 100px;
`;

const ProjectItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 50px;
`;

const ProjectImg = styled.div`
  margin: 0 auto;
  width: 60%;
  img {
    width: 100%;
  }
`;

const Detail = styled.div`
  margin: 0 auto;
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  font-size: 18px;
`;

const Skill = styled.div`
  svg {
    font-size: 30px;
  }
  display: flex;
  gap: 10px;
`;

const LinkZone = styled.div`
  display: flex;
  gap: 20px;
`;

const Href = styled.a`
  width: 100px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  border-radius: 20px;
  text-decoration: none;
  color: black;
  background-color: white;

  :hover {
    background: linear-gradient(45deg, Violet, Orange);
  }
`;
