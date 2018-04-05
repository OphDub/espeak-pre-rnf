import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity
} from 'react-native';

type Props = {};
export default class Login extends Component <Props> {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleLogin = () => {

  }

  handleRegistration = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>
          Welcome! Sign In:
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="email"/>
        <TextInput
          style={styles.input}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}
          placeholder="password"/>
        <TouchableOpacity
          onPress={this.handleLogin}
          style={styles.loginBtn}>
            <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.handleRegistration}
          style={styles.registerBtn}>
            <Text>Register</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  input: {
    backgroundColor: 'grey',
    margin: 10,
    width: 150,
    height: 25,
  },
  loginBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
    margin: 10,
    width: 150,
    height: 25,
  },
  registerBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    margin: 10,
    width: 150,
    height: 25,
  }
});