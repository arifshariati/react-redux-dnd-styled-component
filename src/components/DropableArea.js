import React from 'react';
import styled from 'styled-components';

const DropableArea = ({children}) => {
    return (
        <DropArea>
            {children}
        </DropArea>
    )
}

const DropArea= styled.div`
    margin:0rem;
    padding: 1rem;
    width: 100%;
    background-color: #f6f6f6;
    border-radius: 0.5rem;
    min-height: 70vh;
`;
export default DropableArea;
