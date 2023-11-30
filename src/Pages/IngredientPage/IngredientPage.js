// import React, {useEffect, useState} from "react";
// import axios from "axios";
// import {useParams} from "react-router-dom";
// // import './style.css'
// import Header from "../../Components/Header/Header";
// import CocktailList from "../../Components/CocktailList/CocktailList";
//
// const IngredientsPage = () => {
//     const {name} = useParams()
//     const [ingredient, setIngredient] = useState([])
//
//     useEffect(() => {
//         axios(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${name}`)
//             .then(({data}) => {
//                 setIngredient(data.drinks)
//             })
//     }, []);
//
//
//     return (
//         <>
//             <div>
//                 <Header />
//             </div>
//             <div className={'container'}>
//                 <div>
//                     <div>
//                         <h2 className={'name pt-5'}>{name}</h2>
//                         <img src={`https://www.thecocktaildb.com/images/ingredients/${name}.png`} alt=""/>
//                     </div>
//                     <CocktailList drinks={ingredient}/>
//                 </div>
//             </div>
//         </>
//     )
// }
//
// export default IngredientsPage