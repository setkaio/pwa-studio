import React, { useCallback, useState } from 'react';
import { Form } from 'informed';

import PaymentMethods from './paymentMethods';
import PriceAdjustments from '../PriceAdjustments';
import Button from '../../Button';
import { mergeClasses } from '../../../classify';

import defaultClasses from './paymentInformation.css';

const PaymentInformation = props => {
    const { onSave } = props;
    const classes = mergeClasses(defaultClasses, props.classes);

    // TODO: Replace "doneEditing" with a query for existing data.
    const [doneEditing, setDoneEditing] = useState(false);
    const handleClick = useCallback(() => {
        setDoneEditing(true);
        onSave();
    }, [onSave]);

    /**
     * TODO
     *
     * Change this to reflect diff UI in diff mode.
     */
    const paymentInformation = doneEditing ? (
        <div>In Read Only Mode</div>
    ) : (
        <div>In Edit Mode</div>
    );

    const priceAdjustments = !doneEditing ? (
        <div className={classes.price_adjustments_container}>
            <PriceAdjustments />
        </div>
    ) : null;

    const reviewOrderButton = !doneEditing ? (
        <Button
            onClick={handleClick}
            priority="high"
            className={classes.review_order_button}
        >
            {'Review Order'}
        </Button>
    ) : null;

    return (
        <Form>
            <div className={classes.container}>
                <div className={classes.payment_info_container}>
                    <PaymentMethods />
                    <div className={classes.text_content}>
                        {paymentInformation}
                    </div>
                </div>
                {priceAdjustments}
                {reviewOrderButton}
            </div>
        </Form>
    );
};

export default PaymentInformation;
