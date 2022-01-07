import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Loader from '../utils/Loader';
import AppNavigatorContainer from '../navigation/AppNavigator';
import NetInfo from '@react-native-community/netinfo';
import Internet from '../utils/Internet';
import {useDispatch, useSelector} from 'react-redux';
import {isConnectionStateChanged} from '../redux/app/appActions';

function AppContainer(props) {
  const [isInternetWarningShow, setIsInternetWarningShow] = useState(false);

  useEffect(() => {
    unsubscribe();
  }, []);

  const dispatch = useDispatch();

  const unsubscribe = NetInfo.addEventListener(state => {
    dispatch(isConnectionStateChanged(state.isConnected));
  });

  const loading = useSelector(state => state.appReducer.loading);
  const isConnected = useSelector(state => state.appReducer.isConnected);

  const onTryAgainClick = () => {
    alert(isConnected);
  };

  return (
    <View style={{flex: 1}}>
      <AppNavigatorContainer />

      {loading ? <Loader /> : <View />}
      {!isConnected && isConnected !== undefined ? (
        <Internet
          onTryAgainClick={onTryAgainClick}
          isInternetWarningShow={isInternetWarningShow}
        />
      ) : (
        <View />
      )}
    </View>
  );
}

export default AppContainer;
