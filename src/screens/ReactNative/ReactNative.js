import {SafeAreaView, View} from 'react-native';
import React from 'react';
import { BannerAd, BannerAdSize, TestIds } from 'react-native-google-mobile-ads';

import styles from './Styles';
import AnimatedList from '../../components/AnimatedFlatlist/AnimatedFlatList';
import {ReactNativeData} from '../../assets/data/StaticData';
import {navigate} from '../../navigation/rootNavigation';


const ReactNative = () => {

  const adUnitId = __DEV__ ? TestIds.ADAPTIVE_BANNER : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

  return (
    <SafeAreaView style={styles.Container}>
      <AnimatedList
        data={ReactNativeData}
        renderInside={item =>
          navigate('SubTopicsScreen', {subTopics: item?.subTopics})
        }
      />
      <BannerAd
      unitId={adUnitId}
      size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
    />
    </SafeAreaView>
  );
};

export default ReactNative;
