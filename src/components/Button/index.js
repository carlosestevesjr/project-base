import React from 'react';

import { TouchableOpacity, Text } from 'react-native';
import LottieView from 'lottie-react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

import styles from './styles';
import loadingJson from '../../assets/images/loading.json';

const Button = ({
  linearGradient,
  gradientColors,
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
            linearGradient ? styles.buttonTextGradient : styles.buttonText,
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
    !linearGradient ?
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

      :
      
      <TouchableOpacity
        onPress={onPress}
        disabled={disabled}
      >
        <LinearGradient
          // Button Linear Gradient
          colors={gradientColors ? gradientColors : ['#F7F8F8', '#eaebeb']}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 1 }}
          style={[
            styles.buttonContainerGradient,
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
        </LinearGradient>
      </TouchableOpacity>

  );
};

export default Button;
