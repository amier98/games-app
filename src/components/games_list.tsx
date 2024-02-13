interface GameListProps {
  name: string | undefined;
  background_image: string | undefined;
}

const GameList: React.FC<GameListProps> = ({ name, background_image }) => {
  return (
    <div className="container">
      <ul>
        <img
          className="image__game"
          alt="this is a image"
          src={background_image}
        />
        <p className="text">{name}</p>
      </ul>
    </div>
  );
};

export default GameList;
