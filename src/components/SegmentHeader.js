import React from 'react';
import styled  from 'styled-components';
const SegmentHeader = ({children}) => {
    return (
        <Header>
            {children}
        </Header>
    )
}

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content:space-between;
    align-items: center;
    width: 100%;
    margin: 0;
    padding: 0;
`;
export default SegmentHeader;
