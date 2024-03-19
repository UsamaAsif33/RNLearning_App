import {StyleSheet, StatusBar} from 'react-native';
import { heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import { COLORS } from '../../shared/theme';

export const Size = 30;
export const Spacing = 20;
export const marginValue = hp('2');

const styles = StyleSheet.create({
  mianView: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  flatListStyle: {
    flexDirection: 'row',
    padding: Spacing,
    marginBottom: marginValue,
    backgroundColor: COLORS.primary,
    borderRadius: 16,
    justifyContent: 'space-between',
  },
  text: {
    fontWeight: 'normal',
    fontSize: 20,
    color: COLORS.white,
  },
  contentContainer: {
    padding: wp('5'),
  },
});

export default styles;
