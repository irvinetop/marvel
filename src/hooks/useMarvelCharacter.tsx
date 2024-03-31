import { useState, useEffect, useMemo } from "react";
import { Character } from "../interfaces/index";

interface UseMarvelCharacter {
  data: Character | null;
  isLoading: boolean;
  error: string | null;
  totalFavorites: number;
  toggleFavorite: (id: number | undefined) => void;
}

interface UserMarvelCharacterProps {
  character: Character | null;
}

export const useMarvelCharacter = ({
  character,
}: UserMarvelCharacterProps): UseMarvelCharacter => {
  const [data, setData] = useState<Character | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [totalFavorites, setTotalFavorites] = useState(() => {
    const existingFavoritesString = localStorage.getItem("marvel_favorites");
    return existingFavoritesString
      ? JSON.parse(existingFavoritesString).length
      : 0;
  });

  const saveFavorites = (id: number) => {
    // Carga los favoritos existentes desde localStorage
    const existingFavoritesString = localStorage.getItem("marvel_favorites");
    const existingFavorites = existingFavoritesString
      ? JSON.parse(existingFavoritesString)
      : [];

    // Comprueba si el id ya está presente en los favoritos
    const isAlreadyFavorite = existingFavorites.includes(id);

    // Si ya es favorito, lo removemos; si no, lo agregamos
    const updatedFavorites = isAlreadyFavorite
      ? existingFavorites.filter((favoriteId: number) => favoriteId !== id)
      : [...existingFavorites, id];

    // Guarda los favoritos actualizados en localStorage
    setTotalFavorites(updatedFavorites.length);
    localStorage.setItem("marvel_favorites", JSON.stringify(updatedFavorites));
  };

  const fetchData = async () => {
    if (character?.id) {
      setIsLoading(true);
      setError(null);

      try {
        const url = `http://gateway.marvel.com/v1/public/characters/${
          character.id
        }/comics?apikey=${import.meta.env.VITE_MARVEL_API_KEY}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const d = await response.json();
        let c: Character = {
          id: character.id,
          imageUrl: character.imageUrl,
          isFavorite: character.isFavorite,
          description: character.description,
          name: character.name,
          comic: [],
        };
        c.comic = d.data.results.map((comic: any) => ({
          id: comic.id,
          name: comic.title,
          imageUrl: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
          year: comic.dates[0].date?.slice(0, 4),
        }));

        console.log(c);
        setData(c);
      } catch (error) {
        console.log(error);
        setError("Failed to fetch data");
      } finally {
        setIsLoading(false);
      }
    }
  };

  useEffect(() => {
    console.log(character);
    if (character?.id && data == null) {
      fetchData();
    }
  }, []);

  const toggleFavorite = () => {
    if (data) {
      data.isFavorite = !data?.isFavorite;

      setData(data);
      saveFavorites(data.id);
    }
  };

  return {
    data,
    isLoading,
    error,
    totalFavorites,
    toggleFavorite,
  };
};
