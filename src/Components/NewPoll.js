import React, {useRef, useState} from 'react';
import { Container, Form, Button } from 'react-bootstrap';

const NewPoll = props => {
    const candidateName1 = useRef();
    const candidateImageURL1 = useRef();

    const candidateName2 = useRef();
    const candidateImageURL2 = useRef();

    const promptRef = useRef();

    const sendToBlockchain = async () => {
        await window.contract.addUrl({
            _name: candidateName1.current.value,
            _url: candidateImageURL1.current.value 
        });

        await window.contract.addUrl({
            _name: candidateName2.current.value,
            _url: candidateImageURL2.current.value 
        });

        await window.contract.addCandidatePair({
            _prompt: promptRef.current.value,
            _firstName: candidateName1.current.value,
            _secondName: candidateName2.current.value
        });

        await window.contract.addToPromptArray({
            _prompt: promptRef.current.value
        });
    }

    return (
        <Container style={{ marginTop: '10px' }}>
            <Form>
                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 1 Name</Form.Label> 
                    <Form.Control ref={candidateName1} placeholder='Enter Candidate Name'></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 1 Image URL</Form.Label>
                    <Form.Control ref={candidateImageURL1} placeholder='Enter Image URL'></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 2 Name</Form.Label> 
                    <Form.Control ref={candidateName2} placeholder='Enter Candidate Name'></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Candidate 2 Image URL</Form.Label>
                    <Form.Control ref={candidateImageURL2} placeholder='Enter Image URL'></Form.Control>
                </Form.Group>

                <Form.Group className='mb-3'>
                    <Form.Label>Prompt</Form.Label>
                    <Form.Control ref={promptRef} placeholder='Add prompt'></Form.Control>
                </Form.Group>    

                <Button onClick={sendToBlockchain} variant='primary'>Submit</Button>
            </Form>

        </Container>
    );
    
};

export default NewPoll;
