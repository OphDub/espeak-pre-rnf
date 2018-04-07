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
    //console.log(this.state.stack);
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
    console.log(words);
  }

  handlePress = () => {
    console.log('click')
  }

  render() {
    const { params } = this.props.navigation.state;
    const renderedCard = this.state.words.find(card => card.isCurrent === true) || {english: 'not rendered it'};
    console.log(renderedCard);
    //console.log (params);
    return (
      <View style={styles.container}>
      {
        //Rigth now I'm just passing the category to the text but I imagine here we'd want to display the words associated with that category and how to guess for them and stuff
      }
        <Text 
        style={styles.item}
        onPress={() => this.handlePress()}
        >
          {params.category}
          {renderedCard.english}
        </Text>
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
