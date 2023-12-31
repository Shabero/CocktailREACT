import React from 'react';
import {Link} from "react-router-dom";

const CocktailCard = ({cocktail}) => {
    return (
        <div className={'box'}>
            <img src={cocktail?.strDrinkThumb} alt=""/>
            <h5 className={'title'}>
                <Link to={`/cocktail/${cocktail?.idDrink}`}>
                    {cocktail?.strDrink}
                </Link>
            </h5>
            <p className={'description'}>{cocktail?.strCategory}</p>
        </div>
    )
};

export default CocktailCard;