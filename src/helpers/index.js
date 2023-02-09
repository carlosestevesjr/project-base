import { PixelRatio, Dimensions } from 'react-native';
import Constants from 'expo-constants';

const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;

const { manifest } = Constants;

export const getLocalIP = () => {
  return manifest.debuggerHost.split(':')[0];
};

export const wpd = (widthPercent) => {
  return PixelRatio.roundToNearestPixel(
    (screenWidth * parseFloat(widthPercent)) / 100
  );
};

export const hpd = (heightPercent) => {
  return PixelRatio.roundToNearestPixel(
    (screenHeight * parseFloat(heightPercent)) / 100
  );
};

// TODO: Alterar para expo device
export const isTablet = () => {
  if (screenWidth > 650) {
    return true;
  }
  return false;
};

