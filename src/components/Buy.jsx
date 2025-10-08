import React, { useState } from "react";
import styled from "styled-components";
import BoxGato from "../Assets/BoxGato.png";
import CatsHover from "../Assets/CatsImage/CatsHover.png";
import MiniIcon from "../Assets/categories/Classic.png";
import BohoIcon from "../Assets/categories/Boho.png";
import MaxIcon from "../Assets/categories/maximalismo.png";
import ClassicIcon from "../Assets/categories/Minimalismo.png";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 65px;
  background: #fff;
  position: relative;
`;

const Container = styled.div`
  width: 1234px;
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Sun = styled.div`
  position: absolute;
  width: 206px;
  height: 206px;
  border-radius: 50%;
  background: #ffe4b3;
  left: 38px;
  top: 78px;
  transform: translateX(-50%);
  z-index: 0;
`;

const ContentRow = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 15px;
`;

const TextTitleBox = styled.div`
  max-width: 360px;
  z-index: 1;
  margin-top: 175px;
`;

const BigTitle = styled.h3`
  font-family: Sora;
  font-weight: 700;
  font-size: 70px;
  line-height: 74px;
  text-transform: uppercase;
  color: #373737;
  margin: 0;
`;

const SpanTitle = styled.h3`
  font-family: Sora;
  font-weight: 400;
  font-size: 70px;
  line-height: 74px;
  text-transform: uppercase;
  color: #373737;
  margin: 0;
`;

const BuyItens = styled.div`
  margin-top: 65px;
  margin-left: 8px;
  width: 930px;
  height: 436px;
  background-color: #fff;
  border-radius: 8px;
  padding: 70px 28px 0 28px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

const ProductGrid = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: repeat(3, 1fr);
  align-items: start;
`;

const ProductCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: transparent;
  padding: 10px;
  height: 400px;
  width: 290px;
  position: relative; /* allow badges positioned inside card */
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 160px;
  height: 160px;
  display: flex;
  padding: 54px 0;
  align-items: center;
  justify-content: center;
`;

const ProductImage = styled.img`
  width: 130px;
  height: 170px;
  object-fit: contain;
  display: block;
`;

const BadgeBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;
  align-items: flex-end;
  z-index: 5;
  margin-left: auto;
`;

const BadgeTen = styled.div`
  background: #4da1b1;
  color: #ffffff;
  font-family: Sora;
  font-size: 11px;
  width: 57px;
  height: 21px;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 5;
`;

const BadgeLanc = styled.div`
  background: #e5675d;
  color: #ffffff;
  font-family: Sora;
  font-weight: 700;
  font-size: 10px;
  padding: 7px 8px;
`;

const TitleRow = styled.div`
  display: flex;
  width: 100%;
`;

const TitleTop = styled.div`
  margin-top: 8px;
  font-family: Sora;
  font-weight: 700;
  font-size: 16px;
  color: #222;
  text-transform: uppercase;
`;

const TitleBottom = styled.div`
  font-family: Sora;
  font-weight: 700;
  font-size: 16px;
  color: #222;
  opacity: 0.95;
  align-self: flex-start;
  width: 100%;
  text-align: left;
  margin-top: 3px;
`;

const PriceWrap = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  justify-content: flex-start;
  width: 100%;
`;

const PriceOld = styled.span`
  font-family: Sora;
  font-weight: 300;
  font-style: normal;
  font-size: 12px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: right;
  color: #777;
`;

const PriceNew = styled.span`
  font-family: Sora;
  font-weight: 700;
  font-size: 12px;
  line-height: 100%;
  letter-spacing: 0px;
  text-align: right;
  color: #222;
`;

const ColorDots = styled.div`
  display: flex;
  gap: 6.4px;
  margin-left: 93.1px;
  margin-top: 10px;
`;

const Dot = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: ${(props) => props.color || "#ccc"};
  display: inline-block;
`;

const CategoriesRow = styled.div`
  width: 100%;
  display: flex;
  gap: 14.4px;
  align-items: center;
  justify-content: center;
  padding-bottom: 6px;
