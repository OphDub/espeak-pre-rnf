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
import Settings from '../Settings/Settings';
import WordStackNav from '../WordStackNav/WordStackNav';
import { keys } from '../../keys';
import * as firebase from 'firebase';

const routeConfig = {
  Decks: {
    screen: WordStackNav
  },
  Settings: {
    screen: Settings
  },
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

  handleLogin = async (email, password) => {
    this.setState({loading: true})
    try {
      const user = await auth.signInWithEmailAndPassword(email, password);
      this.setState({ user: user.email, loading: false  })
      console.log('User signed in', user);
    } catch (error) {
      console.log(error);
    }
  }

  handleRegistration = async () => {
    this.setState({loading: true})
    try {
      const user = await auth.createUserWithEmailAndPassword(email, password);
      this.setState({ user: user.email, loading: false })
      console.log('User created', user);
    } catch (error) {
      console.log(error);
    }
  }

  showCondition = () => {
    if (this.state.user) {
      return <RootNav 
                screenProps={{userEmail: this.state.user}}
              />
    } else {
      return <Login handleLogin={this.handleLogin}
                    handleRegistration={this.handleRegistration}/>

    }
  }

  render() {
    return (   
      this.showCondition()
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
