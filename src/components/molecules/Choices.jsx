import Choice from "../atoms/Choice";
import successSound from "../../assets/success.mp3";
import failureSound from "../../assets/failure.mp3";

const Choices = ({ choices, answer }) => {

  const success = new Audio(successSound);
  const failure = new Audio(failureSound);

  const clickHandler = (event) => {

    const selected = Number(event.target.innerHTML);

    if (selected === answer) {
      success.play();
    } else {
      failure.play();
    }
    
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
