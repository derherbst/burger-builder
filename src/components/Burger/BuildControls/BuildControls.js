import React from 'react';

import BuildControl from './BuildControl/BuildControl';

import classes from './BuildControls.scss';

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
];

const buildControls = (props) => {

    const {
        ingredientAdded,
        ingredientRemoved,
        disabled,
        price,
        purchasable } = props;

    // console.log(price.toFixed(2));

    return (
        <div className={ classes.BuildControls }>
            <p>Current Price: <strong>{ price.toFixed(2) }</strong></p>
            { controls.map(ctrl => (
                <BuildControl
                    key={ ctrl.label }
                    label={ ctrl.label }
                    added={ () => ingredientAdded(ctrl.type) }
                    removed={ () => ingredientRemoved(ctrl.type) }
                    disabled={ disabled[ctrl.type] }
                />
            )) }
            <button
                className={ classes.OrderButton }
                disabled={ !purchasable }
                onClick={ props.ordered }
            >ORDER NOW</button>
        </div>
    );
};

export default buildControls;