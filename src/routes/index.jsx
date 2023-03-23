import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home';
import Game from '../pages/Game';

export default function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/game" element={<Game/>}/>
        </Routes>
    );
}