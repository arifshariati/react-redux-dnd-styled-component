import React from 'react';
import styled from 'styled-components';

const TextField = ({type="text", label="Label", name="name"}) => {
    return (
        <Input type={type} label={label} name={name} />
    )
}

const Input = styled.textarea`
    margin: 0rem 0rem;
    padding:1rem 0rem;
    border: 0.1rem #f1f1f1 solid;
    border-radius: 0.3rem;
    width: 100%;
    
    
`;
export default TextField;
