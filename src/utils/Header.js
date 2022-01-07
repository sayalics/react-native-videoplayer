import React from 'react';
import {Text, View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome';
import stylesCommon from './StylesCommon.js';
import colors from '../utils/colors';
import NavigationService from '../navigation/NavigationService';
import Icon from 'react-native-vector-icons/MaterialIcons';

const styles = StyleSheet.create({
  headerSubContainer1: {
    flex: 0.2,
    flexDirection: 'row',
  },
  headerSubContainer2: {
    flex: 0.7,
  },
});

const Header = props => (
  <View
    style={[stylesCommon.headerContainer, {backgroundColor: colors.lightGray}]}>
    <View style={styles.headerSubContainer1}>
      <TouchableOpacity onPress={() => NavigationService.goBack(null)}>
        <Icon name="chevron-left" color={colors.shamrock} size={30} />
      </TouchableOpacity>
    </View>
    <View style={styles.headerSubContainer2}>
      <Text style={[stylesCommon.headerTextStyle, {color: colors.shamrock}]}>
        Dashboard
      </Text>
    </View>
  </View>
);

export default Header;
