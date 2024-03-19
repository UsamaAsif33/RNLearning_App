import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Feather} from '../../assets/vectorIcons';
import {COLORS} from '../../shared/theme';
import styles from './styles';
import {Text12} from '../Text';
import {showToast} from '../Toast/Toast';

const CopyAbleText = ({content}) => {
  const contentToCopy = content;

  const handleCopy = async () => {
    await Clipboard.setString(contentToCopy);
    showToast('Copied Successfully');
  };

  return (
    <View style={styles?.Conatiner}>
      <TouchableOpacity onPress={handleCopy} style={styles.CopyIcon}>
        <Feather name="copy" size={25} color="white" />
      </TouchableOpacity>
      <View style={{marginTop: hp('2')}}>
        <Text12 textStyle={{color: COLORS?.white}}>{content}</Text12>
      </View>
    </View>
  );
};

export default CopyAbleText;
