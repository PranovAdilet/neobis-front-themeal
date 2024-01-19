import React from 'react';
import SearchMeal from "./SearchMeal/SearchMeal";

const Meal = () => {
    return (
        <>
            <div className="meal">
                <div className="meal__left">
                    <h2 className="meal__title-top">Meal of the Day</h2>
                    <h3 className="meal__title">Roast fennel and aubergine paella</h3>
                    <p className="meal__info">Vegan | Spanish</p>
                </div>
                <div className="meal__right">
                    <img className="meal__img" src="https://www.themealdb.com/images/media/meals/1520081754.jpg"
                         alt=""/>
                </div>
            </div>
            <SearchMeal/>
        </>
    );
};

export default Meal;