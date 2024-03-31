import React from "react";
import styled, { keyframes } from "styled-components";
import FavoriteIcon from "../HeartIcon/HeartIcon"; // Asegúrate de ajustar la ruta de importación según sea necesario
import { Character } from "../../interfaces";

const changeBackground = keyframes`
  from {
    background-size: 100% 0%;
  }
  to {
    background-size: 100% 100%;
  }
`;

interface MarvelCardProps {
  character?: Character;
  onToggleFavorite: () => void; // Función para manejar el cambio de estado favorito
}

const MarvelCard: React.FC<MarvelCardProps> = ({
  character,
  onToggleFavorite,
}) => {
  return (
    <CardContainer className="card">
      <Image src={character?.imageUrl} alt={character?.name} />
      <CardContent className="card-content">
        <Name>{character?.name}</Name>
        <FavoriteIcon
          isFavorite={character?.isFavorite}
          onClick={onToggleFavorite}
        />
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 189px;
  margin: 10px;
  display: flex;
  flex-direction: column;
`;

const Image = styled.img`
  width: 189px;
  height: 188px;
`;

const CardContent = styled.div`
  border-top: 5px solid #ec1d24;
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  clip-path: polygon(
    0 0,
    100% 0,
    100% 80%,
    90% 100%,
    0 100%
  ); /* Ajusta estos valores según necesites */
  height: 56px;
`;

const Name = styled.div`
  font-size: 16px;
  color: #fff;
`;

export default MarvelCard;
