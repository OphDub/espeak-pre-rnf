import React, { Component } from 'react';
import { TouchableOpacity, StyleSheet, Text, View, TextInput } from 'react-native';
import AwesomeAlert from 'react-native-awesome-alerts';

type Props = {};
export default class Card extends Component {
  constructor() {
    super();
    this.state = {
      answer: '',
      showAlert: false,
    }
  }

  showAlert = () => {
    this.setState({ showAlert: true })
  }

  hideAlert =() => {
    this.setState({ showAlert: false })
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
      this.showAlert();
    }
    
    this.setState({ answer: '' });
  }

  // Think about changing the cancel button to just get the answer}
  render() {
    const {english, spanish, hint} = this.props.word;
    const { showAlert } = this.state;
    
    return (
      <View style={styles.container}>
        <Text style={styles.question}>How do you say...</Text>
        <View style={styles.engCard}>
        {
        this.props &&
          <Text style={styles.engText}>{ english.toUpperCase() }</Text>
        }
        </View>
        <Text style={styles.question}>in Spanish?</Text>
        <TextInput 
          placeholder='Type word in Spanish'
          onChangeText={(text) => this.handleChange(text)}
          value={this.state.answer}
          style={styles.spanInput}
        />
        <TouchableOpacity
          onPress={() => this.handleSubmit()}
          style={styles.submitBtn}
        >
          <Text style={styles.btnText}>SUBMIT</Text>
        </TouchableOpacity> 
        <AwesomeAlert
          show={showAlert}
          showProgress={false}
          title="Almost..."
          message="You've got this!"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={false}
          showConfirmButton={true}
          cancelText="No, cancel"
          confirmText="Try again!"
          confirmButtonColor="#3AAFb9"
          onCancelPressed={() => {
            this.hideAlert();
          }}
          onConfirmPressed={() => {
            this.hideAlert();
          }}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    color: '#FFF',
  },
  question: {
    fontSize: 20,
    fontFamily: 'Roboto',
  },
  engCard: {
    alignItems: 'center',
    borderColor: '#1E3888',
    borderRadius: 8,
    borderWidth: 2,
    backgroundColor: 'white',
    paddingVertical: 35,
    width: 220,
    marginVertical: 20,
    shadowColor: '#979797',
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  },
  engText: {
    color: '#1E3888',
    fontSize: 25,
  },
  spanInput: {
    fontSize: 20,
    margin: 15,
    borderBottomWidth: 2,
    borderColor: '#3AAFB9',
    padding: 5,
    width: 250,
  },
  submitBtn: {
    backgroundColor: '#3AAFB9',
    padding: 10,
    borderRadius: 8,
    marginTop: 10,
    shadowColor: '#979797',
    shadowOpacity: 0.7,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 4,
  }
})
