import React from 'react';
import {StyleSheet, Pressable, Text} from 'react-native';
import {normalize} from '../utils/Metrics';

const styles = StyleSheet.create({
  btnContainer: {
    marginTop: normalize(20),
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: normalize(5),
  },
  btnText: {
    textAlign: 'center',
    padding: normalize(10),
  },
});

const Button = ({onPress, disabled, buttonName, colors}) => {
  return (
    <Pressable
      onPress={onPress}
      disabled={disabled}
      style={[styles.btnContainer, {backgroundColor: colors.button}]}>
      <Text style={[styles.btnText, {color: colors.text}]}>{buttonName}</Text>
    </Pressable>
  );
};

export default Button;
