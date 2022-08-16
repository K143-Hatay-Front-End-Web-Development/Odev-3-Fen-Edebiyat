import Choices from "../molecules/Choices";
import Mentor from "../atoms/Mentor";
import GameStats from "../molecules/GameStats";
const Sum = () => {
  return (
    <div className="game-screen">
      <div className="left">
        <Mentor>6 x 9= ?</Mentor>
      </div>
      <div className="right">
        <GameStats />
        <Choices />
      </div>
    </div>
  );
};

export default Sum;
