import React, {useState, useEffect} from 'react' ; 
import {useNavigate} from 'react-router-dom';
import './Styles.css';
import LogoQuiz from '../../assets/images/quiz.png';
import { questions, shuffle } from "../../database/questions";

function Game(){

    const navigate = useNavigate ; 
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [questionsSelected, setQuestionsSelected] = useState([]);
    const [userAnswers, setUserAnswers] = useState([]);

    useEffect(() => {
        if (questionsSelected.length > 0)
        return ; 

        const shuffledQuestions = shuffle(questions);
        const selectedQuestions = shuffledQuestions.slice(0,5);
        setQuestionsSelected(selectedQuestions);
        console.log(selectedQuestions); 
    }, [questionsSelected]);

    return(
        <div className='container'>
            <img src ={LogoQuiz} alt ="Logo Quiz" className = "logo" /> 
            <div className = 'card'>
                <div className = 'card-question'>
                    <h2 className="card-title">  Pergunta 1 de 5 </h2>
                    <p className="question">Qual a melhor linguagem de programação ? </p>
                </div>

                <div className = 'card-answer'>
                    <div className = 'card-options'>
                        <button className = 'card-option'>
                            Java
                        </button>
                        <button className = 'card-option'>
                            C++
                        </button>
                        <button className = 'card-option'>
                            Python
                        </button>
                        <button className = 'card-option'>
                            JavaScript
                        </button>
                        <button className = 'card-option'>
                            c#
                        </button>
                        </div>
                </div>  
            </div>
        </div>
    )
}

export default Game;