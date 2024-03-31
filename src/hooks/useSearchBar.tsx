import { useState } from "react";

interface UseSearchBarReturn {
  searchValue: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const useSearchBar = (initialValue: string = ""): UseSearchBarReturn => {
  const [searchValue, setSearchValue] = useState<string>(initialValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  return { searchValue, handleChange };
};
