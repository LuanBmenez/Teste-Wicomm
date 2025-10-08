import React, { useState } from "react";
import styled from "styled-components";
import CatSleep from "../Assets/CatSleep.jpg";
import PlayButton from "../Assets/Extras/PlayButton.svg";
const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  background-color: #efefef;
  height: 600px;
`;

const CatWrap = styled.div`
  width: 100%;
`;
const Title = styled.div`
  width: 100%;
  position: relative;
`;
const BallRed = styled.div`
  width: 272px;
  height: 272px;
  background: #bb3735;
  border-radius: 50%;
  position: absolute;
  left: 294px;
  top: 39px;
`;

const TitleDecoration = styled.h2`
  width: 396px;
  height: 257px;
  font-family: Sora;
  font-weight: 400;
  font-size: 70px;
  line-height: 1.3;
  letter-spacing: 0px;
  color: #373737;
  z-index: 2;
  position: absolute;
  left: 130px;
  bottom: 240px;
`;
const Cat = styled.img`
  width: 502px;
  height: 284px;
  object-fit: cover;
  display: flex;
  border-radius: 6px;
  margin-top: 65px;
  margin-left: 11px;
  margin-bottom: 49px;
`;
const CatText = styled.h2`
  width: 505px;
  height: 60px;
  font-family: Sora;
  font-weight: 400;
  font-style: Regular;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0px;
  margin-left: 11px;
`;

const CatBox = styled.button`
  width: 295px;
  height: 45px;
  border-width: 1px;
  gap: 10px;
  border-radius: 29px;
  padding-top: 12px;
  padding-right: 8px;
  padding-bottom: 12px;
  font-family: Sora;
  font-weight: 400;
  font-size: 20px;
  line-height: 100%;
  letter-spacing: 0px;
  margin-top: 53px;
  margin-left: 10px;
  border: 1px solid #000;
  background: ${(props) => (props.active ? "#000" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
`;

const PlayBtn = styled.img`
  width: 92px;
  height: 92px;
  position: absolute;
  left: 856px;
  top: 161px;
`;

export default function CatSleepSection() {
  const [catBoxActive, setCatBoxActive] = useState(false);
  return (
    <Section>
      <Title>
        <BallRed />
        <TitleDecoration>Decorar Arranhar & Relaxar</TitleDecoration>
      </Title>
      <CatWrap>
        <PlayBtn src={PlayButton} />
        <Cat src={CatSleep} alt="cat sleeping" />
        <CatText>
          Hammer can low idea of. Lunch able design items needle here stop
          drive. / or devil pants game close. Prioritize out key view / vendor
          we've. 4-blocker gave shift ideal based post.
        </CatText>
        <CatBox active={catBoxActive} onClick={() => setCatBoxActive((s) => !s)}>
          MAIS SOBRE A GAT
        </CatBox>
      </CatWrap>
    </Section>
  );
}
