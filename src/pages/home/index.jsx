import React from "react";
import { useNavigate } from "react-router-dom";
import './Styles.css';
import LogoQuiz from '../../assets/images/quiz.png'
import Score from '../score';

function Home(){
    const navigate = useNavigate();

    function start(){
        return navigate ('/game');
    }
    return(
        <div className="container">
            <h1 className = 'title'>Bem Vindo ao </h1>
            <img src = {LogoQuiz} alt= 'Logo Quiz' className='logo' />
            <small  className = 'description'> Teste seus conhecimentos sobre react</small>
            <button onClick={start} className = 'button-start'>🚀Começar</button>
            <footer className = 'footer'>
                <span className = 'author'> criado por <a href="https://github.com/mateus00dias" target = "_blank" rel = "noreferrer" className = 'author'><ins>Mateus Dias🍺</ins></a></span>
            </footer>
        </div>
    )
}

export default Home;