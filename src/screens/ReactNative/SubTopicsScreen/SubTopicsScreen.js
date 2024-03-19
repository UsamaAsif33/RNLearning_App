import {SafeAreaView, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import { InterstitialAd, TestIds, AdEventType } from 'react-native-google-mobile-ads';

import styles from './Style';
import AnimatedList from '../../../components/AnimatedFlatlist/AnimatedFlatList';
import {navigate} from '../../../navigation/rootNavigation';
import Header from '../../../components/Header/Header';

const SubTopics = ({route}) => {

  const adUnitId = __DEV__ ? TestIds.INTERSTITIAL : 'ca-app-pub-xxxxxxxxxxxxx/yyyyyyyyyyyyyy';

const interstitial = InterstitialAd.createForAdRequest(adUnitId, {
  keywords: ['fashion', 'clothing'],
});
  const {subTopics} = route.params;

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const unsubscribe = interstitial.addAdEventListener(AdEventType.LOADED, () => {
      setLoaded(true);
    });

    // Start loading the interstitial straight away
    interstitial.load();

    // Unsubscribe from events on unmount
    return unsubscribe;
  }, []);

  // No advert ready to show yet
  // if (!loaded) {
  //   return null;
  // }
  return (
    <SafeAreaView style={styles.Container}>
      <Header />
      <AnimatedList
        data={subTopics}
        renderInside={item => navigate(item?.screenName)}
      />
    </SafeAreaView>
  );
};

export default SubTopics;
