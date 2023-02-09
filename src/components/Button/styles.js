import { StyleSheet } from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
    borderRadius: metrics.baseRadius * 10,
    borderWidth: 2,
    justifyContent: 'center',
    alignItems: 'center',
    padding: metrics.baseMargin / 2,
    alignSelf: 'stretch',
    flexDirection: 'row',
  },
  buttonText: {
    color: colors.black,
    fontFamily: 'TradeGothicBold',
    fontSize: 18,
  },
  loading: {
    width: 20,
    height: 20,
    alignSelf: 'center',
    marginBottom: metrics.baseMargin / 2,
  },
});

export default styles;
