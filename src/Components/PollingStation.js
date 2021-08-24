import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PollingStation = props => {
    const [firstCandidateURL, setFirstCandidateURL] = useState('https://img.icons8.com/fluency/48/000000/loading.png');
    const [secondCandidateURL, setSecondCandidateURL] = useState('https://img.icons8.com/fluency/48/000000/loading.png');
    const [showResult, setShowResult] = useState(false);

    return (
        <Container>
            <Row>
                <Col className='justify-content-center d-flex'>
                    <Container>
                        <Row style={{ marginTop: '5vh', backgroundColor: '#c4c4c4'}}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '3vw'
                                }}
                            >
                                <img style={{ height: '35vh', width: '20vw' }} src={firstCandidateURL}/>
                            </div>
                        </Row>
                        {showResult ? <Row
                            className='justify-content-center d-flex'
                            style={{
                                marginTop: '5vh'
                            }}
                            
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '8vw',
                                padding: '10px',
                                backgroundColor: '#c4c4c4'
                            }}
                            >
                                3
                            </div>
                        </Row> : null}
                        <Row style={{ marginTop: '2vh' }} className='justify-content-center d-flex'>
                            <Button> Vote </Button>
                        </Row>
                    </Container>
                </Col>
                <Col className='justify-content-center d-flex align-items-center'>
                    <div style={{
                        display: 'flex',
                        justifyContent: 'center',
                        backgroundColor: '#c4c4c4',
                        height: '20vh',
                        alignItems: 'center',
                        padding: '2vw',
                        textAlign: 'center'
                        }}
                    >
                        Who would when in smash?
                    </div>
                </Col>
                <Col className='justify-content-center d-flex'>
                    <Container>
                        <Row style={{ marginTop: '5vh', backgroundColor: '#c4c4c4'}}>
                            <div
                                style={{
                                    display: 'flex',
                                    justifyContent: 'center',
                                    padding: '3vw'
                                }}
                            >
                                <img style={{ height: '35vh', width: '20vw' }} src={secondCandidateURL}/>
                            </div>
                        </Row>
                        {showResult ? <Row
                            className='justify-content-center d-flex'
                            style={{
                                marginTop: '5vh'
                            }}
                            
                        >
                            <div style={{
                                display: 'flex',
                                justifyContent: 'center',
                                fontSize: '8vw',
                                padding: '10px',
                                backgroundColor: '#c4c4c4'
                            }}
                            >
                                3
                            </div>
                        </Row> : null}
                        <Row style={{ marginTop: '2vh' }} className='justify-content-center d-flex'>
                            <Button> Vote </Button>
                        </Row>
                    </Container>
                </Col>
 
            </Row>
        </Container>
    );
};

export default PollingStation;
