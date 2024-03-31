import React, { useState, useEffect, useMemo } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";

import Header from "../../components/Header/Header";
import DetailCard from "../../components/DetailCard/DetailCard";

import { useMarvelCharacter } from "../../hooks/useMarvelCharacter";

import ComicCard from "../../components/ComicCard/ComicCard";
import { Comic } from "../../interfaces";
const Details: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { data, isLoading, totalFavorites, toggleFavorite } =
    useMarvelCharacter({ character: location?.state?.character });

  //   useEffect(() => {
  //     if (location?.state?.onlyFavorites != undefined)
  //       setOnlyFavorites(location?.state?.onlyFavorites);
  //   }, [location]);

  //   const filteredData = useMemo(() => {
  //     return data.filter((item: Character) =>
  //       onlyFavorites == true
  //         ? item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
  //           item.isFavorite == true
  //         : item.name.toLowerCase().includes(searchValue.toLowerCase())
  //     );
  //   }, [data, searchValue, onlyFavorites]);

  return (
    <FullHeightContainer>
      <Header
        favoritesCount={totalFavorites}
        logoOnClick={() => {
          navigate("/", { state: { onlyFavorites: false } });
        }}
        favoritesOnClick={() => {
          navigate("/", { state: { onlyFavorites: true } });
        }}
      />
      <DetailCard
        character={data}
        onToggleFavorite={() => toggleFavorite(data?.id)}
      />
      {/* {onlyFavorites == true && <FavoritesTitle>FAVORITES</FavoritesTitle>}
      <SearchBar
        placeHolder="SEARCH A CHARACTER"
        value={searchValue}
        onChange={handleChange}
      />
      <SearchResultsCount>{filteredData?.length} RESULTS</SearchResultsCount>

     */}
      <CenterContainer>
        <CardsContainer>
          {data?.comic?.map((item: Comic) => (
            <ComicCard comic={item} />
          ))}
        </CardsContainer>
      </CenterContainer>
    </FullHeightContainer>
  );
};

const FullHeightContainer = styled.div`
  height: 100vh;
  flex-direction: column;
`;
const CenterContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CardsContainer = styled.div`
  padding: 20px;
  width: 75%;
  display: flex;
  overflow: auto;

  &::-webkit-scrollbar {
    height: 5px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  &::-webkit-scrollbar-thumb {
    background: #ec1d24;
    border-radius: 6px;
  }

  /* Cambia el color del "pulgar" al hacer hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }
`;

export default Details;
