import React, { useState } from 'react';
import {v4 as uuid} from 'uuid';
import * as _ from 'lodash';
import './App.css';
//  redux 
import { Provider } from 'react-redux';
import { store } from './redux/store';

// Layouts
import { MainLayout } from './layout';

const list = [
  {
    type:"InputField",
    label: "Input Field"
  },
  {
      type:"TextField",
      label: "Text Field"
  },
  {
      type: "Divider",
      label:"Divider",
  },
  {
      type: "FileUpload",
      label:"File Upload",
  },
];
function App() {
  const [formFields, updateFormFields] = useState([]);

  const AddFormField = (field) => {
    
    field.id =`${formFields.length +1}-${uuid()}`;
    updateFormFields([...formFields, field]);
    
  }
  const DeleteFormField = (id) => {

    let updated = _.map(formFields, (item) => { if(item.id !== id) return item});
    updated = _.without(updated,undefined);
    updateFormFields(updated);
  
  }
  const ClearFormFields = () => {
    updateFormFields([]);
  };

  
  const handleDropable = (result) => {
        
    if(!result.destination) return;
    const items = Array.from(formFields);
    const [reorderedItem] = items.splice(result.source.index, 1);
    items.splice(result.destination.index, 0, reorderedItem);
    
    updateFormFields(items);
    console.log('items =', formFields);
};

  
  return (
    <Provider store={store}>
      <MainLayout 
        list={list} 
        formFields={formFields} 
        AddFormField={AddFormField} 
        ClearFormFields={ClearFormFields} 
        handleDropable={handleDropable} 
        DeleteFormField={DeleteFormField}
      />
    </Provider>
  );
}

export default App;
