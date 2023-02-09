import { StatusBar } from 'expo-status-bar';
import React, { useEffect } from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './src/store';

//Navigation
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/navigation/Router';

export default function App() {

  useEffect(() => {
    console.log('teste')
  },
    []);
  //   const teste = useSelector((state) => state);
  return (
    <>
      <StatusBar style="dark" />
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <NavigationContainer>
            <Router />
          </NavigationContainer>
        </PersistGate>
      </Provider>
    </>

  );
}
