import React from "react";
import styled from "styled-components";

// Asumiendo que tenemos dos versiones del ícono: una para desarrollo y otra minificada para producción
const heartIconPath =
  process.env.NODE_ENV === "production"
    ? "/images/HeartIcon.svg" // Ruta al SVG minificado para producción
    : "/images/HeartIcon.svg"; // Ruta al SVG para desarrollo

const HeartIcon: React.FC = () => (
  <StyledHeartIcon src={heartIconPath} alt="Heart Icon" />
);

const StyledHeartIcon = styled.img`
  width: 24px; // Ajusta el tamaño según necesites
  height: 24px; // Ajusta el tamaño según necesites
`;
export default HeartIcon;
