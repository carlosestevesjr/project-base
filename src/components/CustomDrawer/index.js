import { DrawerContentScrollView } from '@react-navigation/drawer';
import React from 'react';
import { View, Text } from 'react-native';
import Item from './components/Item';
import styles from './styles';

export default function CustomDrawerContent({
  props,
  navigation: { closeDrawer, navigate },
  navigation
}) {

  const state = navigation;
  
  const getRouteName = state.getState().routeNames?.[state.getState()?.index];

  const items = [
    { focused: true, icon: 'window-close', func: () => closeDrawer() },
    { icon: 'home', screen: 'Dashboard', name:'Home' },
    { icon: 'car', screen: 'Outhers', name:'Outros' },
    { icon: 'logout-variant', func: () => console.log('Delogar') },
  ];

  return (
    <DrawerContentScrollView
      {...props}
      scrollEnabled={false}
      contentContainerStyle={styles.drawerContentContainer}
      style={styles.drawerContainer}
    >
      {items.map(({ icon, name, func, screen, focused, route }) => (
        <Item
          name={name}
          key={icon}
          icon={icon}
          onPress={() => {
            if (screen) {
              navigate(screen);
            }
            if (screen && route) {
              navigate(screen, route);
            }
            if (func) {
              func();
            }
          }}
          focus={ focused || getRouteName === screen }
        />
      ))}
    </DrawerContentScrollView>
  );
}
