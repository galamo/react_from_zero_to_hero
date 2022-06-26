import React from 'react';
import logo from './logo.svg';
import './App.css';
import { HeaderApp } from './components/ui-components/header';
import MyImage from './components/ui-components/image';
import IdCard, { Gender } from './components/ui-components/idCard';
import ProductsPage from './components/pages/productsPage';
import { CountriesPage } from './components/pages/countriesPage';
import ApplicationBar from './components/app-components/appBar';
import { BrowserRouter, Routes, Route } from "react-router-dom"

const headerElement = <h1> React start App Element </h1>

export const pages = [
    {
        element: <CountriesPage />,
        key: "countriesPage",
        path: "/",
        label: "Countries"
    },
    {
        element: <ProductsPage />,
        key: "productsPage",
        path: "/products",
        label: "Products"
    },
]

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <ApplicationBar />
                <Routes>
                    {pages.map(r => {
                        return <Route  {...r} ></Route>
                    })}
                </Routes>
            </div>
        </BrowserRouter>
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
