import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';
import {StyleSheet, TouchableOpacity} from 'react-native';

import {Ionicons} from '../../assets/vectorIcons';
import {COLORS} from '../../shared/theme';
import {GoBack} from '../../navigation/rootNavigation';

const Header = () => {
  return (
    <TouchableOpacity style={styles.icon} onPress={() => GoBack()}>
      <Ionicons name="arrow-back" size={30} color={COLORS.darkBlue} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    marginTop: hp('2'),
    marginLeft: wp('5'),
  },
});

export default Header;
