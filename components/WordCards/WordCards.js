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
    console.log(params);
    return (
      <View style={styles.container}>
      {
        //Rigth now I'm just passing the category to the text but I imagine here we'd want to display the words associated with that category and how to guess for them and stuff
      }
        <Text style={styles.item}>{params.category}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  },
  item: {
    color: "purple",
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});