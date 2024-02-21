import { useEffect, useState } from "react";
import { GameTypes } from "../../game-types";

const useFetch = (url: string) => {
  const [gameData, setGameData] = useState<Array<GameTypes>>([]);

  useEffect(() => {
    const fetchAPICall = async () => {
      const res = await fetch(url);
      const result = await res.json();
      setGameData(result.results);
    };

    fetchAPICall();
  }, [url]);

  return gameData;
};

export default useFetch;
