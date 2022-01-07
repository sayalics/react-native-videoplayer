import {Permission, PermissionsAndroid, Platform} from 'react-native';
import Strings from './Strings';

export const hasPermission = async permissionName => {
  try {
    if (Platform.OS === 'android') {
      const permission = {
        title: Strings.permissionsRequired,
        message: Strings.permissionsRequiredText,
        options: [Strings.askMelater, Strings.cancel, Strings.ok],
      };
      const granted = await PermissionsAndroid.request(permissionName, {
        title: permission.title,
        message: permission.message,
        buttonNeutral: permission.options[0],
        buttonNegative: permission.options[1],
        buttonPositive: permission.options[2],
      });
      if (granted === PermissionsAndroid.RESULTS.GRANTED) {
        return true;
      } else {
        return false;
      }
    }
  } catch (err) {
    console.warn(err);
    return false;
  }
};
