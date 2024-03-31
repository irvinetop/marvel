import React, { MouseEventHandler } from "react";
import styled from "styled-components";

interface HeartIconProps {
  isFavorite?: boolean;
  onClick?: MouseEventHandler<HTMLImageElement>;
}
// Asumiendo que tenemos dos versiones del ícono: una para desarrollo y otra minificada para producción
const heartIconPath =
  process.env.NODE_ENV === "production"
    ? "/images/HeartIcon.svg" // Ruta al SVG minificado para producción
    : "/images/HeartIcon.svg"; // Ruta al SVG para desarrollo

const heartIconEmptyPath =
  process.env.NODE_ENV === "production"
    ? "/images/HeartEmptyIcon.svg" // Ruta al SVG minificado para producción
    : "/images/HeartEmptyIcon.svg"; // Ruta al SVG para desarrollo

const HeartIcon: React.FC<HeartIconProps> = ({
  isFavorite = true,
  onClick = () => {},
}) => (
  <StyledHeartIcon
    src={isFavorite ? heartIconPath : heartIconEmptyPath}
    alt="Heart Icon"
    onClick={onClick}
  />
);

const StyledHeartIcon = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
export default HeartIcon;
