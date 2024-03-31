import React from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import styled from "styled-components";

const Home: React.FC = () => {
  const searchResultsCount = 10; // Este valor puede venir de la lógica de búsqueda

  return (
    <FullHeightContainer>
      <Header favoritesCount={5} />
      <SearchBar />
      <SearchResultsCount>{searchResultsCount} RESULTS</SearchResultsCount>

      {/* Contenido de la página Home */}
    </FullHeightContainer>
  );
};

const FullHeightContainer = styled.div`
  height: 100vh;
  flex-direction: column;
`;

const SearchResultsCount = styled.div`
  width: 100%;
  margin: 20px 30px 20px;
  font-family: Roboto Condensed;
  font-size: 12px;
  font-weight: 400;
  line-height: 14.06px;
  text-align: left;
  color: #000000;
`;

export default Home;
