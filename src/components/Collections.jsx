import React, { useState } from "react";
import styled from "styled-components";
import TableLeft from "../Assets/TableLeft.png";
import TableRight from "../Assets/TableRigth.png";
import Arrow3 from "../Assets/Arrow3.png";
import Arrow4 from "../Assets/Arrow4.png";
import Rectangle33 from "../Assets/Rectangle33.png";
import Rectangle34 from "../Assets/Rectangle34.png";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  height: auto;
  margin-left: 80px;
`;

const Container = styled.div`
  width: 1234px;
  display: flex;
  flex-direction: column;
`;
const Card = styled.div`
  position: relative;
  background: #fff;
  min-height: 680px;
  display: flex;
  align-items: stretch;
  overflow: visible;
  padding-top: 16px;
`;
const Title = styled.h2`
  font-family: Sora;
  font-weight: 700;
  font-size: 20px;
  color: #000;
  position: absolute;
  left: 550px;
  top: -2px;
`;

const SeeAll = styled.a`
  font-family: Sora;
  font-weight: 200;
  font-size: 14px;
  color: #000;
  text-decoration: underline;
  width: 82px;
  height: 10px;
  opacity: 1;
  cursor: pointer;
  position: absolute;
  left: 790px;
  top: 0.5px;
`;

const ProductLeft = styled.img`
  position: absolute;
  width: 360px;
  height: 469px;
  top: 77px;
  z-index: 3;
  right: 275px;
  object-fit: contain;
`;
const ProductRigth = styled.img`
  position: absolute;
  width: 465px;
  height: 560px;
  top: 204px;
  z-index: 3;
  right: 132px;
`;

const TextBlock = styled.div`
  position: absolute;
  max-width: 320px;
  left: 270px;
  top: 275px;
  line-height: 30px;
`;

const BigTitle = styled.h3`
  font-family: Sora;
  font-weight: 700;
  font-style: Bold;
  font-size: 50px;
  leading-trim: NONE;
  line-height: 57px;
  letter-spacing: 0px;
`;

const Paragraph = styled.p`
  font-family: Sora;
  font-size: 20px;
  color: #000;
  margin-bottom: 26px;
  width: 340px;
`;

const Cta = styled.button`
  border: 1px solid ${(props) => (props.active ? "#000" : "#000")};
  background: ${(props) => (props.active ? "#000" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  margin-top: 10px;
  padding: 10px 36px;
  border-radius: 999px;
  font-family: Sora;
  font-size: 20px;
  cursor: pointer;
`;

const TealTag = styled.div`
  position: absolute;
  left: 24px;
  top: 0px;
  width: 483px;
  height: 210px;
  background: #4da1b1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px 36px 24px 190px;
  z-index: 1;
  box-sizing: border-box;
`;

const DottedRect = styled.img`
  position: absolute;
  left: 166px;
  top: 87px;
  width: 568px;
  height: 568px;
`;

const DottedCircle = styled.img`
  position: absolute;
  left: 715px;
  top: 60px;
  width: 298px;
  height: 298px;
`;

const ContainerArrow = styled.div`
     display: flex;
    position: absolute;
    left: 1004px;
    gap: 32px;
    top: 0.4px;
`;

export default function Collections() {
  const [exploreActive, setExploreActive] = useState(false);
  return (
    <Section>
      <Container>
        <Card>
          <Title>COLEÇÕES</Title>
          <SeeAll>VER TODAS</SeeAll>

          <ContainerArrow>
            <img src={Arrow4} />
            <img src={Arrow3} />
          </ContainerArrow>
          <TealTag>
            <BigTitle>
              MINIMA
              <br />
              LISMO
            </BigTitle>
            <ProductLeft src={TableLeft} alt="Coleção da esquerda" />
          </TealTag>
          <TextBlock>
            <Paragraph>
              Also reality power discussion buy-in closest goto model. Have
              protocol at long practices low- hanging data most driver’s.
            </Paragraph>
            <Cta active={exploreActive} onClick={() => setExploreActive((s) => !s)}>
              EXPLORAR
            </Cta>
          </TextBlock>
          <DottedRect src={Rectangle33} />
          <ProductRigth src={TableRight} />
          <DottedCircle src={Rectangle34} />
        </Card>
      </Container>
    </Section>
  );
}
