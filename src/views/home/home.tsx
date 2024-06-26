import React, { useEffect, useMemo } from "react";
import styled from "styled-components";
import { useNavigate, useLocation } from "react-router";

import Header from "../../components/Header/Header";
import SearchBar from "../../components/SearchBar/SearchBar";
import MarvelCard from "../../components/MarvelCard/MarvelCard";

import { useSearchBar } from "../../hooks/useSearchBar";
import { useMarvelData } from "../../hooks/useMarvelData";

import { Character } from "../../interfaces";

const Home: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { searchValue, handleChange } = useSearchBar();
  const {
    data,
    totalFavorites,
    toggleFavorite,
    onlyFavorites,
    setOnlyFavorites,
  } = useMarvelData();

  useEffect(() => {
    if (location?.state?.onlyFavorites != undefined)
      setOnlyFavorites(location?.state?.onlyFavorites);
  }, [location]);

  const filteredData = useMemo(() => {
    return data.filter((item: Character) =>
      onlyFavorites == true
        ? item.name.toLowerCase().includes(searchValue.toLowerCase()) &&
          item.isFavorite == true
        : item.name.toLowerCase().includes(searchValue.toLowerCase())
    );
  }, [data, searchValue, onlyFavorites]);

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
      {onlyFavorites == true && <FavoritesTitle>FAVORITES</FavoritesTitle>}
      <SearchBar
        placeHolder="SEARCH A CHARACTER"
        value={searchValue}
        onChange={handleChange}
      />
      <SearchResultsCount>{filteredData?.length} RESULTS</SearchResultsCount>

      <CardsContainer>
        {filteredData.map((character: Character) => (
          <MarvelCard
            character={character}
            onToggleFavorite={(e: any) => {
              e.stopPropagation();
              toggleFavorite(character.id);
            }}
            goToDetails={() =>
              navigate("/details", {
                state: {
                  character,
                },
              })
            }
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

const FavoritesTitle = styled.h1`
  font-family: Roboto Condensed;
  font-size: 32px;
  font-weight: 700;
  line-height: 37.5px;
  text-align: left;
  font-weight: bold;
  margin: 30px 30px 0px;
`;

const SearchResultsCount = styled.div`
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
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 20px;
`;

export default Home;
