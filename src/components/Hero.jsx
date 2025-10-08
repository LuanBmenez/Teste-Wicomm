import React from "react";
import styled from "styled-components";
import Nav from "./Nav";

const HeroWrap = styled.section`
  height: 559px;
  overflow: hidden;
  display: flex;
  align-items: center;
  margin-top: 10px;
  background: #fff;
`;

const CTA = styled.a`
  display: inline-block;
  margin-top: 22px;
  background: #000;
  color: #fff;
  padding: 12px 22px;
  border-radius: 999px;
  text-decoration: none;
  font-weight: 600;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
`;

const MainImage = styled.img`
  top: 10px;
  width: 100%;
  max-width: 1179px;
  height: 559px;
  object-fit: contain;
  transition: transform 0.35s ease;
  margin: 0px 14px;
`;

const LeftImage = styled.img`
  width: 140px;
  z-index: 2;
  object-fit: contain;
  transition: transform 0.35s ease;
`;

const RightImage = styled.img`
  width: auto;
  z-index: 2;
  object-fit: contain;
  transition: transform 0.35s ease;
`;

export default function Hero() {
  return (
    <HeroWrap>
      <Nav />
      <LeftImage src="/baner_TopEsquerda.png" alt="Produto à esquerda" />
      <MainImage src="/baner_TopCentral.png" alt="Produto central" />
      <RightImage src="/baner_TopDireita.png" alt="Produto à direita" />
    </HeroWrap>
  );
}
