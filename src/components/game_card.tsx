import { useState } from "react";

interface GameCardProps {
  id: number;
  background_image: string | undefined;
  title: string | undefined;
}

const GameCard: React.FC<GameCardProps> = ({ id, background_image, title }) => {
  const [imagesNumber, setImagesNumber] = useState(0);

  const handleImage = () => {
    setImagesNumber(imagesNumber + 1);
  };

  return (
    <div className="gameCard__container">
      <img
        src={background_image}
        alt={title}
        className="game__image"
        onLoad={handleImage}
      />
      {}
      <h3 className="game__title">{title}</h3>
    </div>
  );
};

export default GameCard;
