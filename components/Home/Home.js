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

  componentDidMount() {
  }

  render() {
    return (
      <View>
        <Text>HOME</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({

})