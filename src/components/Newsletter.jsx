import React, { useState } from "react";
import styled from "styled-components";
import cococat from "../Assets/CatsImage/CatBeach.jpg";

const Wrapper = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 24px 0;
`;

const Container = styled.div`
  width: 1240px;
  height: 387px;
  background: #efefef;
  display: flex;
  box-sizing: border-box;
  position: relative;
`;
const Bar = styled.img`
  width: 1240px;
  margin-bottom: 40px;
  border-radius: 6px;
  border-top: 1px solid #000000;
`;
const Left = styled.img`
  width: 505px;
  height: 347px;
  display: block;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
`;

const RightTop = styled.div`
  margin-bottom: 18px;
`;

const RightBottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const BottomLeft = styled.div`
  flex: 1;
  max-width: 520px;
`;

const BottomRight = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Title = styled.h2`
  font-family: Sora;
  font-weight: 400;
  font-size: 50px;
  line-height: 100%;
  letter-spacing: 0px;
  position: absolute;
  top: 59px;
  left: 14px;
`;

const Lead = styled.p`
  width: 274px;
  height: 35px;
  font-family: Sora;
  font-weight: 700;
  font-size: 14px;
  line-height: 25px;
  letter-spacing: 0px;
  text-transform: uppercase;
  position: absolute;
  top: 154px;
  left: 20px;
`;

const Lead2 = styled.p`
  width: 295px;
  height: 35px;
  font-family: Sora;
  font-weight: 400;
  font-size: 14px;
  leading-trim: CAP_HEIGHT;
  line-height: 25px;
  letter-spacing: 0px;
  position: absolute;
  top: 206px;
  left: 20px;
`;

const Form = styled.form`
  display: flex;
  gap: 12px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 145px;
  left: 335px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 1px solid #222;
  padding: 8px 12px;
  background: transparent;
  width: 300px;
`;

const Button = styled.button`
  width: 188px;
  height: 39px;
  border-width: 1px;
  opacity: 1;
  border-radius: 29px;
  padding-top: 12px;
  padding-right: 24px;
  padding-bottom: 12px;
  padding-left: 24px;
  gap: 10px;
  border: 1px solid #000000;
  background: ${(props) => (props.active ? "#000" : "transparent")};
  color: ${(props) => (props.active ? "#fff" : "#000")};
  cursor: pointer;
  position: absolute;
  top: 139px;
  left: 0px;
`;

const TextButton = styled.span`
  width: 130px;
  height: 15px;
  font-family: Sora;
  font-weight: 400;
  font-size: 20px;
  leading-trim: CAP_HEIGHT;
  line-height: 100%;
  letter-spacing: 0px;
`;

export default function Newsletter() {
  const [registerActive, setRegisterActive] = useState(false);
  return (
    <Wrapper>
      <div>
        <Bar />
        <Container>
          <Left src={cococat} alt="newsletter" />
          <Right>
            <RightTop>
              <Title>NEWSLETTER</Title>
            </RightTop>
            <RightBottom>
              <BottomLeft>
                <Lead>Cadastre-se e ganhe 10% off na sua primeira compra</Lead>
                <Lead2>
                  Seja a primeira a receber lançamentos, novidades e promoções.
                </Lead2>
              </BottomLeft>
              <BottomRight>
                <Form>
                  <Input placeholder="NOME DO SEU PET" />
                  <Input placeholder="SEU EMAIL" />
                  <Button
                    type="button"
                    active={registerActive}
                    onClick={() => setRegisterActive((s) => !s)}
                  >
                    <TextButton>CADASTRAR</TextButton>
                  </Button>
                </Form>
              </BottomRight>
            </RightBottom>
          </Right>
        </Container>
      </div>
    </Wrapper>
  );
}
