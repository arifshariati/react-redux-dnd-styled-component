import React from 'react';
import styled  from 'styled-components';

// icons 
import { AiOutlineDrag } from 'react-icons/ai';
import { AiOutlineDelete }  from 'react-icons/ai';
const EditIcons = ({DeleteFormField, id}) => {
    return (
        <EditIconSet>
            <AiOutlineDrag fontSize="large" />
            <AiOutlineDelete fontSize="large" onClick={()=>DeleteFormField(id)} />
        </EditIconSet>
    )
}

const EditIconSet = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 5rem;
    height: 2rem;
    background-color: #f9f9f9;
    border: 0.1rem grey solid;
    border-radius: 2rem;
    padding: 0rem 0.7rem;
`;
export default EditIcons;
