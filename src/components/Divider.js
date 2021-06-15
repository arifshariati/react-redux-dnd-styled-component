import React from 'react';
import styled  from 'styled-components';

const Divider = () => {
    return (
        <Line />
    )
}

const Line = styled.hr`
    color: #f9f9f9;
    width: 100%;
    margin: 1rem 0rem;
`;
export default Divider;
