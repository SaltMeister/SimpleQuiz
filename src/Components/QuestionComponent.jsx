import React from "react";
import { useDispatch } from "react-redux";
import { set } from "../Actions";

export default function QuestionComponent({question, answerArray, correctIndex}) {
  
  const dispatch = useDispatch();

  const handleForm = (e) => {
    var itemIndex = e.target.getAttribute('item');

    if (itemIndex == correctIndex)
      dispatch(set("true"));
    else
      dispatch(set("false"));
    
  };
  return (
    <div>
      <h3>{question}</h3>

      <form>
      {answerArray.map((value, key) => {
        return(
          <div>
            <input type="radio" name="question" item={key} onChange={handleForm}/>
            <label for={value}>{value}</label>          
          </div>
        )
      })}
      </form>
    </div>
  );
}