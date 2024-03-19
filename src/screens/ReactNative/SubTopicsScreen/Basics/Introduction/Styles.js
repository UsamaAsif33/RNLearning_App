import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../../shared/theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS?.white,
  },
  Container1: {
    paddingHorizontal: wp('8'),
    paddingVertical: hp('1'),
  },
  txt28: {color: COLORS?.darkBlue, fontWeight: 'bold'},
  txt12: {
    color: COLORS?.textPrimary,
    lineHeight: 22,
  },
});

export default styles;
