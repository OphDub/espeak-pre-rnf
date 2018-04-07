import React, { Component } from 'react';

import {
  Text,
  View,
  StyleSheet
} from 'react-native';

type Props = {};

export default class Home extends Component <Props> {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>HOME</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'purple',
  },
  welcome: {
    fontSize: 60,
    textAlign: 'center',
    color: 'white',
    margin: 60,
  },
});