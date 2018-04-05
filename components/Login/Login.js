import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
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
      <View>
        <Text>
          Login Form
        </Text>
        <TextInput
          style={styles.input}
          value={this.state.email}
          onChangeText={(email) => this.setState({ email })}/>
        <TextInput
          style={styles.input}
          value={this.state.password}
          secureTextEntry={true}
          onChangeText={(password) => this.setState({ password })}/>
        <Button
          onPress={this.handleLogin}
          overrides={{ backgroundColor: 'purple' }}
          title="Login"/>
        <Button
          onPress={this.handleRegistration}
          overrides={{ backgroundColor: 'teal' }}
          title="Register"/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: 'magenta',
  },
  registerBtn: {
    backgroundColor: 'yellow',
  }
});