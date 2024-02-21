import { createContext, useEffect, useState } from "react";
import useFetch from "./hooks/useFetch";
import { GameTypes } from "../game-types";

interface GenreProps {
  onUpdateGenreGame: (updateGenre: Array<GameTypes>) => void;
  onUpdateHeaderText: (updateText: string) => void;
}

const GenreList: React.FC<GenreProps> = ({
  onUpdateGenreGame,
  onUpdateHeaderText,
}) => {
  const [selectedGenreId, setSelectedGenreId] = useState<number | null>(4);

  const data = useFetch(
    `https://api.rawg.io/api/genres?key=5746f0879a2a4d9f9871c56fc33e427c`
  );

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const res = await fetch(
          `https://api.rawg.io/api/games?key=5746f0879a2a4d9f9871c56fc33e427c&genres=${selectedGenreId}`
        );
        const response = await res.json();
        const currentGenreHeader = data.find(
          (genre) => genre.id === selectedGenreId
        );
        console.log(currentGenreHeader);
        onUpdateHeaderText(currentGenreHeader?.name || "Popular Games");
        onUpdateGenreGame(response.results);
      } catch (error) {
        console.log(error);
      }
    };

    fetchAPI();
  }, [selectedGenreId]);

  const handleClick = (id: number) => {
    setSelectedGenreId(id);
  };

  return (
    <>
      {data.map((genre) => (
        <div
          className="genre__container"
          onClick={() => handleClick(genre.id)}
          key={genre.id}
        >
          <img
            className="genre__image"
            src={genre.image_background}
            alt={genre.name}
          />
          <p className="genre__text">{genre.name}</p>
        </div>
      ))}
    </>
  );
};

export default GenreList;
