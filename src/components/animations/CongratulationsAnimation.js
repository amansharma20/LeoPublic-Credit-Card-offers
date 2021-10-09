/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Animated, Easing} from 'react-native';
import LottieView from 'lottie-react-native';

export default class CongratulationsAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: new Animated.Value(0),
    };
  }

  componentDidMount() {
    Animated.timing(this.state.progress, {
      toValue: 1,
      duration: 2000,
      easing: Easing.linear,
      useNativeDriver:true
    }).start();
  }

  render() {
    return (
      <View style={styles.container}>
        <LottieView
          source={require('../../assets/lotties/congratulations.json')}
          style={{width: '100%', height: 160, marginBottom: 60}}
          progress={this.state.progress}

        />
      </View>
    );
  }
  }


const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
