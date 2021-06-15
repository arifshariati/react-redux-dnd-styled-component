
import { FORM_FIELD_TYPES } from '../types';
const { CREATE_FORM_FIELD, UPDATE_FORM_FIELD } = FORM_FIELD_TYPES;
const initial_state = [];

const FormFields = (state=initial_state, action) => {
    
    const { type, payload } = action;

    switch (type) {

        case CREATE_FORM_FIELD:
            return [...state, payload];
        case UPDATE_FORM_FIELD:
            return [...state, payload];

        default: 
            return state;
    };
}

export default FormFields;
