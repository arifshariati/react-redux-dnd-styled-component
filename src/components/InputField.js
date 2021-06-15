import React from 'react';
import styled  from 'styled-components';

const InputField = () => {
    return (
        <Input />
    )
}
const Input = styled.input`
    margin: 0rem 0rem;
    padding:1rem 0rem;
    border: 0.1rem #f1f1f1 solid;
    border-radius: 0.3rem;
    width: 100%;
`;
export default InputField;
