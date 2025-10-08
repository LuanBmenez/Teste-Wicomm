
import prize from "../assets/Extras/prize.png";
import React from "react";
import styled from "styled-components";
import Hero from "./Hero";

const FeatureBlock = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  margin-top: 24px;
`;
const ContainerAll = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  margin-bottom: 80px;
`;
const BarBlock = styled.div`
  width: 1179px;
  height: 9px;
  top: 569px;
  left: 50px;
  opacity: 1;
  background: #262626;
`;
const FeatureInner = styled.div`
  width: 1179px;
  height: 238px;
  background: #de5a53;
  box-sizing: border-box;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const BoxAll = styled.div`
  display: flex;
  width: 1030px;
  height: 180px;
  opacity: 1;
  border-width: 0;
  justify-content: space-between;
  align-items: flex-start;
`;

const BoxFirst = styled.div`
  display: flex;
  width: 315px;
  height: 180px;
  angle: 0 deg;
  opacity: 1;
  border-width: 1px;
  gap: 13px;
  border: 1px solid #ffffff;
  align-items: center;
`;

const TextMain = styled.p`
  font-family: Oswald;
  font-weight: 250;
  font-size: 140px;
  line-height: 100%;
  width: 119px;
  margin-left: 13px;
  margin-top: -15px;
  opacity: 1;
  color: #ffffff;
  z-index: 10;
`;

const TextBoxLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;
const TextSub = styled.h3`
  width: 148px;
  height: 60px;
  opacity: 1;
  font-family: Sora;
  font-weight: bold;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
`;

const TextDescription = styled.p`
  width: 155px;
  height: 35px;
  font-family: Sora;
  font-weight: Light;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #ffffff;
`;

const BoxTriple = styled.div`
  display: flex;
  width: 238px;
  height: 129px;
  opacity: 1;
  border-width: 1px;
  border: 1px solid #ffffff;
  flex-direction: column;
`;

const Prize = styled.img`
  width: 47px;
  height: 47px;
  opacity: 1;
  margin-top: 18px;
  margin-left: 18px;
`;
const TextSecundary = styled.h3`
  width: 130.64px;
  height: 44px;
  angle: 0 deg;
  opacity: 1;
  font-family: Sora;
  font-weight: Bold;
  font-size: 22px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: right;
  color: #fff;
  margin: 23px 20px 8px 16px;
`;

const TextFinal = styled.p`
  font-family: Sora;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  margin-left: 21px;
  margin-top: 5px;
`;

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
`;
const TripleRow = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: space-between;
  width: 716px;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 716px;
`;

const BoxDown = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 718px;
  height: 50px;
  border-right: 1px solid #ffffff;
  border-left: 1px solid #ffffff;
  border-bottom: 1px solid #ffffff;
  box-sizing: border-box;
`;

const DownText = styled.span`
  font-family: Sora;
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  opacity: 1;
  display: inline-block;
  white-space: nowrap; /* keep label on single line */
`;

const BoxDownClipped = styled(BoxDown)`
  overflow: hidden;
  padding-left: 42px; 
`;

const DownTextShift = styled(DownText)`
  display: inline-block;
  &:first-of-type {
    margin-right: 5px;
  }
`;

const Dot = styled.span`
  color: #ffffff;
`;

const beneficioCards = [
  {
    title: "Benefício Secundário",
    desc: "Lorem ipsum dolor sit amet, consectetur al muad’ib.",
    iconePath: prize,
  },
  {
    title: "Benefício Secundário",
    desc: "Lorem ipsum dolor sit amet, consectetur al muad’ib.",
    iconePath: prize,
  },
  {
    title: "Benefício Secundário",
    desc: "Lorem ipsum dolor sit amet, consectetur al muad’ib.",
    iconePath: prize,
  },
];

const BeneficioCardComponent = ({ title, desc, path }) => {
  return (
    <>
      <Flex>
        <Prize src={path} />
        <TextSecundary>{title}</TextSecundary>
      </Flex>
      <TextFinal>{desc}</TextFinal>
    </>
  );
};

export function HeroWithFeature() {
  return (
    <>
      <Hero />
      <ContainerAll>
        <BarBlock />
        <FeatureInner>
          <BoxAll>
            <BoxFirst>
              <TextMain>10</TextMain>
              <TextBoxLeft>
                <TextSub>Benefício Principal</TextSub>
                <TextDescription>
                  Lorem ipsum dolor sit amet, consectetur.
                </TextDescription>
              </TextBoxLeft>
            </BoxFirst>
            <RightColumn>
              <TripleRow>
                {beneficioCards.map((card, index) => {
                  return (
                    <BoxTriple key={index}>
                      <BeneficioCardComponent
                        title={card.title}
                        desc={card.desc}
                        path={card.iconePath}
                      />
                    </BoxTriple>
                  );
                })}
              </TripleRow>
              <BoxDownClipped>
                <DownTextShift>Benefício Terciário</DownTextShift>
                <Dot>
                  <img src="/Extras/paw.png" alt="Pata" />
                </Dot>
                <DownTextShift>Benefício Terciário</DownTextShift>
                <Dot>
                  <img src="/Extras/paw.png" alt="Pata" />
                </Dot>
                <DownTextShift>Lisan Al Gaib</DownTextShift>
                <Dot>
                  <img src="/Extras/paw.png" alt="Pata" />
                </Dot>
                <DownTextShift>Benefício Terciário</DownTextShift>
              </BoxDownClipped>
            </RightColumn>
          </BoxAll>
        </FeatureInner>
      </ContainerAll>
    </>
  );
}
