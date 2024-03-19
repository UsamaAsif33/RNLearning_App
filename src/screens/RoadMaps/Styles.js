import {StyleSheet, StatusBar} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/theme';

export const Size = 30;
export const Spacing = 20;
export const marginValue = 20;

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatListStyle: {
    flexDirection: 'row',
    padding: Spacing,
    marginBottom: marginValue,
    backgroundColor: 'rgba(115,147,179,0.9)',
    borderRadius: 16,
    elevation: 5,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.3,
    shadowRadius: 20,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'normal',
    fontSize: 20,
    color: 'white',
  },
  contentContainer: {
    padding: 20,
    paddingTop: StatusBar.currentHeight || 42,
  },
});

export default styles;
