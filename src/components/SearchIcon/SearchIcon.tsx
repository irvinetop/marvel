import React from "react";
import styled from "styled-components";

const iconPath =
  process.env.NODE_ENV === "production"
    ? "/images/SearchIcon.svg" // Ruta al SVG minificado para producción
    : "/images/SearchIcon.svg"; // Ruta al SVG para desarrollo

const SearchIcon: React.FC = () => {
  return <Img src={iconPath} alt="Search Icon" />;
};

const Img = styled.img`
  width: 24px;
  height: 24px;
  display: block;
  margin: 0 auto;
`;

export default SearchIcon;
