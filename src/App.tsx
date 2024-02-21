import { useState } from "react";
import "./App.css";
import GameCard from "./components/game_card";
import GenreList from "./components/genre_list";
import { GameTypes } from "./game-types";

function App() {
  const [genreGames, setGenreGames] = useState<Array<GameTypes>>([]);
  const [header, setGenreHeader] = useState<string>("");

  const updateGameGenre = (updateGenre: Array<GameTypes>) => {
    setGenreGames(updateGenre);
  };

  const updateHeader = (updateHeader: string) => {
    setGenreHeader(updateHeader);
  };

  return (
    <>
      <div className="true__container">
        <div className="genre__list">
          <h2 className="genre__header">Genre</h2>
          <GenreList
            onUpdateGenreGame={updateGameGenre}
            onUpdateHeaderText={updateHeader}
          />
        </div>
        <div className="popularGames__list">
          <h2 className="games__header">{header}</h2>
          <div className="popularGame__Container">
            {genreGames.map((game) => (
              <GameCard
                key={game?.id}
                id={game?.id}
                background_image={game?.background_image}
                title={game?.name}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
