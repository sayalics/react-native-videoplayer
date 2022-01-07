import {useTheme} from '@react-navigation/native';
import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from '../reusableComponents/Button';
import Strings from '../utils/Strings';
import Config from 'react-native-config';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const Details = props => {
  let item = props.route.params.item;
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{color: colors.text}}> {item.name} </Text>
      <Text>{Config.API_KEY}</Text>
      <Button buttonName={Strings.clickMe} colors={colors} />
    </View>
  );
};
export default Details;
