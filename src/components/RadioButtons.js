/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, View} from 'react-native';
import icons from '../constants/icons';
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
            // initial={1}
            box={false}
            // boxStyle={{
            // width: '100%',
            // height: 40,
            // borderRadius: 50,
            // paddingVertical: 10,
            // }}
            circleSize={12}
            style={{
            alignItems: 'center',
            alignContent: 'center',
            justifyContent: 'center',
            }}
            activeColor={'#3711A4'}
            deactiveColor={'#c4c4c4'}
            icon={<Image source={icons.checkedIcon} />}
        />
      </View>
    </View>
  );
};

export default RadioButtons;
