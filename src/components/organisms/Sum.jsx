import Choices from "../molecules/Choices";
import Mentor from "../atoms/Mentor";
import GameStats from "../molecules/GameStats";
const Sum = () => {
  return (
    <div className="game-screen">
      <div className="left">
        <Mentor>99 + 99 = ?</Mentor>
      </div>
      <div className="right">
        <GameStats />
        <Choices />
      </div>
    </div>
  );
};

export default Sum;
