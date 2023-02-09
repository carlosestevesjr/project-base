import * as React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import { colors } from '../../../../styles';

const Item = ({ icon, name, focus, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <MaterialCommunityIcons
        name={icon}
        size={30}
        color={focus ? colors.black : colors.gray}
      />
      <Text>{name}</Text>
    </TouchableOpacity>
  );
};

export default Item;
