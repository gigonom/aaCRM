import React from 'react';
import {Link, Route, Routes} from "react-router-dom";
import About from "../pages/About";
import Clients from "../pages/Clients";

const AppRouter = () => {
    return (
        <Routes>
            <Route
                path="about"
                element={<About />}
            />
            <Route
                path="clients"
                element={<Clients />}
            />
            <Route
                path="*"
                element={<main style={{ padding: "1rem" }}>
                    <h1>Ошибка 404. Такой страницы не бывало никогда!</h1>
                    <Link to="clients">Перейти на страницу Клиенты</Link>
                </main>}
            />
        </Routes>
    );
};

export default AppRouter;