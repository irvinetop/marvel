import React from "react";
import styled from "styled-components";
// Importa el logo de Marvel y el ícono de corazón si los tienes disponibles como archivos
// Por ejemplo: import { ReactComponent as MarvelLogo } from './path-to-marvel-logo.svg';
// import { ReactComponent as HeartIcon } from './path-to-heart-icon.svg';

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background-color: #000;
  color: #fff;
`;

const Logo = styled.img`
  height: 50px; // Ajusta el tamaño según necesites
`;

const FavoritesContainer = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
`;

// Define las props esperadas por el componente Header
interface HeaderProps {
  favoritesCount: number;
}

const Header: React.FC<HeaderProps> = ({ favoritesCount }) => {
  return (
    <HeaderContainer>
      <Logo src="path-to-marvel-logo.png" alt="Marvel Logo" />
      <FavoritesContainer>
        <HeartIcon />
        <span>{favoritesCount}</span>
      </FavoritesContainer>
    </HeaderContainer>
  );
};

export default Header;
