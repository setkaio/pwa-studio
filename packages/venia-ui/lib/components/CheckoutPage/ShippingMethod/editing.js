import React from 'react';
import { Form } from 'informed';

import { mergeClasses } from '../../../classify';
import Button from '../../Button';
import ShippingRadios from './shippingRadios';
import defaultClasses from './editing.css';

const Editing = props => {
    const {
        handleSubmit,
        isLoading,
        selectedShippingMethod,
        shippingMethods
    } = props;

    const classes = mergeClasses(defaultClasses, props.classes);

    return (
        <div className={classes.root}>
            <h3 className={classes.heading}>Shipping Method</h3>
            <Form className={classes.form} onSubmit={handleSubmit}>
                <ShippingRadios
                    isLoading={isLoading}
                    selectedShippingMethod={selectedShippingMethod}
                    shippingMethods={shippingMethods}
                />
                <Button
                    priority="normal"
                    type="submit"
                    disabled={isLoading || !shippingMethods.length}
                >
                    {'Continue to Payment Information'}
                </Button>
            </Form>
        </div>
    );
};

export default Editing;
