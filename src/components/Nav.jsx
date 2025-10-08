import React from "react";
import styled from "styled-components";
import GatIcon from "../Assets/Extras/GatIcon.png";
import GatTitle from "../Assets/Extras/Gat.png";
import menu_01 from "../Assets/Extras/menu_01.png";
import Conta from "../Assets/Extras/cart.png";
import Cart from "../Assets/Extras/conta.png";

const NavBar = styled.nav`
  position: absolute;
  top: 30px;
  left: 20px;
  right: 20px; 
  max-width: 1240px; 
  margin: 0 auto;
  height: 41px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #111;
  color: #fff;
  padding: 0 12px;
  box-sizing: border-box;
  border-radius: 4px;
  z-index: 30;
  font-family: "Sora", "Helvetica Neue", Arial, sans-serif;
  font-size: 14px;
  overflow: visible;
`;

const Left = styled.div`
  display: flex;
  align-items: center;
`;

const Logo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  gap: 8px;
  background: #fff;
  padding: 6px 8px 6px 18px;
  box-sizing: border-box;
  width: 126px;
  height: 40px;
  border-width: 1px;
  overflow: visible;
  img {
    display: block;
    user-select: none;
    pointer-events: none;
  }
`;

const LeftMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  align-items: center;
`;

const Bar = styled.div`
  display: flex;
  align-items: center;
  height: 100%;
  gap: 2px;
  border-left: 1px solid rgba(255, 255, 255, 1);
  box-sizing: border-box;
`;

const MenuItem = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  background: transparent;
  color: #fff;
  border-radius: 3px;
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap; 

  img {
    width: 18px;
    height: auto;
    display: block;
    object-fit: contain;
    pointer-events: none;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.04);
  }
`;

const Menu = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  align-items: center;
  gap: 20px;
  flex: 1 1 auto;
  justify-content: flex-end;
  min-width: 0; 
  overflow: hidden; 
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  flex: 0 0 auto;
`;

const Search = styled.input`
  height: 30px;
  width: 180px;
  max-width: 100%;
  min-width: 0; 
  padding: 6px 10px;
  border-radius: 4px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  outline: none;
  box-sizing: border-box;

  &::placeholder {
    color: rgba(255, 255, 255, 0.65);
  }
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border-radius: 6px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const ResponsiveNavBar = styled(NavBar)`
  @media (max-width: 900px) {
    flex-wrap: wrap;
    height: auto;
    padding: 8px 10px;
    gap: 8px;
  }

  @media (max-width: 640px) {
    left: 12px;
    right: 12px;
    padding: 8px;
  }
`;

export default function Nav() {
  return (
    <ResponsiveNavBar>
      <Left>
        <Logo>
          <img src={GatIcon} alt="gat icon" />
          <img src={GatTitle} alt="gat title" />
        </Logo>

        <LeftMenu>
          <Bar>
            <MenuItem>
              <img src={menu_01} alt="" />
              produtos
            </MenuItem>
          </Bar>
          <Bar>
            <MenuItem>
              <img src={menu_01} alt="" />
              coleções
            </MenuItem>
          </Bar>
        </LeftMenu>
      </Left>

      <Menu>
        <MenuItem>blog</MenuItem>
        <MenuItem>lookbook</MenuItem>
        <MenuItem>sobre a Gat</MenuItem>
        <MenuItem>wishlist</MenuItem>
      </Menu>

      <Right>
        <Bar>
          <Search placeholder="digite aqui o que procura" />
        </Bar>
        <Bar>
          <Icon>
            <img src={Cart} alt="perfil" />
          </Icon>
        </Bar>
        <Bar>
          <Icon>
            <img src={Conta} alt="carrinho" />
          </Icon>
        </Bar>
      </Right>
    </ResponsiveNavBar>
  );
}
