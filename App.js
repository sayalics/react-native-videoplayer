import React from 'react';
import AppContainer from './src/containers/AppContainer';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
const App = () => {
  return (
    <Provider store={configureStore()}>
      <AppContainer />
    </Provider>
  );
};
export default App;
