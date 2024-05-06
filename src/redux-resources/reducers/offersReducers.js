import { SET_OFFER } from 'redux-resources/actions/offersActions';

export default function offerReducer (state = initialState, action) {
    const {
        offerName,
        price
    } = action;

    switch (action.type) {
        case SET_OFFER:
            return {
                ...state,
                offerName: offerName,
                price: price
            };
        default:
            return state;
    }
}
const initialState = {
    offerName: 'Offer 1',
    price: 199
};
  