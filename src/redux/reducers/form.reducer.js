import { FORM_TYPES } from '../types';
const { GET_ALL, CREATE_FORM, UPDATE_FORM } = FORM_TYPES;
const initial_state = [];

const FormReducer = (state=initial_state, action) => {

    const { type, payload } = action;
    console.log('payload =',payload);
    switch (type) {
        case GET_ALL:
            return state;
        case CREATE_FORM:
            return [...state, payload];
        case UPDATE_FORM:
            {
                state = [];
                state = payload;
                return state;
            };

        default: 
            return state;
    };
};

export default FormReducer;