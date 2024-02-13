import { useEffect, useState } from "react";
import "./App.css";
import { GameTypes } from "./game-types";
import GameCard from "./components/game_card";

function App() {
  const [games, setGames] = useState<Array<GameTypes>>([]);
  const [gameFavourites, setgameFavourites] = useState<Array<number>>([]);

  useEffect(() => {
    const APIcall = async () => {
      const result = await fetch(
        "https://api.rawg.io/api/games?key=5746f0879a2a4d9f9871c56fc33e427c"
      );
      const res = await result.json();
      setGames(res.results);
    };
    APIcall();
  }, []);

  return (
    <>
      <div className="title__container">
        <h2>All Games</h2>
      </div>
      <div className="true__container">
        {games.map((game) => (
          <GameCard
            key={game?.id}
            id={game?.id}
            gameFavourite={gameFavourites}
            updateFav={setgameFavourites}
            background_image={game?.background_image}
            title={game?.name}
          />
        ))}
      </div>
    </>
  );
}

export default App;
