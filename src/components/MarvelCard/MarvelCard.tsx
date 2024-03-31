import React from "react";
import styled from "styled-components";
import FavoriteIcon from "./FavoriteIcon"; // Asegúrate de ajustar la ruta de importación según sea necesario

interface MarvelCardProps {
  imageUrl: string;
  name: string;
  isFavorite: boolean;
  onToggleFavorite: () => void; // Función para manejar el cambio de estado favorito
}

const MarvelCard: React.FC<MarvelCardProps> = ({
  imageUrl,
  name,
  isFavorite,
  onToggleFavorite,
}) => {
  return (
    <CardContainer>
      <Image src={imageUrl} alt={name} />
      <CardContent>
        <Name>{name}</Name>
        <FavoriteIcon isFavorite={isFavorite} onClick={onToggleFavorite} />
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 200px; // Ajusta según necesites
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
  margin: 10px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Name = styled.div`
  font-size: 16px; // Ajusta según necesites
`;

export default MarvelCard;
