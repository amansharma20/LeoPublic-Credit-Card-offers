/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import React from 'react';
import { View, StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { SIZES } from '../../constants/theme';
import CommonHeaderWithBackButton from '../../components/headers/CommonHeaderWithBackButton';
import { images } from '../../constants';

export default function NewToCreditCards() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <CommonHeaderWithBackButton children="New to Credit Cards?" />
      <View style={styles.body}>
        <View>
          <Text style={styles.headerText}>
            Let's dwell deeper into the Credit Card Universe
          </Text>
        </View>
        <View>
          <View style={styles.rowContainer}>
            <TouchableOpacity onPress={() => navigation.navigate('Educate')}>
              <Image source={images.educate} style={styles.imageContainer} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.educate} style={styles.imageContainer} />
            </TouchableOpacity>
          </View>
          <View style={styles.rowContainer}>
            <TouchableOpacity>
              <Image source={images.educate} style={styles.imageContainer} />
            </TouchableOpacity>
            <TouchableOpacity>
              <Image source={images.educate} style={styles.imageContainer} />
            </TouchableOpacity>
          </View>
        </View>
        <TouchableOpacity style={styles.skipButtonContainer}>
          <Text style={styles.skipButtonText}>
            Skip
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#4d2d8f',
  },
  headerText: { fontSize: 22, color: '#797E96', 
  fontFamily:Platform.select({
    ios:'Exo2-SemiBold',
    android:'Exo2SemiBold'
  }),
},
  body: { backgroundColor: '#ffffff', borderTopLeftRadius: 32, borderTopRightRadius: 32, flex: 1, padding: SIZES.padding },
  rowContainer: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', width: '100%', paddingTop: '10%' },
  imageContainer: { width: 145, height: 185, marginHorizontal: 10 },
  skipButtonContainer: { justifyContent: 'flex-end', bottom: '8%', position: 'absolute', width: '100%', flexDirection: 'row' },
  skipButtonText: { fontSize: 16, color: '#4D2D8F', 
  fontFamily:Platform.select({
    ios:'Exo2-Bold',
    android:'Exo2Bold'
  }),
},
});
