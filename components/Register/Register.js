import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableOpacity,
} from 'react-native';

type Props = {};
export default class Register extends Component <Props>{
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      userName: '',
      password: '',
      confirmPassword: '',
    }
  }

  validateRegistration = () => {

  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Sign Up for an Account</Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}
          placeholder="email"/>
        <TextInput
          style={styles.input}
          value={this.state.userName}
          onChangeText={(userName) => this.setState({ userName })}
          placeholder="your name"/>
        <TextInput
          style={styles.input}
          value={this.state.password}
          onChangeText={(password) => this.setState({ password })}
          placeholder="password"/>
        <TextInput
          style={styles.input}
          value={this.state.confirmPassword}
          onChangeText={(confirmPassword) => this.setState({ confirmPassword })}
          placeholder="confirm password"/>
        <TouchableOpacity
          style={styles.registerBtn}>
          <Text>Register</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.toggleRegistration() }
          style={styles.loginBtn}>
            <Text>Have account? Login</Text>
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
  registerBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'teal',
    margin: 10,
    width: 150,
    height: 25,
  },
  loginBtn: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    width: 150,
    height: 25,
  }
})