import React, {useEffect, useState} from "react";
import { debounce } from "lodash"
import {useDispatch} from "react-redux";
import {searchMeal} from "../../redux/reducers/searchMeal";

const SearchMeal = () => {

    const [input, setInput] = useState('')

    const dispatch = useDispatch()

    const handleChange = debounce((e) => {
        debounceSearch(e.target.value)
    }, 500)

    const debounceSearch = (value) => {
        setInput(value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()

        if (input.trim().length > 3){
            dispatch(searchMeal(input))
            setInput('')
        }else {
            alert("Min-length is 3")
        }
        setTimeout(() => {
            window.scroll(0, 700)
        }, 500)
    }
    useEffect(() => {
        setInput('')
    }, [])


    return (
            <form onSubmit={handleSubmit} className="search">
                <h2 className="search__title">Find your Meal</h2>
                <label className="search__label">
                    <input onChange={handleChange} placeholder="Find your meal" className="search__input" type="text"/>
                    <button type="submit" className="search__btn">Search</button>
                </label>
            </form>
    );
};

export default SearchMeal;