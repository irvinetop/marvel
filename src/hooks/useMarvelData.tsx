import { useState, useEffect, useMemo } from "react";
import { Character } from "../interfaces/index";

interface UseMarvelDataState {
  data: Character[];
  isLoading: boolean;
  error: string | null;
  totalFavorites: number; // Añadido el total de favoritos
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
      }));

      setData(characters);
    } catch (error) {
      console.log(error);
      setError("Failed to fetch data");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
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

  // Calcula el total de favoritos usando useMemo
  const totalFavorites = useMemo(() => {
    return data.filter((character) => character.isFavorite).length;
  }, [data]);

  return { data, isLoading, error, totalFavorites, toggleFavorite };
};
