import * as React from 'react';
import {Animated, Text, TouchableOpacity, View} from 'react-native';

import {AntDesign} from '../../assets/vectorIcons/index';
import styles, {Spacing, Size, marginValue} from './Style';

const ITEM_SIZE = Size + marginValue + Spacing * 2;
export default ({data, renderInside}) => {
  const scrollY = React.useRef(new Animated.Value(0)).current;
  return (
    <View style={styles.mianView}>
      <Animated.FlatList
        data={data}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollY}}}],
          {useNativeDriver: true},
        )}
        keyExtractor={item => item.key}
        contentContainerStyle={styles.contentContainer}
        renderItem={({item, index}) => {
          const inputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 2),
          ];

          const opacityInputRange = [
            -1,
            0,
            ITEM_SIZE * index,
            ITEM_SIZE * (index + 1),
          ];

          const scale = scrollY.interpolate({
            inputRange,
            outputRange: [1, 1, 1, 0],
          });

          const opacity = scrollY.interpolate({
            inputRange: opacityInputRange,
            outputRange: [1, 1, 1, 0],
          });

          return (
            <TouchableOpacity onPress={() => renderInside(item)}>
              <Animated.View
                style={[styles.flatListStyle, {opacity, transform: [{scale}]}]}>
                <View>
                  <Text style={styles.text}>{item.name}</Text>
                </View>
                <AntDesign name="right" size={25} color="white" />
              </Animated.View>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};
