import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from './styles';
import loadingJson from '../../assets/images/loading.json';

const Button = ({
  title,
  color,
  fontColor,
  onPress,
  disabled,
  style,
  textStyle,
  loading,
  iconLeft,
  iconLeftColor,
  iconSize,
}) => {
  const renderButtonData = () => {
    if (title) {
      if (loading) {
        return (
          <LottieView
            source={loadingJson}
            autoPlay
            loop
            style={styles.loading}
          />
        );
      }

      return (
        <Text
          style={[
            styles.buttonText,
            fontColor ? { color: fontColor } : null,
            textStyle,
          ]}
        >
          {title}
        </Text>
      );
    }
    return '';
  };
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disabled}
      style={[
        styles.buttonContainer,
        color && { backgroundColor: color, borderColor: color },
        style,
      ]}
    >
      {iconLeft && !loading && (
        <MaterialCommunityIcons
          name={iconLeft}
          size={iconSize || 20}
          color={iconLeftColor}
        />
      )}
      {renderButtonData()}
    </TouchableOpacity>
  );
};

export default Button;
