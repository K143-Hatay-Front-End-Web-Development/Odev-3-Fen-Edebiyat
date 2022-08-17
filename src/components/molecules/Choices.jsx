import { useContext } from "react";
import Choice from "../atoms/Choice";
import successSound from "../../assets/success.mp3";
import failureSound from "../../assets/failure.mp3";
import ScoreContext from "../../context/use-scores";
const Choices = ({ choices, answer }) => {
  const ctx = useContext(ScoreContext)
  const success = new Audio(successSound);
  const failure = new Audio(failureSound);

  const clickHandler = (event) => {
    const selected = Number(event.target.innerHTML);
    if (selected === answer) {
      success.play();
      console.log("correct!");
      ctx.isCorrext = true
      ctx.Points = 10;
    } else {
      failure.play();
      console.log("wrong!");
      ctx.isCorrext = false;
    }
    console.log(ctx.isCorrext)
  };
  return (
    <div className="choices">
      <Choice className="choices-1" onClick={clickHandler}>
        {choices && choices[0]}{" "}
      </Choice>
      <Choice className="choices-2" onClick={clickHandler}>
        {choices && choices[1]}{" "}
      </Choice>
      <Choice className="choices-3" onClick={clickHandler}>
        {choices && choices[2]}{" "}
      </Choice>
    </div>
  );
};

export default Choices;
