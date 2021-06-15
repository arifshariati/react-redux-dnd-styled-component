import React from 'react';
import styled  from 'styled-components';

//  components
import { Segment, IconButton } from '../components';

// icons 
import { AiOutlineDrag } from 'react-icons/ai';

const Left = ({AddFormField, list}) => {
    
    return (
        <LeftWrapper>

            <Segment>
                <h4 style={{color:'white'}}>Form Components</h4>
                <IconButton border="dashed" width="100%" onClick={() => AddFormField(list[0])}>
                    <AiOutlineDrag fontSize="large" />
                    <h4>Input</h4>
                </IconButton>

                <IconButton border="dashed" width="100%">
                    <AiOutlineDrag fontSize="large" />
                    <h4>Checkbox</h4>
                </IconButton>

                <IconButton border="dashed" width="100%" onClick={() => AddFormField(list[3])}>
                    <AiOutlineDrag fontSize="large" />
                    <h4>File Uploaded</h4>
                </IconButton>

                <IconButton border="dashed" width="100%" onClick={() => AddFormField(list[1])}>
                    <AiOutlineDrag fontSize="large" />
                    <h4>Text</h4>
                </IconButton>

                <IconButton border="dashed" width="100%" onClick={() => AddFormField(list[2])}>
                    <AiOutlineDrag fontSize="large" />
                    <h4>Devider</h4>
                </IconButton>
            </Segment>

        </LeftWrapper>
    )
}

const LeftWrapper = styled.div`
    
    flex: 0.2;
    margin: 0;
    padding: 0rem 1.6rem;
    background-color: #067AFE;
`;
export default Left;
