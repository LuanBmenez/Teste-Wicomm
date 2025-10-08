import React from "react";
import styled from "styled-components";
import cat1 from "../Assets/CatsImage/cat1.jpg";
import cat2 from "../Assets/CatsImage/cat2.jpg";
import cat3 from "../Assets/CatsImage/cat3.jpg";
import cat4 from "../Assets/CatsImage/cat4.jpg";
import cat5 from "../Assets/CatsImage/cat5.jpg";
import LikeBadge from "../Assets/Extras/10kLikes.png";

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  margin: 24px 0;
`;

const Box = styled.div`
  width: 1280px;
  height: 654px;
  background-color: #fff;
  border-radius: 4px;
  display: flex;
  position: relative;
`;
const Row = styled.div`
    position: absolute;
    left: 20px;
    top: 141px;
    display: flex;
    gap: 18px;
}
`;
const ComunityText = styled.span`
  width: 499px;
  height: 40px;
  font-family: Sora;
  font-weight: 400;
  font-size: 20px;
  line-height: 25px;
  letter-spacing: 0px;
  position: absolute;
  left: 236px;
  top: 42px;
`;

const Hashtag = styled.h2`
  width: 913px;
  height: 55px;
  font-family: Sora;
  font-weight: 400;
  font-size: 75px;
  line-height: 100%;
  letter-spacing: 0px;
  color: #7eb4c8;
  position: absolute;
  top: 92px;
  left: 230px;
  z-index: 2 ;
`;
const Catbox = styled.div`
  width: 270px;
  height: 481px;
  color: #373737;
  overflow: hidden;
  border-radius: 4px;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.06);
  position: relative; 
`;

const CatImage = styled.img`
  width: 270px;
  height: 481px;
  object-fit: cover;
  display: block;
`;

const Badge = styled.img`
    width: 36px;
    height: 36px;
    position: absolute;
    left: 227px;
    bottom: 12px;
    z-index: 5;
`;
export default function NextSection() {
  const cats = [cat1, cat2, cat3, cat4, cat5];
  return (
    <Section>
      <Box>
        <ComunityText>
          Faça parte da comunidade de gatunos que amam design e papelão
          compartilhando a hashtag:
        </ComunityText>
        <Hashtag>#AdoradoresDePapelão</Hashtag>
        <Row>
          {cats.map((c, i) => (
            <Catbox key={i}>
              <CatImage src={c} alt={`cat ${i + 1}`} />
              <Badge src={LikeBadge} alt="10k likes" />
            </Catbox>
          ))}
        </Row>
      </Box>
    </Section>
  );
}
