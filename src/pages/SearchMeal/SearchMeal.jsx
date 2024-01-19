import React from "react";

const SearchMeal = () => {
    return (
            <form className="search">
                <h2 className="search__title">Find your Meal</h2>
                <label className="search__label">
                    <input placeholder="Find your meal" className="search__input" type="text"/>
                    <button type="submit" className="search__btn">Search</button>
                </label>
            </form>
    );
};

export default SearchMeal;