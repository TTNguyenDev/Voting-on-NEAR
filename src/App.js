import 'regenerator-runtime/runtime' 
import React from 'react' 
import { login, logout } from './utils' 
import './global.css' 
import { Container,
    Navbar,
    Nav,
    NavDropdown
} from 'react-bootstrap';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';

import Home from './Components/Home';
import PollingStation from './Components/PollingStation';
import NewPoll from './Components/NewPoll';

import BlockVoteLogo from './assets/vote.png';

import getConfig from './config';
const { networkId } = getConfig(process.env.NODE_ENV || 'development'); 

export default function App() {

    const changeCandidateFunction = async (prompt) => {
        console.log(prompt);
        let namePair = await window.contract.getCandidatePair({ _prompt: prompt });
        localStorage.setItem('Candidate1', namePair[0]);
        localStorage.setItem('Candidate2', namePair[1]);
        localStorage.setItem('prompt', prompt);
        window.location.replace(window.location.href + "PollingStation");

    }

    return (
        <Router>
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
              <Container>
                <Navbar.Brand href='/'>
                    <img width='30' height='30' src={BlockVoteLogo}/>
                </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav className="mx-auto"></Nav>
                <Nav>
                  <Nav.Link href='/newPoll'>New Poll</Nav.Link>
                    <Nav.Link onClick={window.accountId === '' ? login : logout}>{window.accountId === '' ? 'Login' : window.accountId}</Nav.Link>
                </Nav>
              </Navbar.Collapse>
              </Container>
            </Navbar>
            <Switch>
                <Route exact path='/'>
                    <Home changeCandidateFunction={changeCandidateFunction}/>
                </Route>   
                <Route exact path='/PollingStation'>
                    <PollingStation/>
                </Route>    
                <Route exact path='/NewPoll'>
                    <NewPoll/>
                </Route>
            </Switch>
        </Router>
    );
}

