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
  height: 41px;
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
  cursor: pointer;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
  border-right: 1px solid white;

  img {
    width: 18px;
    height: auto;
    display: block;
    pointer-events: none;
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
  width: 213px;
  max-width: 100%;
  min-width: 0;
  /* left padding to make room for the icon */
  padding: 6px 10px 6px 36px;
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

const SearchWrapper = styled.div`
  position: relative;
  display: inline-block;
`;

const SearchIcon = styled.span`
  position: absolute;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
  width: 16px;
  height: 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  pointer-events: none;
  svg {
    width: 16px;
    height: 16px;
    fill: rgba(255, 255, 255, 0.65);
  }
`;

const Icon = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const IconBuy = styled.button`
  position: relative;
  width: 55px;
  height: 40px;
  border: none;
  background: rgba(255, 255, 255, 0.06);
  color: #fff;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border-left: 1px solid white;
  border-right: 1px solid white;
`;

const Dot = styled.span`
  position: absolute;
  width: 13px;
  height: 13px;
  top: 8px;
  right: 10px;
  background: #CC4B64;
  border-radius: 50%;
  opacity: 1;
  box-shadow: 0 0 0 2px rgba(0,0,0,0.12); 
  z-index: 5;
`;

const MenuItemRight = styled.li`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 40px;
  padding: 0 12px;
  box-sizing: border-box;
  background: transparent;
  color: #fff;
  cursor: pointer;
  font-family: Sora;
  font-weight: 400;
  font-size: 14px;
  line-height: 1;
  white-space: nowrap;
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
        <MenuItemRight>blog</MenuItemRight>
        <MenuItemRight>lookbook</MenuItemRight>
        <MenuItemRight>sobre a Gat</MenuItemRight>
        <MenuItemRight>wishlist</MenuItemRight>
      </Menu>

      <Right>
        <Bar>
          <SearchWrapper>
            <SearchIcon aria-hidden>
              <svg
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden
                focusable="false"
              >
                <path d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0016 9.5 6.5 6.5 0 109.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
              </svg>
            </SearchIcon>
            <Search
              placeholder="digite aqui o que procura"
              aria-label="Pesquisar"
            />
          </SearchWrapper>
        </Bar>
        <Bar>
          <Icon>
            <img src={Cart} alt="perfil" />
          </Icon>
        </Bar>
        <Bar>
          <IconBuy>
            <Dot aria-hidden />
            <img src={Conta} alt="carrinho" />
          </IconBuy>
        </Bar>
      </Right>
    </ResponsiveNavBar>
  );
}
