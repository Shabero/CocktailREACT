import React from 'react';
import CocktailCard from "../CocktailCard/CocktailCard";




const CocktailList = ({drinks}) => {
    if (!drinks) {
        return (
            <div className={'d-flex justify-content-center'}>
                <h2 className={'text-black'}>
                    Not Found!
                </h2>
            </div>
        )
    }

    return (
        <div className={'row'}>
            {
                drinks.map(cocktail =>
                    <div key = {cocktail.idDrinks} className = {'col-4'}>
                        <CocktailCard cocktail = {cocktail} />
                    </div>
                )
            }
        </div>
    )
}

export default CocktailList