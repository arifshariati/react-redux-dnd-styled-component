import { combineReducers } from 'redux';

// reducers 
import FormReducer  from './form.reducer';
import FormFields from './FormFields.reducer';

const appReducer = combineReducers({
    FormReducer,
    FormFields
});

const rootReducer = (state, action) => {
    return appReducer(state, action);
};

export default rootReducer;