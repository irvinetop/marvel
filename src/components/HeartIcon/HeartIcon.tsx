import React from "react";
import styled from "styled-components";

// Asumiendo que tienes dos versiones del ícono: una para desarrollo y otra minificada para producción
const heartIconPath =
  process.env.NODE_ENV === "production"
    ? "/images/HeartIcon.svg" // Ruta al SVG minificado para producción
    : "/images/HeartIcon.svg"; // Ruta al SVG para desarrollo

const StyledHeartIcon = styled.img`
  width: 24px; // Ajusta el tamaño según necesites
  height: 24px; // Ajusta el tamaño según necesites
`;

const HeartIcon: React.FC = () => (
  <StyledHeartIcon src={heartIconPath} alt="Heart Icon" />
);

export default HeartIcon;
