import React from "react";
import styled from "styled-components";
import FavoriteIcon from "../HeartIcon/HeartIcon"; // Asegúrate de ajustar la ruta de importación según sea necesario
import { Character } from "../../interfaces";
interface MarvelCardProps {
  character?: Character | null;
  onToggleFavorite: () => void;
}

const MarvelCard: React.FC<MarvelCardProps> = ({
  character,
  onToggleFavorite,
}) => {
  return (
    <CardContainer>
      <Image src={character?.imageUrl} alt={character?.name} />
      <CardContent>
        <CardContentTitle>
          <Name>{character?.name}</Name>
          <FavoriteIcon
            isFavorite={character?.isFavorite}
            onClick={onToggleFavorite}
          />
        </CardContentTitle>
        <Description>{character?.description}</Description>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background: #000;
  clip-path: polygon(0 0, 100% 0, 100% 90%, 95% 100%, 0 100%);
  @media (max-width: 768px) {
    flex-direction: column;
    padding-bottom: 20px;
  }
`;

const Image = styled.img`
  width: 320px;
  height: 320px;
  padding-left: 15%;
  @media (max-width: 768px) {
    padding: 0 10%;
  }
`;

const CardContent = styled.div`
  padding: 10px;
  align-items: center;
  padding-right: 15%;
  width: 100%;
  @media (max-width: 768px) {
    padding-right: 0;
  }
`;
const CardContentTitle = styled.div`
  padding: 10px;
  display: flex;
  justify-content: space-between;
  width: 90%;
  align-items: center;
`;
const Name = styled.span`
  font-family: Roboto Condensed;
  font-size: 40px;
  font-weight: 700;
  line-height: 16.41px;
  text-align: left;

  color: #fff;
`;

const Description = styled.span`
  padding: 10px;
  font-family: Roboto Condensed;
  font-size: 16px;
  font-weight: 400;
  line-height: 18.75px;
  text-align: left;
  color: #fff;
`;

export default MarvelCard;
