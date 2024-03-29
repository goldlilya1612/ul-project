import {Counter} from "./components/Counter";
import './index.scss';
import React, {Suspense} from "react";
import {Link, Route, Routes} from "react-router-dom";
import {AboutPageAsync} from "./pages/AboutPage/AboutPage.async";
import {MainPageAsync} from "./pages/MainPage/MainPage.async";
export const App = () => {
    return (<div className="app">
        <Link to={'/'}>Главная</Link>
        <Link to={'/about'}>О сайте</Link>
        <Suspense fallback={<h1>Loading...</h1>}>
            <Routes>
                <Route path={'/about'} element={<AboutPageAsync />}/>
                <Route path={'/'} element={<MainPageAsync />}/>
            </Routes>
        </Suspense>
        {/*<Counter />*/}
    </div>)
}