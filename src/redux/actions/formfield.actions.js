import { FORM_FIELD_TYPES } from '../types';
const { CREATE_FORM_FIELD, UPDATE_FORM_FIELD } = FORM_FIELD_TYPES;

const FormFieldActions = {
    
    create_form_field: (form_details) => {

        return async (dispatch) => {
            dispatch({
                type: CREATE_FORM_FIELD,
                payload: form_details
            });
        };
    },
    update_form_field: (form_details) => {
        console.log('action = ', form_details);
        return async (dispatch) => {
            dispatch({
                type: UPDATE_FORM_FIELD,
                payload: form_details
            })
        }
    }
}

export default FormFieldActions;
