import React, { Component } from 'react';
import { PageHeader, Col, FormGroup, Form, FormControl, Button } from 'react-bootstrap';


import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { email: '', password: '' };

    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleEmailChange(event) {
    this.setState({ email: event.target.value })
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value })
  }

  handleSubmit(event) {
    console.log("login button clicked with email: " + this.state.email + " and password: " + this.state.password);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <PageHeader>App Login Page</PageHeader>
          <Form horizontal onSubmit={this.handleSubmit} >
            <FormGroup>
              <Col md={4} /><Col md={4}><FormControl type="email" placeholder="Email" value={this.state.email} onChange={this.handleEmailChange} /></Col><Col md={4} />
            </FormGroup>
            <FormGroup>
              <Col md={4} /><Col md={4}><FormControl type="password" placeholder="Password" value={this.state.password} onChange={this.handlePasswordChange} /></Col><Col md={4} />
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
