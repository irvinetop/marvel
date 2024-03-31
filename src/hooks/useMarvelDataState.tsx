import { useState, useEffect } from "react";
import "../interfaces";

interface UseMarvelDataState {
  data: Character[];
  isLoading: boolean;
  error: string | null;
  toggleFavorite: (id: number) => void;
}

export const useMarvelData = (): UseMarvelDataState => {
  const [data, setData] = useState<Character[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // Función para cargar los favoritos desde localStorage
  const loadFavorites = (): number[] => {
    const favorites = localStorage.getItem("marvel_favorites");
    return favorites ? JSON.parse(favorites) : [];
  };

  // Función para guardar los favoritos en localStorage
  const saveFavorites = (favorites: number[]) => {
    localStorage.setItem("marvel_favorites", JSON.stringify(favorites));
  };

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const url = `http://gateway.marvel.com/v1/public/characters?apikey=${process.env.MARVEL_API_KEY}`;
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
        }));

        setData(characters);
      } catch (error) {
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  // Función para alternar el estado de favorito de un personaje
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

  return { data, isLoading, error, toggleFavorite };
};
