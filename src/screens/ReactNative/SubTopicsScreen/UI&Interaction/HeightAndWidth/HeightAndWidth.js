import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const HeightAndWidth = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Height and Width:</Text28>
          <Text12>
            A component's height and width determine its size on the screen.
          </Text12>
          <Text28>{'\n'}Fixed Dimensions:</Text28>
          <Text12>
            The general way to set the dimensions of a component is by adding a
            fixed width and height to style. All dimensions in React Native are
            unitless, and represent density-independent pixels.
          </Text12>

          <Text28>{'\n'}Height and Width:</Text28>
          <CopyAbleText
            content={`import React from 'react';
            import {View} from 'react-native';
            
            const FixedDimensionsBasics = () => {
              return (
                <View>
                  <View
                    style={{
                      width: 50,
                      height: 50,
                      backgroundColor: 'powderblue',
                    }}
                  />
                  <View
                    style={{
                      width: 100,
                      height: 100,
                      backgroundColor: 'skyblue',
                    }}
                  />
                  <View
                    style={{
                      width: 150,
                      height: 150,
                      backgroundColor: 'steelblue',
                    }}
                  />
                </View>
              );
            };
            
            export default FixedDimensionsBasics;`}
          />

          <Text12>
            Setting dimensions this way is common for components whose size
            should always be fixed to a number of points and not calculated
            based on screen size.
          </Text12>
          <Text28>{'\n'}Flex Dimensions:</Text28>
          <Text12>
            Use flex in a component's style to have the component expand and
            shrink dynamically based on available space. Normally you will use
            flex: 1, which tells a component to fill all available space, shared
            evenly amongst other components with the same parent. The larger the
            flex given, the higher the ratio of space a component will take
            compared to its siblings.
          </Text12>

          <CopyAbleText
            content={`import React from 'react';
            import {View} from 'react-native';
            
            const FlexDimensionsBasics = () => {
              return (
                // Try removing the flex: 1 on the parent View.
                // The parent will not have dimensions, so the children can't expand.
                // What if you add height: 300 instead of flex: 1?
                <View style={{flex: 1}}>
                  <View style={{flex: 1, backgroundColor: 'powderblue'}} />
                  <View style={{flex: 2, backgroundColor: 'skyblue'}} />
                  <View style={{flex: 3, backgroundColor: 'steelblue'}} />
                </View>
              );
            };
            
            export default FlexDimensionsBasics;`}
          />

          <Text28>{'\n'}Percentage Dimensions:</Text28>
          <Text12>
            If you want to fill a certain portion of the screen, but you don't
            want to use the flex layout, you can use percentage values in the
            component's style. Similar to flex dimensions, percentage dimensions
            require parent with a defined size.
          </Text12>

          <CopyAbleText
            content={`import React from 'react';
            import {View} from 'react-native';
            
           const PercentageDimensionsBasics = () => {
              // Try removing the height: '100%' on the parent View.
              // The parent will not have dimensions, so the children can't expand.
              return (
                <View style={{height: '100%'}}>
                  <View
                    style={{
                      height: '15%',
                      backgroundColor: 'powderblue',
                    }}
                  />
                  <View
                    style={{
                      width: '66%',
                      height: '35%',
                      backgroundColor: 'skyblue',
                    }}
                  />
                  <View
                    style={{
                      width: '33%',
                      height: '50%',
                      backgroundColor: 'steelblue',
                    }}
                  />
                </View>
              );
            };
            
    export default PercentageDimensionsBasics;`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HeightAndWidth;
