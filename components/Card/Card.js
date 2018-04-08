import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';

type Props = {};
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      english: '',
      spanish: '',
      hint: ''
    }
  }

  componentDidUpdate(nextProps) {
    if (this.props !== nextProps) {
      console.log('props have changed!')
    }
  }
  
  handleChange = (text) => {
    console.log('change!');
    this.setState({answer: text})
  }

  render() {
console.log('card props', this.props.word);
    let english;
    let spanish;
    let hint;
    if (!this.props) {
      console.log('no props');
      english = null;
      spanish = null;
      hint = null;
    } else {
      english = this.props.word.english;
      spanish = this.props.word.spanish;
      hint = this.props.word.hint;
    }
    console.log('english', english);
    return (
      <View style={styles.container}>
        <Text>How do you say...</Text>
        <Text>{ english }</Text>
        <Text>in Spanish?</Text>
        <TextInput 
          placeholder='Type word in Spanish'
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.answer}
        />
        <TouchableOpacity>
          <Text>SUBMIT</Text>
        </TouchableOpacity> 
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
})
