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
export default class Decks extends Component<Props> {
  static navigationOptions = {
    title: 'Decks',
  };

  constructor() {
    super()
    this.state={
      //Store Diff decks here
      decks: [
        {
          "category": "basics",
          "words": ["HI"]
        },
        {
          "category": "food",
          "words": ["Hotdog"]

        }
      ]
    }
  }

  navigateToCards(deck) {
    console.log(deck)
    this.props.navigation.navigate('WordCards', deck)
  }

  render() {
    return (
      <View style={styles.container}>
      <Text style={styles.item}>Decks here</Text>
        <FlatList
          data={this.state.decks}
          renderItem={({ item }) => (
            <Text 
              onPress={() => this.navigateToCards(item)}
              style={styles.item} >
              {item.category}
            </Text>
            )
          }
        />
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
  item: {
    fontSize: 40,
    color: "white",
    textAlign: 'center',
    margin: 10,
  },
});