import {Linking, StyleSheet, TouchableOpacity} from 'react-native';

import {Text12} from '../Text';
import {COLORS} from '../../shared/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const OnWebsiteDocsLink = ({name, link}) => {
  const onPress = () => {
    Linking.openURL(link);
  };
  return (
    <TouchableOpacity onPress={onPress}>
      <Text12 textStyle={styles?.txt12}>👉 {name}</Text12>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  txt12: {
    color: COLORS?.textPrimary,
    lineHeight: 22,
    marginTop: hp('1'),
  },
});
