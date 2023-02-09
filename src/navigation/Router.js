import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//Import Internals
import LoggedStack from '../navigation/LoggedStack';
// import UnloggedStack  from './UnloggedStack';

const Stack = createNativeStackNavigator();

const Router = () => {

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