import React from 'react';
import styled from 'styled-components';

const IconButton = ({bg_color="#067AFE",border="solid",width="auto", onClick,children}) => {
    return (
        <Button bg_color={bg_color} border={border} width={width} onClick={onClick}>
            {children}
        </Button>
    )
};

const Button = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: ${(props) => props.bg_color};
    margin-top:0.5rem;
    margin-bottom: 0.5rem;
    padding: 0.1rem 1rem;
    border-radius: 2rem;
    border: 2px ${props => props.border} white ;
    color: ${props => props.bg_color === "#067AFE" ? "white" : "#067AFE"};
    width: ${props => props.width};
    cursor: pointer;
    * {
        margin-right: 0.5rem;
    };
    * input[type="file"] {
        display:none;
    }
`;

export default IconButton;
