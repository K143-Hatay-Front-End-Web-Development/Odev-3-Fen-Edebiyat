import Choice from "../atoms/Choice";
const Choices = ({ choices, answer }) => {
  const clickHandler = (event) => {
    const selected = Number(event.target.innerHTML)
    if(selected === answer) console.log("correct!") 
    else console.log("wrong!")
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
