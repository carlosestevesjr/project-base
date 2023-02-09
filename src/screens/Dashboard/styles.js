import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';
import { hpd, wpd } from '../../helpers';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    backgroundColor: colors.black,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wpd(10),
    
  },
});

export default styles;
