import React, {useEffect} from 'react';
import {StyleSheet, Image, View} from 'react-native';
import NavigationService from '../navigation/NavigationService';
import {storeData} from '../utils/AsyncStorage';
import {useNavigation, StackActions} from '@react-navigation/native';
import imageConstants from '../utils/ImageConstants';
import RNBootSplash from 'react-native-bootsplash';

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    setTimeout(() => {
      NavigationService.replace('VideoPlayer');
      RNBootSplash.hide();
    }, 500);
  }, []);

  return (
    <View style={styles.splashMainContainer}>
      <Image
        style={styles.splashImage}
        source={imageConstants.splashImage}
        resizeMode="contain"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  splashMainContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: 100,
    height: 100,
    alignSelf: 'center',
  },
});

export default Splash;
