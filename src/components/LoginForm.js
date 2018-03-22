import React, { Component } from 'react';
import firebase from 'firebase';
import { Button, Card, CardSection, Input } from './common';


class LoginForm extends Component {
  state = { email: '', password: '' };

  onLoginButtonPress() {
    const { email, password } = this.state;
    firebase.auth().signInWithEmailAndPassword(email, password);
  }

  render() {
    return (
      <Card>
        <CardSection>
          <Input
            label='Email:'
            value={this.state.email}
            placeholder='user@gmail.com'
            onChangeText={email => {
                this.setState({ email });
            }}
          />
        </CardSection>

        <CardSection>
          <Input
            label='Password:'
            value={this.state.password}
            placeholder='your secret password'
            secureTextEntry={true}
            onChangeText={password => {
                this.setState({ password });
            }}
          />
        </CardSection>

        <CardSection>
          <Button onButtonPress={this.onLoginButtonPress.bind(this)}>
            Login
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
