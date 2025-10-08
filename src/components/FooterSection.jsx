import React from "react";
import styled from "styled-components";
import FooterImg from "../Assets/categories/Footer.png";

const Wrapper = styled.footer`
  width: 100%;
  display: flex;
  justify-content: center;
  background: #fff;
  padding: 40px 0;
`;

const Img = styled.img`
  width: 100%;
  max-width: 1240px;
  display: block;
`;

export default function FooterSection() {
  return (
    <Wrapper>
      <Img src={FooterImg} alt="footer" />
    </Wrapper>
  );
}
