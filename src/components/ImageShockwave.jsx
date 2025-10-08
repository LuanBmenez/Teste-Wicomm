import React from "react";
import styled from "styled-components";
import CatsHome from "../Assets/CatsHome.png";
import Btn1 from "../Assets/Extras/1button.svg";
import Btn2 from "../Assets/Extras/2button.svg";
import Btn3 from "../Assets/Extras/3button.svg";
import Btn4 from "../Assets/Extras/4button.svg";
import Btn5 from "../Assets/Extras/5button.svg";

const Section = styled.section`
  display: flex;
`;

const Wrapper = styled.div`
  width: 100%;
  box-sizing: border-box;
  position: relative;
`;

const Img = styled.img`
  width: 1280px;
  height: 660px;

`;

const WhiteBox = styled.div`
  width: 282px;
  height: 322px;
  background-color: #ffffff;
  position: absolute;
  top: 20px;
  left: 978px;
  z-index: 5;
`;

const TitleText = styled.h2`
  width: 201px;
  height: 60px;
  font-family: Sora;
  font-weight: 700;
  font-size: 30px;
  line-height: 100%;
  letter-spacing: 0px;
  padding: 32px 49px 27px 33px;
`;

const SubTitleText = styled.h3`
  width: 232px;
  height: 59px;
  font-family: Sora;
  font-weight: 300;
  font-size: 14px;
  line-height: 100%;
  letter-spacing: 0px;
  padding: 0 18px 0 32px;
`;

const View = styled.button`
  width: 182px;
  height: 45px;
  opacity: 1;
  top: 2657px;
  left: 1010px;
  border-width: 1px;
  gap: 10px;
  border-radius: 29px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  border: 1px solid #000000;
  padding-left: 24px;
  margin-left: 32px;
  margin-top: 17px;
`;

const ViewText = styled.span`
  font-family: Sora;
  font-weight: 400;
  font-size: 17px;
  line-height: 100%;
  letter-spacing: 0px;
  width: 120px;
  height: 12px;
  opacity: 1;
`;

const Img1 = styled.image`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 272px;
  top: 328px;
`;
const Img2 = styled.image`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 441px;
  top: 356px;
`;
const Img3 = styled.image`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 540px;
  top: 78px;
`;
const Img4 = styled.image`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 792px;
  top: 152px;
`;
const Img5 = styled.image`
  position: absolute;
  width: 28px;
  height: 28px;
  left: 874px;
  top: 327px;
`;

export default function ImageShockwave() {
  return (
    <Section>
      <Wrapper>
        <Img src={CatsHome} alt="cats showcase" />

        <WhiteBox>
          <TitleText>Lorem Ipsum Dolor Sit</TitleText>
          <SubTitleText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </SubTitleText>

          <SubTitleText>
            Class aptent taciti sociosqu ad litora torquent per conubia nostra,
            per inceptos himenaeos.
          </SubTitleText>
          <View>
            <ViewText>VER SELEÇÃO</ViewText>
          </View>
        </WhiteBox>
        <Img1>
          <img src={Btn1} alt="Btn1" />
        </Img1>
        <Img2>
          <img src={Btn2} alt="Btn2" />
        </Img2>
        <Img3>
          <img src={Btn3} alt="Btn3" />
        </Img3>
        <Img4>
          <img src={Btn4} alt="Btn4" />
        </Img4>
        <Img5>
          <img src={Btn5} alt="Btn5" />
        </Img5>
      </Wrapper>
    </Section>
  );
}
