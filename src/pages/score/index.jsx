import React from "react";
import { useNavigate } from "react-router-dom";
import './Styles.css';
import LogoQuiz from '../../assets/images/quiz.png'

function Score(Score){
    const navigate = useNavigate();

    function restart(){
        return navigate ('/game');
    }
const messages = {
    0:'Você não sabe de nada',
    1:'Você sabe muito pouco sobre react',
    2:'Você sabe um pouco den react',
    3:'Você está no caminho',
    4:'Você está aprendendo bem react'
};

    return(
        <div className="container">
            <h1 className = 'title'>Pontuação </h1>
            <img src = {LogoQuiz} alt= 'Logo Quiz' className='logo' />
            <small  className = 'description'> {score ? messages [score] : messages[5]}</small>
            <div className = 'score-container'>
                <big className= 'score'> {score ? score : 5}</big>
            </div>
            <button onClick={restart} className = 'button-restart'>🚀Recomeçar</button>
            <footer className = 'footer'>
                <span className = 'author'> criado por <a href="https://github.com/mateus00dias" target = "_blank" rel = "noreferrer" className = 'author'><ins>Mateus Dias🍺</ins></a></span>
            </footer>
        </div>
    )
}

export default Score;