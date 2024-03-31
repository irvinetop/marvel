import React, { ChangeEventHandler } from "react";
import styled from "styled-components";
import SearchIcon from "../SearchIcon/SearchIcon"; // Asegúrate de ajustar la ruta de importación según sea necesario

interface HeaderProps {
  value: string;
  placeHolder: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}

const SearchBar: React.FC<HeaderProps> = ({
  placeHolder = "SEARCH A CHARACTER...",
  value = "",
  onChange = () => {},
}) => {
  return (
    <SearchBarContainer>
      <SearchIcon />
      <SearchInput
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
    </SearchBarContainer>
  );
};

const SearchBarContainer = styled.div`
  margin-top: 30px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 1px solid #ccc;
  margin: 50px 30px 0px 30px;
`;

const SearchInput = styled.input`
  width: calc(
    100% - 50px
  ); // Ajusta el ancho según necesites, teniendo en cuenta el ícono
  padding: 10px;
  font-size: 16px; // Ajusta el tamaño de fuente según necesites
  border: 0px solid #ccc; // Ajusta el estilo de borde según necesites
  border-radius: 4px; // Ajusta el radio del borde según necesites
  margin-right: 10px; // Espacio entre el input y el ícono

  /* Estilos para el placeholder */
  ::placeholder {
    font-family: Roboto Condensed;
    font-size: 16px;
    font-weight: 400;
    line-height: 18.75px;
    text-align: left;
  }
`;

export default SearchBar;
