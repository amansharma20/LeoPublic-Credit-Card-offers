/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {useNavigation} from '@react-navigation/native';

export default function RecommendedScreen() {
  const navigation = useNavigation();
//   const renderItem = ({ item }) => (
//     <Offers title={item.title} subtitle={item.subtitle} image={item.image} />
//   );

  return (
    <View style={styles.container}>
      <View style={styles.body}>
        <Text>
            RecommendedScreen
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  body: {
      flex: 1
  }
});
