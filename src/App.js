import React, { Component } from 'react';
import { View, Text, Dimensions } from 'react-native';
import firebase from 'firebase';
import { Header, Spinner, Card, CardSection } from './components/common';
import { LoginForm, LogoutForm } from './components';


class App extends Component {
  state = { loggedIn: false, starting: true };

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB5YlemDeHecjSBWECz2C0L8IEhtX-v3gM",
      authDomain: "auth-8cb90.firebaseapp.com",
      databaseURL: "https://auth-8cb90.firebaseio.com",
      projectId: "auth-8cb90",
      storageBucket: "auth-8cb90.appspot.com",
      messagingSenderId: "634307691454",
    });

    firebase.auth().onAuthStateChanged((user) => {
      this.setState({
        loggedIn: user ? true : false,
        starting: false
      });
    });
  }

  renderContent() {
    if (this.state.starting) {
      return (
        <View style={{
          position: 'absolute', top: 0, bottom: 0, left: 0, right: 0,
          height: Dimensions.get('window').height,
        }}>
          <Spinner />
        </View>
      );

    } else {
      if (this.state.loggedIn) {
        return <LogoutForm />;

      } else {
        return <LoginForm />;
      }
    }
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        {this.renderContent()}
      </View>
    );
  }
}

export default App;
