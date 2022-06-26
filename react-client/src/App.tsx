import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderApp } from './components/ui-components/header';
import MyImage from './components/ui-components/image';

const headerElement = <h1> React start App Element </h1>

function App() {
    return (
        <div className="App">
            <h1> React Start App </h1>
            {headerElement}
            <HeaderApp text={"Home Page"} color={"rgba(254,220,15,0.5)"} />
            <HeaderApp text={"About Page"} />
            <div>
                <MyImage image={"https://m.media-amazon.com/images/M/MV5BMTU4MzYzMzc4N15BMl5BanBnXkFtZTgwMTg3ODA3MzI@._V1_.jpg"} />
            </div>
            <div>
                <MyImage image={""} />
            </div>
        </div>
    );
}

export default App;
