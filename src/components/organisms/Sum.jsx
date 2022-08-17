import { useContext } from "react";
import Choices from "../molecules/Choices";
import Mentor from "../atoms/Mentor";
import HappyMentor from "../atoms/HappyMentor";
import SadMentor from "../atoms/SadMentor";
import GameStats from "../molecules/GameStats";
import GameAlgorithm from "../atoms/GameAlgorithm";
import ScoreContext from "../../context/use-scores";

const Sum = () => {
  const ctx = useContext(ScoreContext);
  const pack = GameAlgorithm("sum");
  const question = pack[0].question;
  const choices = pack[0].choices;
  const correctAnswer = pack[0].answer;

  return (
    <div className="game-screen">
      <div className="left">
        {
        ctx.isCorrect === true ? 
        <HappyMentor>{question}</HappyMentor> 
        : ctx.isCorrect === false ? 
        <SadMentor>{question}</SadMentor>
        : 
        <Mentor>{question}</Mentor>
        }
      </div>
      <div className="right">
        <GameStats gameStats={ctx} />
        <Choices choices={choices} answer={correctAnswer} />
      </div>
    </div>
  );
};

export default Sum;
