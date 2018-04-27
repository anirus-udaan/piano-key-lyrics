/**
 * Piano Key Lyrics
 * Developed by Aniruddha Sahasrabuddhe
 */

import React, { Component } from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import Sheet from './component/Sheet.js'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      song: generateSong(keysWithSharps, []),
      interval: "1000",
      generateInterval: "5000"
    }

    setInterval(() => {
      if (this.state.song.length < 10) {
        this.setState({
          song: generateSong(keysWithSharps, this.state.song)
        })
      }
    }, parseInt(this.state.generateInterval, 10));
  };

  render() {
    return (
      <View style={styles.container}>
        <Sheet song={this.state.song} interval={this.state.interval}/>
      </View>
    );
  }
}

const keysWithSharps = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const keysWithoutSharps = ["A", "B", "C", "D", "E", "F", "G"];

function generateSong(vkeys, vsong) {
  var startIndex = vsong.length;
  for (var i = 0; i <= 10; i++) {
    var index = Math.floor((Math.random() * (vkeys.length - 1)) + 1);
    vsong[startIndex + i] = vkeys[index];
  }
  return vsong;
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'ivory'
  }
});
