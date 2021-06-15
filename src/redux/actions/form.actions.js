import { FORM_TYPES } from '../types';
const { GET_ALL, CREATE_FORM, UPDATE_FORM } = FORM_TYPES;

const FormActions = {
    get_all: () => {

        return async (dispatch) => {
            dispatch({
                type: GET_ALL,
            })
        };
    },
    create_form: (form_details) => {

        return async (dispatch) => {
            dispatch({
                type: CREATE_FORM,
                payload: form_details
            });
        };
    },
    update_form: (form_details) => {
        return async (dispatch) => {
            dispatch({
                type: UPDATE_FORM,
                payload: form_details
            })
        }
    }
}

export default FormActions;
