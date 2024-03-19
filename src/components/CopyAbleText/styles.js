import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

import {COLORS} from '../../shared/theme';

const styles = StyleSheet.create({
  Conatiner: {
    paddingBottom: hp('2'),
    paddingHorizontal: wp('6'),
    backgroundColor: COLORS?.black,
    borderRadius: 15,
    marginTop: hp('1'),
  },
  CopyIcon: {alignSelf: 'flex-end', right: 5, marginTop: hp('1')},
});

export default styles;
