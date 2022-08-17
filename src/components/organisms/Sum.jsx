import Choices from "../molecules/Choices";
import Mentor from "../atoms/Mentor";
import GameStats from "../molecules/GameStats";
import GameAlgorithm from "../atoms/GameAlgorithm";
const Sum = () => {
  const ret = GameAlgorithm("sum");
  console.log(ret)
  return (
    <div className="game-screen">
      <div className="left">
        <Mentor>{ret[0].question}</Mentor>
      </div>
      <div className="right">
        <GameStats />
        <Choices />
      </div>
    </div>
  );
};

export default Sum;
