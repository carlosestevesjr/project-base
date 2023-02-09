import { wpd } from '../../helpers/index';
import { StyleSheet } from 'react-native';
import {StatusBar} from 'react-native';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  drawerContentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  drawerContainer: {
    backgroundColor: colors.light,
    paddingTop: metrics.basePadding,
    paddingBottom: StatusBar.currentHeight + metrics.basePadding,
  },
  photoContainer: {
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.gray,
    width: 32,
    height: 32,
  },
  focusContainer: {
    borderRadius: metrics.baseRadius,
    borderWidth: 1,
    borderColor: colors.black,
    width: 32,
    height: 32,
  },
  modalCloseText: {
    fontSize: 20,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  modalButtonContainer: {
    flexDirection: 'row',
    marginTop: metrics.baseMargin * 1.5,
    justifyContent: 'space-between',
  },
  modalButton: {
    marginLeft: 10,
  },
});

export default styles;
