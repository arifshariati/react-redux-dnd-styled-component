import React from 'react';
import styled from 'styled-components';

const Segment = ({children}) => {
    return (
        <GeneralSegment>
            {children}
        </GeneralSegment>
    )
}

const GeneralSegment = styled.div`
    
    margin: 0.5rem;

`;
export default Segment;
