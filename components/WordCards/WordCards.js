import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

type Props = {};
export default class WordCards extends Component<Props> {
  static navigationOptions = {
    title: 'Translation'
  }

  render() {
    const { params } = this.props.navigation.state;
    console.log("Im here", params);
    return (
      <View style={styles.container}>
        <Text style={styles.item}>{params.word}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'yellow',
  },
  item: {
    color: "purple",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});