import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(666);
    }

    render() {
        const { ingredients, price, purchaseCancelled, purchaseContinued } = this.props;

        const ingredientSummary = Object.keys(ingredients)
            .map(igKey => {
                return (
                    <li key={ igKey }>
                        <span style={{textTransform: 'capitalize'}}>{ igKey }</span>: { ingredients[igKey] }
                    </li>
                )
            });
        return (
            <Aux>
                <h3>Your order</h3>
                <p>A delicious burger with the following ingredients:</p>
                <ul>
                    { ingredientSummary }
                </ul>
                <p><strong>Total price: { price }</strong></p>
                <p>Continue to checkout?</p>
                <Button btnType='Danger' clicked={ purchaseCancelled }>CANCEL</Button>
                <Button btnType='Success' clicked={ purchaseContinued }>CONTINUE</Button>
            </Aux>
        );
    }
};

export default OrderSummary;