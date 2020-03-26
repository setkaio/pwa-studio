import React from 'react';

import classes from './RadioInput.css';

const RadioInput = props => {
    const { children, value, ...restProps } = props;

    return (
        <label className={classes.root}>
            <input
                {...restProps}
                className={classes.input}
                type="radio"
                value={value}
            />
            <span className={classes.label}>{children}</span>
        </label>
    );
};

export default RadioInput;
