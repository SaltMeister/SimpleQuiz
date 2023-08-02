import React, {useState} from "react";
import QuestionComponent from "./QuestionComponent";

import { useSelector, useDispatch } from "react-redux";
import { clear } from "../Actions";
import { increment } from "../Actions";


export default function QuizComponent() {

  const [index, setIndex] = useState(0);

  const count = useSelector(state => state.counter);
  const isSelectedCorrect = useSelector(state => state.selected);
  const dispatch = useDispatch();

  const handleClick = (e) => {
    let choice = e.target.value;

    setIndex(index+1);
    
    if(isSelectedCorrect != null)
    {
      if(isSelectedCorrect === 'true')
        dispatch(increment());
    }
    dispatch(clear());
  };
  return (
    <div>
      <div style={{display: index === 0 ? 'block' : 'none'}}>
        <QuestionComponent question="What is the capital of California?" answerArray={["Sacramento", "Denver", "Los Angeles", "San Francisco"]} correctIndex={0}/>  
      </div>
      <div style={{display: index === 1 ? 'block' : 'none'}}>
        <QuestionComponent question="What is the capital of Arizona?" answerArray={["Salt Lake City", "Las Vegas", "Nashville", "Pheonix"]} correctIndex={3}/>  
      </div>
      <div style={{display: index === 2 ? 'block' : 'none'}}>
        <QuestionComponent question="What country is above the United States?" answerArray={["Alaska", "Mexico", "Canada", "Russia"]} correctIndex={2}/>  
      </div>
      
      <div style={{display: index === 3 ? 'block' : 'none'}}>
        <p>You got {count} out of {index} question correct!</p>
      </div>
      <button onClick={handleClick} value="next">Next</button>
    </div>
  )
} 