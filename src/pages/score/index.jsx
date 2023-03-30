import { useNavigate } from 'react-router-dom'
import React from 'react';
import LogoQuiz from '../../assets/images/quiz.png'
import './styles.css'

function Score({score}) {
    const navigate = useNavigate()

    function restart() {
        return navigate('/');
    }

    const messages = {
        0: 'Você não sabe nada sobre React 😢',
        1: 'Você sabe muito pouco sobre React 😐',
        2: 'Você sabe um pouco sobre React 🤔',
        3: 'Você está no caminho 😉',
        4: 'Você está aprendendo bem React 😀',
        5: 'Você sabe muito sobre React 😎',
    }


    return (
        <div className="container">
            <h1 className="title">Pontuação</h1>
            <img src={LogoQuiz} alt="React Logo" className="logo" />
            <small className="description">{score ? messages[score] : messages[5]}</small>

            <div className="score-container">
                <big className="score">{score ? score : 5}</big>
                <small className="total">/5</small>
            </div>

            <button className="button-restart" onClick={restart}>🚀 Reiniciar</button>
            <footer className = 'footer'>
                <span className = 'author'> criado por <a href="https://github.com/mateus00dias" target = "_blank" rel = "noreferrer" className = 'author'><ins>Mateus Dias🍺</ins></a></span>
            </footer>
        </div>
    )
}

export default Score;