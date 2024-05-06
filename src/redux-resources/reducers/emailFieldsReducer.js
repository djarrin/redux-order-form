import { EMAIL_VALID, EMAIL_INVALID, EMAIL_LOADING } from "redux-resources/actions/emailFieldActions";

export default function emailFieldsReducer (state = initialState, action) {

    switch (action.type) {
        case EMAIL_VALID:
            return {
                ...state,
                state: 'valid'
            };
        case EMAIL_INVALID:
            return {
                ...state,
                state: 'invalid'
            }
        case EMAIL_LOADING:
            return {
                ...state,
                state: 'loading'
            }
        default:
            return state;
    }
}

const initialState = {
    state: 'empty'
};
  