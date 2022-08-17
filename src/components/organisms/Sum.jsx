import Choices from "../molecules/Choices";
import Mentor from "../atoms/Mentor";
import GameStats from "../molecules/GameStats";
import GameAlgorithm from "../atoms/GameAlgorithm";
const Sum = () => {
  const pack = GameAlgorithm("sum");
  const question = pack[0].question;
  const choices = pack[0].choices;
  const correctAnswer = pack[0].answer;

  return (
    <div className="game-screen">
      <div className="left">
        <Mentor>{question}</Mentor>
      </div>
      <div className="right">
        <GameStats />
        <Choices choices={choices} answer={correctAnswer} />
      </div>
    </div>
  );
};

export default Sum;
