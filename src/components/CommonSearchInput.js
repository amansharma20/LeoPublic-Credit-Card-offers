/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {StyleSheet, View, TextInput, TouchableOpacity,Image} from 'react-native';
import React, {useRef} from 'react';
import {Responsive} from '../utils/layouts/Layout';
import { icons, SIZES } from '../constants/';

function CommonSearchInput({...rest}) {
  const {
    leftIcon,
    rightIcon,
    onLeftIconClick,
    onRightIconClick,
    style,
    inputStyle,
    value,
  } = {...rest};
  // const displayLeftIcon = leftIcon !== undefined ? true : false;
  const inputRef = useRef(null);
  const displayRightIcon = () => {
    if (value == '') {
      return false;
    } else {
      return true;
    }
  };
  const displayLeftIcon = () => {
    if (value == '') {
      return false;
    } else {
      return true;
    }
  };
  return (
    <View style={[styles.body, style]}>
      <View style={[styles.inputContainer]}>
      {displayLeftIcon() && (
          <TouchableOpacity style={styles.leftIcon} onPress={onRightIconClick}>
            {leftIcon}
          </TouchableOpacity>
        )}
        <TextInput
          {...rest}
          style={[styles.input, inputStyle]}
          ref={inputRef}
        />
        {displayRightIcon() && (
          <TouchableOpacity style={styles.rightIcon} onPress={onRightIconClick}>
            {rightIcon}
          </TouchableOpacity>
        )}

      </View>

    </View>
  );
}
export default CommonSearchInput;
const styles = StyleSheet.create({
  body: {
    height: Responsive.height(0),
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputContainer: {
    height: Responsive.height(40),
    width: '88%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: Responsive.width(4),
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: {
      height: 3,
      width: 3,
    },
    backgroundColor: '#f1f1f1',
    paddingHorizontal: 8,
  },
  rightIcon: {
    height: Responsive.height(24),
    width: Responsive.width(24),
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    fontSize: Responsive.font(14),
    // fontFamily: 'Exo2Medium',
    paddingLeft: 10,
    color: '#000',
    marginLeft: 6,
  },
  leftIcon: {
    backgroundColor: '#f1f1f1',
  },
});
