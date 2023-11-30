import React from 'react';
import HomePage from "./Pages/HomePage/HomePage";
import {Route, Routes} from "react-router-dom";
import SearchPage from "./Pages/SearchPage/SearchPage";
import CocktailPage from "./Pages/CocktailPage/CocktailPage";
import IngredientPage from './Pages/IngredientPage/IngredientPage';


const  App = () => {
    return (
        <>
            <Routes>
                <Route path={"/"} element={<HomePage /> }/>
                <Route path={"/search"} element={<SearchPage />} />
                <Route path={"/cocktail/:idDrink"} element={<CocktailPage />}/>
                <Route path={"/ingredient/:name"} element={ <IngredientPage/> }/>
            </Routes>
        </>
    )
}

export default App