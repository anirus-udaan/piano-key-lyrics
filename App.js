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
      interlude: "1000", //generateInterlude(intervals, []),
      generateInterval: "5000"
    }

    setInterval(() => {
      if (this.state.song.length < 10) {
        this.setState({
          song: generateSong(keysWithSharps, this.state.song),
          interlude: generateInterlude(intervals, this.state.interlude)
        })
      }
    }, parseInt(this.state.generateInterval, 10));
  };

  render() {
    return (
      <View style={styles.container}>
        <Sheet song={this.state.song} interval={this.state.interlude}/>
      </View>
    );
  }
}

const keysWithSharps = ["A", "A#", "B", "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#"];
const keysWithoutSharps = ["A", "B", "C", "D", "E", "F", "G"];
const intervals = ["100", "5000"]

function generateSong(vKeys, vSong) {
  var startIndex = vSong.length;
  for (var i = 0; i <= 10; i++) {
    var index = Math.floor((Math.random() * vKeys.length));
    vSong[startIndex + i] = vKeys[index];
  }
  console.log("song=" +vSong);
  return vSong;
};

function generateInterlude(vInterval, vInterlude) {
  var startIndex = vInterlude.length;
  for (var i = 0; i <= 10; i++) {
    var index = Math.floor((Math.random() * vInterval.length));
    vInterlude[startIndex + i] = vInterval[index];
  }
  console.log("interlude=" + vInterlude);
  return vInterlude;
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
    backgroundColor: 'ivory'
  }
});
