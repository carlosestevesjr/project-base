import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Internals
import LoggedStack from '../navigation/LoggedStack';
import { useSelector } from 'react-redux';
// import UnloggedStack  from './UnloggedStack';

const Stack = createNativeStackNavigator();

const Router = () => {
  const authentication = useSelector((state) => (state.authentication));

  console.log('----')
  console.log(authentication.data)
  console.log('----')
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
    >
      {true ? (
        <Stack.Screen name="LoggedStack" component={LoggedStack} />
      ) : (
        <Stack.Screen name="UnloggedStack" component={LoggedStack} />
      )}
    </Stack.Navigator>
  );
};

export default Router;