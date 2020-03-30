import gql from 'graphql-tag';

// We disable linting for local fields because there is no way to add them to
// the fetched schema.
// https://github.com/apollographql/eslint-plugin-graphql/issues/99
/* eslint-disable graphql/template-strings */
export const GET_SELECTED_PAYMENT_METHOD = gql`
    query getSelectedPaymentMethod($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            selectedPaymentMethod @client
        }
    }
`;

export const GET_PAYMENT_NONCE = gql`
    query getPaymentNonce($cartId: String!) {
        cart(cart_id: $cartId) {
            id
            paymentNonce @client
        }
    }
`;

/* eslint-enable graphql/template-strings */

export default {
    queries: {
        getSelectedPaymentMethodQuery: GET_SELECTED_PAYMENT_METHOD,
        getPaymentNonceQuery: GET_PAYMENT_NONCE
    },
    mutations: {}
};