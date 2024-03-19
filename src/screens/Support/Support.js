// Support.js
import React from 'react';
import {View, Text, TouchableOpacity, Linking} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

import styles from './Styles';
import {Feather, Fontisto} from '../../assets/vectorIcons/index';
import HorizontalView from '../../components/HorizontalView/HorizontalView';
import {showToast} from '../../components/Toast/Toast';

const Support = () => {
  const phoneNumber = '+923091234567';
  const handlePhonePress = async () => {
    const phoneNumberUrl = `tel:${phoneNumber}`;
    await Linking.openURL(phoneNumberUrl);
  };
  const handleEmailPress = async () => {
    await Clipboard.setString('tahayousaf1234@gmail.com');
    showToast('Copied Successfully');
  };
  return (
    <View style={styles.Container}>
      <Text style={styles.contact}>Contact Us!</Text>
      <HorizontalView style={styles.card}>
        <HorizontalView>
          <Feather name="phone-call" size={25} color="white" />
          <Text style={styles.text}>Phone Call</Text>
        </HorizontalView>
        <TouchableOpacity onPress={handlePhonePress}>
          <Text style={styles.text}>{phoneNumber}</Text>
        </TouchableOpacity>
      </HorizontalView>
      <HorizontalView style={styles.card}>
        <HorizontalView>
          <Fontisto name="email" size={25} color="white" />
          <Text style={[styles.text, {fontSize: 15}]}>
            tahayousaf1234@gmail.com
          </Text>
        </HorizontalView>
        <TouchableOpacity onPress={handleEmailPress}>
          <Feather name="copy" size={25} color="white" />
        </TouchableOpacity>
      </HorizontalView>
    </View>
  );
};

export default Support;
