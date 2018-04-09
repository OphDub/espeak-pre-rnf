import React, { Component } from 'react';
import { 
  View,
  StyleSheet,
  Text
 } from 'react-native';

 type Props = {};

export default class Progress extends Component<Props> {
  constructor(props) {
    super(props)
    this.state = {
      total: 100,
    }
  }

  styleBar = (currentStatus) => {
    let percentComplete = (currentStatus/this.state.total) * 100;
    return {
      width: `${percentComplete}%`,
      height: 16,
      backgroundColor: '#F5E663',
      borderRadius: 2,
      borderColor: '#F5E663',
      borderLeftWidth: 2
    }
  }

  render() {
    const { category } = this.props.stack;
    return (
      <View style={styles.container}>
        <View style={styles.pointsWrapper}>
          <View style={styles.progressWrapper}>
            <View style={this.styleBar(20)}></View>
          </View>
          <Text style={styles.points}>
            {this.state.total} pts
          </Text>
        </View>
        <Text style={styles.text}>
          {category}: {this.styleBar(20).width}
        </Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    justifyContent: 'center',
    height: 63,
    alignItems: 'center',
    overflow: 'hidden',
    backgroundColor: '#B47AEA'
  },
  progressWrapper: {
    width: 260,
    height: 20,
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 15,
    borderColor: '#F5E663'
  },
  pointsWrapper: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  text: {
    alignSelf: 'flex-start',
    marginTop: 5,
    marginLeft: 60,
    color: '#FFF'
  },
  points: {
    marginLeft: 15,
    fontSize: 20,
    color: '#FFF',
    alignSelf: 'flex-end'
  }
})