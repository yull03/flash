import "./App.scss";
import CardLearn from "./components/CardLearn";
import Categoris from "./components/Categoris";
import Flashcard from "./components/Flashcard";
import Result from "./components/Result";
import mockData from "./Data/mockData";
import {useState} from "react";

const App = () => {
  // const [category,setCategory]=useState([]/**배열로 카테고리 객체 가져오기**/);
  // //category정보를 가져옵니다
  // mockData.categories.forEach()
  
  //첫번째 항목의 name을 출력 console.log로 출력
  const [category,setCategory]=useState(null);
  const [learningMode, setLeaningMode]=useState(false);
  const [exitMode,setExitMode]=useState(false);
  const handleExit=(mode)=>{
    setExitMode(mode);
  }
  const handleCategory=(obj)=>{
    setCategory(obj);
  } 
  const handleLearn=(data)=>{
    setLeaningMode(data);
  }
  return (
    <div className="app">
      {
        !category &&
        <Categoris 
        cardData={mockData.categories} 
        onSelected={handleCategory}/>
      }
      {
        category && !learningMode &&
        <Flashcard cardData={category}
          onSelected={handleCategory}
          onLearn={handleLearn}
        />
        }
        {
        learningMode && !exitMode &&
        <CardLearn cardData={category.flashcards}
        onExit={handleExit}/>
        }
        {
        exitMode &&
        <Result onExit={()=>{
          setCategory(null);
          setLeaningMode(false);
          setExitMode(false);
        }}/>
        }
    </div>
  );
};

export default App;
