import React from "react";
import styled from "styled-components";
// Importa el logo de Marvel y el ícono de corazón si los tienes disponibles como archivos
// Por ejemplo: import { ReactComponent as MarvelLogo } from './path-to-marvel-logo.svg';
import HeartIcon from "../HeartIcon/HeartIcon";

const logoPath =
  process.env.NODE_ENV === "production"
    ? "/images/MarvelLogo.svg" // Ruta al SVG minificado para producción
    : "/images/MarvelLogo.svg"; // Ru

// Define las props esperadas por el componente Header
interface HeaderProps {
  favoritesCount: number;
}

const Header: React.FC<HeaderProps> = ({ favoritesCount }) => {
  return (
    <HeaderContainer>
      <Logo src={logoPath} alt="Marvel Logo" />
      <FavoritesContainer>
        <HeartIcon />
        <FavoritesText>{favoritesCount}</FavoritesText>
      </FavoritesContainer>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 30px;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.img`
  width: 130px;
  height: 52px;
  gap: 0px;
  opacity: 0px;
`;

const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  justify-content: center;
  gap: 5px;
`;

const FavoritesText = styled.span`
  font-family: Roboto Condensed;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
`;

export default Header;
