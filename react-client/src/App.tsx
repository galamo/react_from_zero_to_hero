import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderApp } from './components/ui-components/header';
import MyImage from './components/ui-components/image';
import IdCard, { Gender } from './components/ui-components/idCard';
import ProductsPage from './components/pages/productsPage';
import { CountriesPage } from './components/pages/countriesPage';

const headerElement = <h1> React start App Element </h1>

function App() {
    return (
        <div className="App">
            <h1> React Start App </h1>
            {/* <IdCardList /> */}
            <CountriesPage />
            <ProductsPage />
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




function IdCardList() {
    return (
        <div>
            <IdCard firstName='gal'
                lastName='amouyal'
                birth={new Date()}
                gender={Gender.MALE}
                height={1.81}
                picture={"https://avatars.githubusercontent.com/u/32986703?v=4"}
            />
            <IdCard firstName='yuval'
                lastName='b'
                birth={new Date()}
                gender={Gender.MALE}
                height={1.81}
                picture={"https://randomuser.me/api/portraits/med/men/29.jpg"}
            />

        </div>
    )
}


export default App;
