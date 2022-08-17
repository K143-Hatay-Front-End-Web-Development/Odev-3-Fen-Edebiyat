const GameStats = ({gameStats}) => {
  return (
    <div className="game-stats">
      {console.log(gameStats)}
      <span>Puan: {gameStats.Points}</span>
      <span>Tur: {gameStats.Toure}</span>
      <span>Soru: {gameStats.Question}</span>
    </div>
  );
};

export default GameStats;