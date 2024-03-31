import { useState, useLayoutEffect, useMemo } from "react";
import { Character } from "../interfaces/index";

interface UseMarvelDataState {
  data: Character[];
  isLoading: boolean;
  error: string | null;
  totalFavorites: number;
  toggleFavorite: (id: number) => void;
  onlyFavorites: boolean;
  setOnlyFavorites: (visibility: boolean) => void;
}

export const useMarvelData = (): UseMarvelDataState => {
  const [data, setData] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [onlyFavorites, setOnlyFavorites] = useState<boolean>(false);

  const loadFavorites = (): number[] => {
    const favorites = localStorage.getItem("marvel_favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  const saveFavorites = (favorites: number[]) => {
    localStorage.setItem("marvel_favorites", JSON.stringify(favorites));
  };

  const fetchData = async () => {
    setIsLoading(true);
    setError(null);

    try {
      const url = `http://gateway.marvel.com/v1/public/characters?apikey=${
        import.meta.env.VITE_MARVEL_API_KEY
      }`;
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const favoritesIds = loadFavorites();

      const characters = data.data.results.map((character: any) => ({
        id: character.id,
        name: character.name,
        imageUrl: `${character.thumbnail.path}.${character.thumbnail.extension}`,
        isFavorite: favoritesIds.includes(character.id),
        description: character.description,
      }));

      setData(characters);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  useLayoutEffect(() => {
    fetchData();
  }, []);

  const toggleFavorite = (id: number) => {
    const updatedData = data.map((character) =>
      character.id === id
        ? { ...character, isFavorite: !character.isFavorite }
        : character
    );

    setData(updatedData);
    saveFavorites(
      updatedData
        .filter((character) => character.isFavorite)
        .map((character) => character.id)
    );
  };

  const totalFavorites = useMemo(() => {
    return data.filter((character) => character.isFavorite).length;
  }, [data]);

  return {
    data,
    isLoading,
    error,
    totalFavorites,
    toggleFavorite,
    onlyFavorites,
    setOnlyFavorites,
  };
};
