import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {};
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
    }
  }
  
  handleChange = (text) => {
    this.setState({answer: text})
  }

  handleSubmit = () => {
    // if incorrect, send some sort of alert to user to try again
    const { answer } = this.state;
    const { onCorrectAnswer, word } = this.props;
    const { spanish } = word;
    if (answer.toLowerCase() === spanish) {
      onCorrectAnswer(word);
    } else {
      // send alert to user
      console.log('wrong answer');
    }
    
    this.setState({ answer: '' });
  }

  render() {
    const {english, spanish, hint} = this.props.word
    
    return (
      <View style={styles.container}>
        <Text>How do you say...</Text>
        {
        this.props &&
          <Text>{ english }</Text>
        }
        <Text>in Spanish?</Text>
        <TextInput 
          placeholder='Type word in Spanish'
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.answer}
        />
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.submitBtn}
        >
          <Text>SUBMIT</Text>
        </TouchableOpacity> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  },
  submitBtn: {
  }
})
