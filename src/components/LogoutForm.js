import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Card, CardSection, Button, Spinner } from './common';


class LogoutForm extends Component {
  state = { loading: false }

  onLogoutButtonPress() {
    this.setState({ loading: true });

    firebase.auth().signOut()
      .then(() => {
        this.setState({ loading: false });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  renderButton() {
    if (this.state.loading) {
      return <Spinner size='small' />;

    } else {
      return (
        <Button onPress={this.onLogoutButtonPress.bind(this)}>
          Logout
        </Button>
      );
    }
  }

  render () {
    return (
      <Card>
        <CardSection>
          {this.renderButton()}
        </CardSection>
      </Card>
    );
  }
}

export { LogoutForm };
