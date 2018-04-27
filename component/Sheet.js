import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class Sheet extends Component{
  constructor(props) {
    super(props);
    this.state = {
      song: this.props.song,
      interval: this.props.interval,
    };

    setInterval(() => {
      if (this.state.song.length > 0) {
        this.state.song.shift();
        this.setState({
          state: this.state.song
        });
    }
    }, parseInt(this.state.interval, 10));
  };

  render() {
    var displayChords = [];
    var j = 0;
    for (var i = 0; i <= 6; i++) {
      var chord = this.state.song[i];
      if (chord === undefined) {
        displayChords.push(<Text key={j++} style={styles.current}></Text>);
        continue;
      }

      if (chord.length === 2) {
        if (i === 0) {
          displayChords.push(<Text key={j++} style={styles.current}>{chord.charAt(0)}</Text>);
          displayChords.push(<Text key={j++} style={styles.currentsup}>{chord.charAt(1)}</Text>);
        } else {
          displayChords.push(<Text key={j++} style={styles.future}>{chord.charAt(0)}</Text>);
          displayChords.push(<Text key={j++} style={styles.futuresup}>{chord.charAt(1)}</Text>);
        }
      } else {
        if (i === 0) {
          displayChords.push(<Text key={j++} style={styles.current}>{chord}</Text>);
        } else {
          displayChords.push(<Text key={j++} style={styles.future}>{chord}</Text>);
        }
      }
    }

    return(
      <View className="sheet" style={styles.sheet}>
        {displayChords}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  sheet: {
    flexDirection: 'row',
    height: '100%',
    marginLeft: 5,
  },

  current: {
    fontSize: 300,
    color: 'black',
  },

  currentsup: {
    fontSize: 150,
    lineHeight: 200,
    color: 'black'
  },

  future: {
    fontSize: 300,
    color: 'lightgray'
  },

  futuresup: {
    fontSize: 150,
    lineHeight: 200,
    color: 'lightgray'
  }
})