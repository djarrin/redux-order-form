import { TAX_CALCULATED, TAX_LOADING } from "redux-resources/actions/taxPreviewActions";

export default function taxReducer (state = initialState, action) {

    switch (action.type) {
        case TAX_CALCULATED:
            return {
                ...state,
                state: 'complete'
            };
        case TAX_LOADING:
            return {
                ...state,
                state: 'loading'
            }
        default:
            return state;
    }
}

const initialState = {
    state: 'complete'
};
  