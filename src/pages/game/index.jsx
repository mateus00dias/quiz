import React, {useState, useEffect} from 'react' ; 
import {useNavigate} from 'react-router-dom';
import './Styles.css';
import LogoQuiz from '../../assets/images/quiz.png';
import { questions, shuffle } from "../../database/questions";
import Score from '../score';
//import Spinner from 'reactjs-simple-spinner'


function Game(){

    const navigate = useNavigate();
    const [currentQuestion, setCurrentQuestion] =useState(0);
    const [questionsSelected,setQuestionsSelected] =useState([]);
    const [useAnswers, setUseAnswers] =useState([]);
    const [finish, setFinish] = useState(false);
    
    useEffect(() => {
        if(questionsSelected.length>0)
        return;

        const shuffledQuestions = shuffle(questions);
        const selectedQuestions = shuffledQuestions.slice(0,5);
        setQuestionsSelected(selectedQuestions);
        console.log(selectedQuestions);

      },[questionsSelected])

      // Funçao chamada quando o usuario responde uma questao
      function handleAnswer(selectedOptionIndex) {
        const currentQuestionData = questionsSelected[currentQuestion];
        const useAnswer = currentQuestionData.answers[Number(selectedOptionIndex)];
        setUseAnswers([...useAnswers, useAnswer]);

        if(currentQuestion < 4){
          setCurrentQuestion(currentQuestion + 1);
        }else{
           setFinish(true);
        }
      }
      const currentQuestionData = questionsSelected[currentQuestion];
      if(finish){
        const correctAnswers = useAnswers.filter(answer => answer.correct === true).length;
        return <Score score={correctAnswers}/>
      }

return (
    
        <div className='container'>
            <img src ={LogoQuiz} alt ="Logo Quiz" className = "logo" /> 
            <div className = 'card'>
                <div className = 'card-question'>
                    <h2 className="card-title">  Pergunta { currentQuestion + 1} de 5 </h2>
                    <p className="question">{currentQuestionData?.question} </p>
                </div>

                <div className = 'card-answer'>
                    <div className = 'card-options'>
                         {currentQuestionData?.answers.map((option, index) => (
                            <button  key={index} className = 'card-option' onClick={()=> handleAnswer(index)}>
                            {option.text}
                        </button>
                         ))}
                        
                        
                        </div>
                </div>  
            </div>
        </div>
    )
}

export default Game;