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
  
  handleChange = (text) => {
    this.setState({answer: text})
  }

  componentDidMount = () => {
  }

  render() {
    var {english, spanish, hint} = this.props.word
    
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
