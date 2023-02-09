import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import CustomDrawer from '../components/CustomDrawer';

import Dashboard from '../screens/Dashboard';
import Outhers from '../screens/Outhers';

import { colors } from '../styles';

const Drawer = createDrawerNavigator();

const config = {
  animation: 'timing',
  config: {
    duration: 0,
  },
};

export default function LoggedStack() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: true,
        drawerStyle: {
          backgroundColor: colors.lighter,
          width: 100,
        },
      }}
      initialRouteName="Dashboard"
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
      <Drawer.Screen
        name="Outhers"
        component={Outhers}
        options={{
          transitionSpec: {
            open: config,
            close: config,
          },
        }}
      />
    </Drawer.Navigator>
  );
}
