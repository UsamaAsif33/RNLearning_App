import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import {StyleSheet} from 'react-native';
import {COLORS} from '../../../../shared/theme';

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS?.white,
  },
  Container1: {
    paddingHorizontal: wp('8'),
    paddingVertical: hp('1'),
  },
  txt28: {color: COLORS?.darkBlue, lineHeight: 35, fontWeight: 'bold'},
  txt20: {color: COLORS?.darkBlue, fontWeight: 'bold', marginTop: hp('1'),},

  txt12: {
    color: COLORS?.textPrimary,
    lineHeight: 22,
    marginTop: hp('1'),
  },
  txt18: {color: COLORS?.darkBlue, fontWeight: 'bold', marginTop: hp('1'),},
  imgStyle: {marginTop: 20, width: 300, height: 190},
  txt24: {color: COLORS?.darkBlue, lineHeight: 30},
  btnStyle: {
    backgroundColor: COLORS?.primary,
    marginLeft: wp('2'),
    paddingBottom: hp('1'),
    marginVertical: hp('2'),
    paddingHorizontal: wp('3'),
    borderRadius: 20,
  },
});

export default styles;
