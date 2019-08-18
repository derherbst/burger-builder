import React from 'react';

import BurgerIngridient from './BurgerIngridient/BurgerIngredient';

import classes from './Burger.scss';

const burger = ( props ) => {
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                return <BurgerIngridient key={ igKey + i } type={ igKey }/>
            })
        })
        .reduce((arr, el) => {
            return arr.concat(el);
        }, []);

    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients!</p>
    }

    return (
        <div className={ classes.Burger }>
            <BurgerIngridient type='bread-top' />
            { transformedIngredients }
            <BurgerIngridient type='bread-bottom' />
        </div>
    );
};

export default burger;