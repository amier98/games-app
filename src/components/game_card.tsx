interface GameCardProps {
  id: number;
  background_image: string | undefined;
  title: string | undefined;
}

const GameCard: React.FC<GameCardProps> = ({ id, background_image, title }) => {
  // function handlePlay(charactId: number) {
  //   if (!gameFavourite.includes(charactId)) {
  //     //if it does not exist, add id to favoruites
  //     updateFav((prevFav) => {
  //       const newFav = [...prevFav, charactId];
  //       console.log(newFav); // Log the updated state inside the callback
  //       return newFav; // Return the new state
  //     });
  //   } else {
  //     const filter = gameFavourite.filter((id) => id !== charactId);
  //     updateFav(filter);
  //     console.log(filter);
  //   }
  // }

  return (
    <div className="gameCard__container">
      <img src={background_image} alt={title} className="game__image" />
      <h3 className="game__title">{title}</h3>
    </div>
  );
};

export default GameCard;
