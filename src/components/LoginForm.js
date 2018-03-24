import React, { Component } from 'react';
import { Text } from 'react-native';
import firebase from 'firebase';
import { Button, Card, CardSection, Input, Spinner } from './common';


class LoginForm extends Component {
  state = { email: '', password: '', error: '', loading: false };

  onLoginButtonPress() {
    console.log('on button press');
    const { email, password } = this.state;

    // clear error message
    this.setState({ error: '', loading: true });

    firebase.auth().signInWithEmailAndPassword(email, password)
      .then(this.onLoginSuccess.bind(this))
      .catch(() => {
        // authentication failed, try to register new user
        firebase.auth().createUserWithEmailAndPassword(email, password)
          .then(this.onLoginSuccess.bind(this))
          .catch(this.onLoginFail.bind(this));
      });
  }

  onLoginFail() {
    this.setState({ error: 'Authentication failed!', loading: false })
  }

  onLoginSuccess () {
    this.setState({
      email: '',
      password: '',
      loading: false,
      error: '',
    });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />
    }

    return (
      <Button onPress={this.onLoginButtonPress.bind(this)}>
        Login
      </Button>
    );
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

        <Text style={styles.error}>
          {this.state.error}
        </Text>

        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

const styles = {
  error: {
    fontSize: 20,
    alignSelf: 'center',
    color: 'red',
  },
};

export { LoginForm };
