import React, { Component } from 'react';
import { PageHeader, Col, FormGroup, Form, FormControl, Button } from 'react-bootstrap';


import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PageHeader>App Login Page</PageHeader>
          <Form horizontal>
            <FormGroup>
              <Col md={4} /><Col md={4}><FormControl type="email" placeholder="Email" /></Col><Col md={4} />
            </FormGroup>
            <FormGroup>
              <Col md={4} /><Col md={4}><FormControl type="password" placeholder="Password" /></Col><Col md={4} />
            </FormGroup>
            <FormGroup>
              <Col md={4} /><Col md={4}><Button type="submit" bsStyle="primary" block>login</Button></Col><Col md={4} />
            </FormGroup>
          </Form>
      </div>
    );
  }
}

export default App;
