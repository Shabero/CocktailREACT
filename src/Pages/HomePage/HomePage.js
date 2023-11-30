import React, {useEffect, useState} from 'react';
import Header from "../../Components/Header/Header";
import axios from "axios";
import CocktailList from "../../Components/CocktailList/CocktailList";

const HomePage = () => {
    const [drinks, setDrinks] = useState([])

    useEffect(() => {
        axios('https://www.thecocktaildb.com/api/json/v2/1/popular.php')
            .then(({ data }) => setDrinks(data.drinks))
    },[])

    return (
        <>
            <div >
                <Header />
            </div>
            <div className={'container'}>
                <h1 className={'p-3'}>
                    <b>Cocktails</b>
                </h1>
                <CocktailList drinks={drinks}/>
            </div>
        </>
    )
}
export default HomePage