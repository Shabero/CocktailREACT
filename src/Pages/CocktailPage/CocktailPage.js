import React, {useEffect, useState} from "react";
import axios from "axios";
import {useParams} from "react-router-dom"
import IngredientList from "../../Components/IngredientList/IngredientList";
// import Loader from "../../Components/Loader/Loader";
import Header from "../../Components/Header/Header";
// import "./style.css";


const CocktailPage = () => {
    const {idDrinks} = useParams()
    const [cocktail, setCocktail] = useState({})
    const [ingredients, setIngredients] = useState([]);

    const filterIngredients = (meal) => {
        const newIngredients = [];
        for (const key in cocktail) {
            if (key.startsWith('strIngredient') && cocktail[key] !== null && cocktail[key] !== '') {
                const ingredientNumber = key.slice(13);
                const measure = cocktail[`strMeasure${ingredientNumber}`];
                newIngredients.push({
                    ingredient: cocktail[key],
                    measure: measure || ''
                });
            }
        }
        setIngredients(newIngredients);
    };

    useEffect(() => {
        axios(`www.thecocktaildb.com/api/json/v1/1/lookup.php?i&=${idDrinks}`)
            .then(({data}) => {
                filterIngredients(data.drinks[0])
                setCocktail(data.drinks[0])
            })
    }, [idDrinks]);

    // if (!cocktail.idDrinks || !ingredients.length) {
    //     return <Loader />
    // } else {
        return (
            <>
                <div>
                    <Header />
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="box">
                                <div className="row">
                                    <div className="col-12">
                                        <div className="box">
                                            <h2 className={'text-center '}>{cocktail.strDrink}</h2>
                                        </div>
                                    </div>
                                    <div className="col-7">
                                        <div className="box">
                                            <p className={'pb-4'}>{cocktail.strInstructions}</p>
                                            <iframe className="rounded-3"
                                                    src={`https://www.youtube.com/embed/${cocktail.strVideo?.slice(cocktail.strVideo.indexOf('=')+1)}`}
                                                    frameBorder="0"></iframe>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <div className="box">
                                            <img src={cocktail.strDrinkThumb} className="main-img" alt=""/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-12">
                            <div className="box">
                                <IngredientList ingredients={ingredients}/>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
}


export default CocktailPage;