import React, { useState } from 'react';
import styled  from 'styled-components';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { useDispatch } from 'react-redux';
import { FormActions } from '../redux/actions';
import { FORM_TYPES } from '../redux/types';
//  components
import { Segment, IconButton, DropableArea, EditIcons, SegmentHeader } from '../components';

//  util 
import { RenderFormFields } from '../util';
// icon 
import { GrSave } from 'react-icons/gr';

const Right = ({formFields, handleDropable, DeleteFormField, ClearFormFields}) => {
    const [demoClicked, setDemoClicked] = useState(false);
    const dispatch = useDispatch();
    const { CREATE_FORM } = FORM_TYPES;
    const viewDemo = () => {
        setDemoClicked(!demoClicked);
    }

    const handleSaveForm = () => {
        // dispatch(FormActions.create_form({
        //     type: CREATE_FORM,
        //     payload: formFields
        // }));

        dispatch({
            type: CREATE_FORM,
            payload: formFields
        });

        // clear form fields
        ClearFormFields();

        setDemoClicked(!demoClicked);
    }

    return (
        <>
        <RightWrapper>
            <DropableArea>
                <DragDropContext onDragEnd={handleDropable}>
                    <Droppable droppableId="personsList">
                        {
                            (provided) => (
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                    {
                                formFields.length >0 && formFields.map(({id, type, label}, index) =>{
                                    return (
                                    <Draggable key={id} draggableId={id} index={index}>
                                        {
                                            (provided) => (
                                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}> 
                                                <Segment>
                                                    <SegmentHeader>
                                                        <h4>{label}</h4>
                                                        <EditIcons id={id} DeleteFormField={DeleteFormField} />
                                                    </SegmentHeader>
                                                    <RenderFormFields 
                                                        id={id} 
                                                        type={type}
                                                        label={label}
                                                    />
                                                </Segment>
                                                </div>
                                            )
                                        }
                                        
                                    </Draggable>
                                    )
                                })
                                }
                                {provided.placeholder}
                                </div>
                            )
                            
                        }
                            
                    </Droppable>
                </DragDropContext>
            </DropableArea>
            <IconButton bg_color="#067AFE" onClick={handleSaveForm}>
                <GrSave fontSize="large" />
                <h3>Save</h3>
            </IconButton>
            {
                formFields.length > 0 && (
                    <IconButton bg_color="#067AFE" onClick={viewDemo}>
                        <GrSave fontSize="large" />
                        <h3>View Demo</h3>
                    </IconButton>
                )
            }
            

        </RightWrapper>
        {
            formFields.length > 0 && demoClicked===true && (
                <DemoWrapper>
                    <DropableArea>
                        <h2>Demo Form</h2>
                    {
                        demoClicked && (
                            formFields.map(({id, type, label}) =>{
                                return (
                                    <Segment key={id}>
                                        <SegmentHeader>
                                            <h4>{label}</h4>
                                        </SegmentHeader>
                                        <RenderFormFields 
                                            id={id} 
                                            type={type}
                                            label={label}
                                        />
                                    </Segment>
                                )
                            })
                        )
                    }
                    </DropableArea>
                </DemoWrapper>
            )
        }
        
        </>
    )
};
const RightWrapper = styled.div`
    display: flex;
    flex: 0.85;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
`;

const DemoWrapper = styled.div`
    display: flex;
    flex: 0.3;
    flex-direction: column;
    align-items: center;
    margin: 0 auto;
    padding: 2rem;
`;

export default Right;
