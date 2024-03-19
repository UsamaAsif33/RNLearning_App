import {View} from 'react-native';
import React from 'react';

import styles from './Styles';
import AnimatedList from '../../components/AnimatedFlatlist/AnimatedFlatList';
import {RoadMap} from '../../assets/data/StaticData';
import {navigate} from '../../navigation/rootNavigation';

const RoadMaps = () => {
  return (
    <View style={styles.Container}>
      <AnimatedList
        data={RoadMap}
        renderInside={item =>
          navigate('RoadMapsDetail', {picture: item?.imagePath})
        }
      />
    </View>
  );
};

export default RoadMaps;
