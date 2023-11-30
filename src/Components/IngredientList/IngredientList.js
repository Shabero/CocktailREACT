import React from 'react';
import {Link} from "react-router-dom";

const IngredientList = ({ingredients}) => {
    return (
        <div className={'row'}>
            <div className="col-12">
                <div className="box">
                    <h2 className="text-center p-5">Ingredients</h2>
                </div>
            </div>
            {
                ingredients.map((ingredient, idx) =>
                    <div className={'col-3'} key={idx}>
                        <div>
                            <img src={`https://www.thecocktaildb.com/images/ingredients/${ingredient?.ingredient}.png`} alt=""/>
                            <h5>
                                <Link to={`/ingredient/${ingredient?.ingredient}`}>
                                    {`${ingredient?.ingredient}`}
                                </Link>
                            </h5>
                            {/*<h6>{`${ingredient?.measure}`}</h6>*/}
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default IngredientList;