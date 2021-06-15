import React from 'react';
import styled  from 'styled-components';
// layouts - sections
import { Left, Right } from '.';

const MainLayout = (
    {
        list, 
        formFields,
        AddFormField, 
        ClearFormFields, 
        handleDropable,
        DeleteFormField
    }) => {
    return (
        <MainWrapper>
            <Left 
                AddFormField={AddFormField} 
                list={list} 
            />
            <Right 
                ClearFormFields={ClearFormFields} 
                formFields={formFields} 
                handleDropable={handleDropable}
                DeleteFormField={DeleteFormField}
            />
        </MainWrapper>
    )
}

const MainWrapper = styled.div`
    display:flex;
    min-height: 100vh;
    width: 100%;
    margin: 0;
    padding: 0;
`;
export default MainLayout;
