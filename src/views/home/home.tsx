import React, { useMemo } from "react";
import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import styled from "styled-components";
import { useSearchBar } from "../../hooks/useSearchBar"; // Asegúrate de ajustar la ruta de importación
import { useMarvelData } from "../../hooks/useMarvelData"; // Asegúrate de ajustar la ruta de importación
import MarvelCard from "../../components/MarvelCard/MarvelCard";
import { Character } from "../../interfaces";
const Home: React.FC = () => {
  const { searchValue, handleChange } = useSearchBar();
  const { data, isLoading, error, toggleFavorite } = useMarvelData();

  const searchResultsCount = 10;
  const filteredData = useMemo(() => {
    return data.filter((item: Character) =>
      item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue]);
  if (isLoading) return <p>Cargando...</p>;
  if (error) return <p>Hubo un error al obtener los datos: {error}</p>;
  return (
    <FullHeightContainer>
      <Header favoritesCount={5} />
      <SearchBar
        placeHolder="SEARCH A CHARACTER"
        value={searchValue}
        onChange={handleChange}
      />
      <SearchResultsCount>{searchResultsCount} RESULTS</SearchResultsCount>

      <CardsContainer>
        {filteredData.map((item: Character) => (
          <MarvelCard
            character={item}
            onToggleFavorite={() => toggleFavorite(item.id)}
          />
        ))}
      </CardsContainer>
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

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap; // Esto permite que los items se pasen a la siguiente fila si no hay espacio
  justify-content: center; // Centra los items horizontalmente
  gap: 20px; // Espacio entre los items
  padding: 20px; // Espaciado alrededor de todo el contenedor
`;

export default Home;
