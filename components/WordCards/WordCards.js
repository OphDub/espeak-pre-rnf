import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';
import Card from '../Card/Card';

type Props = {};
export default class WordCards extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      stack: this.props.navigation.state.params,
      words: [],
    }
  }
  static navigationOptions = {
    title: 'translations'
  }

  componentDidMount = async () => {
    const { id } = this.state.stack;
    const promise = await fetch(`https://espeak-be.herokuapp.com/api/v1/words/${id}`)
    const jsonResponse = await promise.json()
    const words = jsonResponse.map((word, index) => {
      if (index === 0) {
        return {...word, isCurrent: true, isCompleted: false};
      }

      return {...word, isCurrent: false, isCompleted: false};
    })
    this.setState({words})
  }

  handlePress = () => {
    console.log('click')
  }

  handleCardLoad = () => {
    if (this.state.words.length === 0) {
      return <Text>No Cards to Render</Text>;
    }

    const currentCard = this.state.words.find(card => card.isCurrent === true);

    return <Card word={currentCard} />
  }

  render() {
    const { params } = this.props.navigation.state;
    const currentCard = this.state.words.find(card => card.isCurrent === true) || null; 
    return (
      <View style={styles.container}>
        <Text 
        style={styles.item}
        onPress={() => this.handlePress()}
        >
          {params.category}
        </Text>
        { this.handleCardLoad() }
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
