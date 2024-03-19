import React, {useState} from 'react';
import {View, TouchableOpacity} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Feather} from '../../assets/vectorIcons';
import {COLORS} from '../../shared/theme';
import styles from './styles';
import {Text12} from '../Text';
import {showToast} from '../Toast/Toast';

const CopyAbleTextWithButton = ({
  content1,
  content2,
  buttonLabel1,
  buttonLabel2,
}) => {
  const [currentContent, setCurrentContent] = useState(content1);
  const [selectedButton, setSelectedButton] = useState(buttonLabel1);

  const handleCopy = async () => {
    await Clipboard.setString(currentContent);
    showToast('Copied Successfully');
  };

  const toggleContent = (content, buttonLabel) => {
    setCurrentContent(content);
    setSelectedButton(buttonLabel);
  };

  return (
    <View style={styles?.Conatiner}>
      <TouchableOpacity onPress={handleCopy} style={styles.CopyIcon}>
        <Feather name="copy" size={25} color="white" />
      </TouchableOpacity>
      <View style={styles.buttons}>
        <TouchableOpacity onPress={() => toggleContent(content1, buttonLabel1)}>
          <Text12
            textStyle={{
              color: selectedButton === buttonLabel1 ? 'rgb(0,115,176)' : 'white',
              textDecorationLine:
                selectedButton === buttonLabel1 ? 'underline' : 'none',
            }}>
            {buttonLabel1}
          </Text12>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => toggleContent(content2, buttonLabel2)}>
          <Text12
            textStyle={{
              color: selectedButton === buttonLabel2 ? 'rgb(0,115,176)' : 'white',
              textDecorationLine:
                selectedButton === buttonLabel2 ? 'underline' : 'none',
            }}>
            {buttonLabel2}
          </Text12>
        </TouchableOpacity>
      </View>
      <View style={{marginTop: hp('2')}}>
        <Text12 textStyle={{color: COLORS?.white}}>{currentContent}</Text12>
      </View>
    </View>
  );
};

export default CopyAbleTextWithButton;
