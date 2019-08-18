import React from 'react';

import classes from './BuildControl.scss';

const buildControl = ( props ) => {

    const { added, removed, disabled } = props;

    return (
        <div className={ classes.BuildControl }>
            <div className={ classes.Label }>{ props.label }</div>
            <button
                className={ classes.Less }
                onClick={ removed }
                disabled={ disabled }
            >Less</button>
            <button className={ classes.More } onClick={ added }>More</button>
        </div>
    );
};

export default buildControl;