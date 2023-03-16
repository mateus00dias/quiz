import React from "react";
import './Styles.css';
import LogoQuiz from '../../assets/images/quiz.png'

function Home(){
    return(
        <div className="container">
            <h1 className = 'title'>Bem Vindo ao </h1>
            <img src = {LogoQuiz} alt= 'Logo' className='logo' />
            <small  className = 'description'> Teste seus conhecimentos sobre react</small>
            <button className = 'button-start'>🚀Começar</button>
            <footer className = 'footer'>
                <span className = 'author'> criado por <a href="https://github.com/mateus00dias" target = "_blank" rel = "noreferrer" className = 'author'><ins>Mateus Dias🍺</ins></a></span>
            </footer>
        </div>
    )
}

export default Home;