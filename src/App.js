import React from "react";
import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AaNavbar from "./components/UI/navbar/AaNavbar";
import AppRouter from "./components/AppRouter";

function App() {
    return (
        <BrowserRouter>
            <AaNavbar/>
            <AppRouter/>
        </BrowserRouter>
    );
}

export default App;
