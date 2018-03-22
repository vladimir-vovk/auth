import React, { Component } from 'react';
import { View, Text } from 'react-native';
import firebase from 'firebase';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';


class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyB5YlemDeHecjSBWECz2C0L8IEhtX-v3gM",
      authDomain: "auth-8cb90.firebaseapp.com",
      databaseURL: "https://auth-8cb90.firebaseio.com",
      projectId: "auth-8cb90",
      storageBucket: "auth-8cb90.appspot.com",
      messagingSenderId: "634307691454",
    });
  }

  render() {
    return (
      <View>
        <Header>Authentication</Header>
        <LoginForm />
      </View>
    );
  }
}

export default App;
