import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {COLORS} from '../../shared/theme';
export const Size = 30;
export const Spacing = 20;
export const marginValue = hp('2');
const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: COLORS.white,
    justifyContent: 'center',
    padding: 15,
  },
  card: {
    paddingVertical: Spacing,
    marginBottom: marginValue,
    width:wp('90'),
    paddingHorizontal:wp('2'),
    backgroundColor: COLORS.primary,
    borderRadius: 16,
  },
  text: {
    fontWeight: 'normal',
    fontSize: 20,
    color: COLORS.white,
    marginLeft:wp('2')
  },
  contact: {
    textAlign: 'center',
    fontWeight: 'bold',
    color: COLORS.primary,
    fontSize: 25,
    marginBottom: 20
  }
});

export default styles;
