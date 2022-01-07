import Splash from '../screens/Splash';
import Dashboard from '../screens/Dashboard';
import React from 'react';
import {navigationRef} from '../navigation/NavigationService';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {useSelector} from 'react-redux';
import Details from '../screens/Details';
import TextEditor from '../reusableComponents/TextEditor';
import {CustomDarkTheme, CustomDefaultTheme} from '../theme/Theme';
import VideoPlayer from '../reusableComponents/VideoPlayer';

const Stack = createStackNavigator();

function AppNavigator() {
  let currentTheme = useSelector(state => state.themeReducer.theme);
  let theme = currentTheme ? CustomDefaultTheme : CustomDarkTheme;

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Splash"
          component={Splash}
        />
        <Stack.Screen options={{headerShown: false}} name="Dashboard" component={Dashboard} />
        <Stack.Screen options={{headerShown: false}} name="Details" component={Details} />
        <Stack.Screen options={{headerShown: false}} name="TextEditor" component={TextEditor} />
        <Stack.Screen options={{headerShown: false}} name="VideoPlayer" component={VideoPlayer} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}
export default AppNavigator;
