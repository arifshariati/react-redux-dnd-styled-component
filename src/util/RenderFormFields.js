import React from 'react';
import { TextField, IconButton, Divider, InputField } from '../components';

import { BiUpload } from 'react-icons/bi';

const RenderFormFields = ({id, type, label}) => {
    
    const handleFileUpload = () => {

        document.getElementById("fileupload").click();
    };
    switch(type) {
        case "InputField": return (<InputField />);
        case "FileUpload":  return(
            <IconButton onClick={handleFileUpload}>
                <BiUpload fontSize="large" />
                <h3>{label}</h3>
                <input id="fileupload" type="file" style={{display:'none'}} />
            </IconButton>
        ); 
        case "Divider": return (
            <Divider id={id} />
        );
        default: return(<TextField  type= {type} label= {label} id={id} />);
    }
    
}

export default RenderFormFields;