`;

const CatButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  width: 255px;
  height: 59px;
  box-sizing: border-box;
  border: 1px solid #d1d1d1;
  border-radius: 29px;
  background: transparent;
  font-family: Sora;
  font-weight: 400;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  font-size: 20px;

`;
const CatButtonAll = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 12px 24px;
  width: 154.37px;
  height: 59px;
  box-sizing: border-box;
  border: 1px solid ${(props) => (props.active ? "#000" : "#d1d1d1")};
  border-radius: 29px;
  background: ${(props) => (props.active ? "#000" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  font-family: Sora;
  font-weight: 600;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
`;

const CatIcon = styled.img`
  width: 42px;
  height: 32px;
  object-fit: contain;
  display: inline-block;
  border-radius: 4px;
`;

const TitleCategories = styled.h2`
  font-family: Sora;
  font-weight: 700;
  font-size: 18px;
  margin: 38px 0 34px 0;
  width: 100%;
  text-align: center;
  text-transform: none;
  letter-spacing: 8px;
  color: #222;
  margin-left:5px;
`;

const ButtonSeeAll = styled.button`
  border-radius: 29px;
  border: 1px solid #000000;
  background-color: ${(props) => (props.active ? "#000" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  padding: 12px 38px;
  font-size: 20px;
  margin-top: 34px;
  cursor: pointer;
`;
const BadgeTenBold = styled.span`
  font-weight: 700;
`;
const ContainerTitle = styled.div`
  margin-bottom: 10px;
`;

export default function Buy() {
  const [seeAllActive, setSeeAllActive] = useState(false);
  const [catSeeAllActive, setCatSeeAllActive] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const products = [
    {
      titleTop: "TOCA TÚNEL",
      titleBottom: "MÓDULOS",
      price: "R$0000,00",
      img: BoxGato,
    },
    {
      titleTop: "TOCA TÚNEL",
      titleBottom: "MÓDULOS",
      price: "R$0000,00",
      img: BoxGato,
    },
    {
      titleTop: "TOCA TÚNEL",
      titleBottom: "MÓDULOS",
      price: "R$0000,00",
      img: BoxGato,
    },
  ];
  return (
    <Section>
      <Container>
        <Sun />
        <ContentRow>
          <TextTitleBox>
            <BigTitle>
              QUERI <br />
              DINHO
              <SpanTitle>DELES</SpanTitle>
            </BigTitle>
            <ButtonSeeAll
              active={seeAllActive}
              onClick={() => setSeeAllActive((s) => !s)}
            >
              VER TUDO
            </ButtonSeeAll>
          </TextTitleBox>

          <BuyItens>
            <ProductGrid>
              {products.map((p, i) => (
                <ProductCard
                  key={i}
                  onMouseEnter={() => setHoveredIndex(i)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <BadgeBox>
                    <BadgeTen>
                      <BadgeTenBold>10%</BadgeTenBold>OFF
                    </BadgeTen>
                    <BadgeLanc>LANÇAMENTO</BadgeLanc>
                  </BadgeBox>
                  <ImageWrapper>
                    <ProductImage
                      src={hoveredIndex === i ? CatsHover : p.img}
                      alt={p.title}
                    />
                  </ImageWrapper>
                  <TitleRow>
                    <div>
                      <ContainerTitle>
                        <TitleTop>{p.titleTop}</TitleTop>
                        <TitleBottom>{p.titleBottom}</TitleBottom>
                      </ContainerTitle>
                      <PriceWrap>
                        <PriceOld>R$00,00</PriceOld>
                        <PriceNew>{p.price}</PriceNew>
                      </PriceWrap>
                    </div>
                    <ColorDots>
                      <Dot color="#4aa3d0" />
                      <Dot color="#f05a5a" />
                      <Dot color="#2ecc71" />
                      <Dot color="#333" />
                    </ColorDots>
                  </TitleRow>
                </ProductCard>
              ))}
            </ProductGrid>
          </BuyItens>
        </ContentRow>
        <TitleCategories>NAVEGUE PELAS CATEGORIAS</TitleCategories>
        <CategoriesRow>
          <CatButton>
            <CatIcon src={ClassicIcon} alt="classico" />
            CLÁSSICO
          </CatButton>
          <CatButton>
            <CatIcon src={MiniIcon} alt="minimalismo" />
            MINIMALISMO
          </CatButton>
          <CatButton>
            <CatIcon src={MaxIcon} alt="maximalismo" />
            MAXIMALISMO
          </CatButton>
          <CatButton>
            <CatIcon src={BohoIcon} alt="boho" />
            BOHO
          </CatButton>
          <CatButtonAll
            active={catSeeAllActive}
            onClick={() => setCatSeeAllActive((s) => !s)}
          >
            VER TUDO
          </CatButtonAll>
        </CategoriesRow>
      </Container>
    </Section>
  );
}
