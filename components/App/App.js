import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';
import { TabNavigator } from 'react-navigation';

import Login from '../Login/Login';
import Home from '../Home/Home';
import WordStackNav from '../WordStackNav/WordStackNav';
//import Decks from '../Decks/Decks';
import { keys } from '../../keys';
import * as firebase from 'firebase';

const routeConfig = {
  Home: {
    screen: Home
  },
  Decks: {
    screen: WordStackNav
  }
  // Decks: {
  //   screen: Decks
  // }
}

const navConfig = {
  tabBarOptions: {
    labelStyle: {
      fontSize: 38,
    }
  }
}

const RootNav = TabNavigator(routeConfig, navConfig);


const config = {
  apiKey: keys.firebase,
  authDomain: "espeak-53f28.firebaseapp.com",
  databaseURL: "https://espeak-53f28.firebaseio.com",
  projectId: "espeak-53f28",
  storageBucket: "espeak-53f28.appspot.com",
  messagingSenderId: "535165125077"
};

firebase.initializeApp(config);

const auth = firebase.auth();


type Props = {};
export default class App extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      user: null,
      loading: false,
    }
  }

  componentDidMount() {

  }

  handleLogin = async (email, password) => {
    //const { email, password } = this.state;
    this.setState({loading: true})
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      this.setState({ user: user.email, loading: false  })
      console.log('User signed in', user);
    } catch (error) {
      console.log(error);
    }
  }


  render() {
    return (   
      <RootNav />
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
