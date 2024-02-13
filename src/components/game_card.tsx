interface GameCardProps {
  id: number;
  background_image: string | undefined;
  title: string | undefined;
  gameFavourite: Array<number>;
  updateFav: React.Dispatch<React.SetStateAction<number[]>>;
}

const GameCard: React.FC<GameCardProps> = ({
  id,
  background_image,
  title,
  gameFavourite,
  updateFav,
}) => {
  function handlePlay(charactId: number) {
    if (!gameFavourite.includes(charactId)) {
      //if it does not exist, add id to favoruites
      updateFav((prevFav) => {
        const newFav = [...prevFav, charactId];
        console.log(newFav); // Log the updated state inside the callback
        return newFav; // Return the new state
      });
    } else {
      const filter = gameFavourite.filter((id) => id !== charactId);
      updateFav(filter);
      console.log(filter);
    }
  }

  return (
    <>
      <div className="gameCard__container">
        <img src={background_image} alt={title} className="game__image" />
        <div className="game__details">
          <h3 className="gane__title">{title}</h3>
          <button className="game__play" onClick={() => handlePlay(id)}>
            {!gameFavourite.includes(id) ? "Wishlist" : "Added"}
          </button>
        </div>
      </div>
    </>
  );
};

export default GameCard;
