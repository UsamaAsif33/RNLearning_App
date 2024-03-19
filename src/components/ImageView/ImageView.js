import {View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {ReactNativeZoomableView} from '@openspacelabs/react-native-zoomable-view';

import {Ionicons} from '../../assets/vectorIcons';
import {COLORS} from '../../shared/theme';
import styles from './Style';
import {navigate} from '../../navigation/rootNavigation';
const ImageView = ({route}) => {
  const {picture} = route.params;
  return (
    <View style={styles.Container}>
      <TouchableOpacity
        style={styles.icon}
        onPress={() => navigate('RoadMaps')}>
        <Ionicons name="arrow-back" size={30} color={COLORS.darkBlue} />
      </TouchableOpacity>
      <ReactNativeZoomableView
        maxZoom={5}
        contentWidth={'100%'}
        contentHeight={'100%'}>
        <Image style={styles.img} source={picture} />
      </ReactNativeZoomableView>
    </View>
  );
};

export default ImageView;
