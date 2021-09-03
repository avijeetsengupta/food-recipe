import React from 'react'
import style from './recipe.module.css';

const Recipe = (props) => {

    const {title, calories, image, ingredients} = props;

    return (
        <div className={style.recipe}>
            <h1>{title}</h1>
            <ol>
                {ingredients.map(ingredient => (
                <li>{ingredient.text}</li>
                ))}
            </ol>
            <p><b>calories:</b> {calories}</p>
            <img className={style.image} src={image} alt="" />
        </div>
    )
}

export default Recipe
