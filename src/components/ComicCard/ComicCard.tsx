import React from "react";
import styled from "styled-components";
import { Comic } from "../../interfaces";
interface ComicCardProps {
  comic?: Comic;
}

const ComicCard: React.FC<ComicCardProps> = ({ comic }) => {
  return (
    <CardContainer>
      <Image src={comic?.imageUrl} alt={comic?.name} />
      <CardContent>
        <Name>{comic?.name}</Name>
        <Year>{comic?.year}</Year>
      </CardContent>
    </CardContainer>
  );
};

const CardContainer = styled.div`
  width: 179px;
  margin: 10px;
  display: flex;
  flex-direction: column;
  cursor: pointer;
`;

const Image = styled.img`
  width: 179px;
  height: 268px;
`;

const CardContent = styled.div`
  padding: 10px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Name = styled.div`
  font-size: 16px;
  line-height: 18.75px;
  font-weight: bold;
  color: #000000;
`;
const Year = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 16.41px;
  color: #000000;
`;

export default ComicCard;
