import {Routes, Route} from 'react-router-dom';

import { useContext } from 'react'
import './App.css'
import './index.css';

// component import
import FaqComponent from './Context/FaqComponent';

//app state import
import { appContext } from './Context/AppContextProvider';

function App() {
  const questionsArray = [{question: 'How many planets are in our solar system', answer: 'exactly 6 planets'}, 
  {question: 'How many continents are in the world', answer: "there are 5 continents"}, 
  {question: 'Who is the current President of Nigeria', answer: 'Bola  Ahned Tinubu'}, 
  {question: 'What is the molecular composition of water', answer: 'one molecule of water is made up of two hydrogen atoms and one oxygen atom.'}, 
  {question: 'Which country is referred to as the world\'s police', answer: 'The United states of America'}]
  const [currentContext, dispatch] = useContext(appContext);
  


  return (
    <div className={'w-full flex flex-col px-4 items-center justify-center min-h-screen border bg-slate-200 text-black'}>
      <h1 className='my-6 text-4xl mx-4 text-center md:text-8xl'>Frequently Asked Questions</h1>
      {questionsArray.map((item, index) =>{
        if (index === 0) return <FaqComponent key = {index+1*Math.random()*15} firstItem={true} question={item.question} answer={item.answer} />
        return <FaqComponent key = {index+1*Math.random()*15} firstItem={false} question={item.question} answer={item.answer} />
      } )}
    </div>
  )
}

export default App
