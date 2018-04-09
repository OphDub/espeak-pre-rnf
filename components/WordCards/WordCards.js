import React, { Component } from 'react';
import {
  Button,
  FlatList,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
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

  handleCardLoad = () => {
    if (this.state.words.length === 0) {
      return <Text>No Cards to Render</Text>;
    }

    const currentCard = this.state.words.find(card => card.isCurrent === true);
    if (!currentCard) {
      return (
        <View>
          <Text>Good job!</Text>
          <TouchableOpacity
            onPress={() => this.props.navigation.navigate('Decks')}
            style={styles.homeBtn}
          >
            <Text>BACK TO MY DECKS</Text>
          </TouchableOpacity>
        </View>
      )
    }
    return <Card 
      word={currentCard} 
      onCorrectAnswer={this.handleCorrectAnswer}
    />
  }

  handleCorrectAnswer = (word) => {
    const wordIndex = this.state.words.indexOf(word);
    const words = this.state.words.map((word, index) => {
      if (index === wordIndex) {
        return {...word, isCurrent: false}
      } else if (index === (wordIndex + 1)) {
        return {...word, isCurrent: true}
      }

      return word;
    });

    this.setState({ words });
  }

  render() {
    const { params } = this.props.navigation.state;

    return (
      <View style={styles.container}>
        { this.handleCardLoad() }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'stretch',
  },
  homeBtn: {
  },
});
