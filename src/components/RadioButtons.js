/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import icons from '../constants/icons';
import { Responsive } from '../utils/layouts/Layout';
import RadioButtonRN from './RadioButtonRN/RadioButtonRN';

const RadioButtons = props => {
  const data = [
    {
      label: '',
    },
  ];
  return (
    <View>
      <View>
        <RadioButtonRN
            data={data}
            selectedBtn={e => console.log(e)}
            box={false}
            circleSize={12}
            style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            }}
            activeColor={'#3711A4'}
            deactiveColor={'#c4c4c4'}
            icon={<Image source={icons.checkedIcon} style={{width: Responsive.width(20), height: Responsive.height(20), resizeMode: 'contain'}} />}
        />
      </View>
    </View>
  );
};

export default RadioButtons;
