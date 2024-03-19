import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const ScrollViewScreen = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Using a ScrollView:</Text28>
          <Text12>
            The ScrollView is a versatile scrolling container for multiple
            components and views, supporting both vertical and horizontal
            scrolling. It accommodates heterogeneous content and allows paging
            with swiping gestures using pagingEnabled. On iOS, it enables
            zooming with pinch and expand gestures when configured with
            maximumZoomScale and minimumZoomScale. However, for extensive lists,
            it's recommended to use FlatList for better performance, as
            ScrollView renders all elements regardless of visibility.{'\n'}
            {'\n'}This example creates a vertical ScrollView with both images
            and text mixed together.
          </Text12>
          <CopyAbleText
            content={`import React from 'react';
            import {Image, ScrollView, Text} from 'react-native';
            
            const logo = {
              uri: 'https://reactnative.dev/img/tiny_logo.png',
              width: 64,
              height: 64,
            };
            
            const App = () => (
              <ScrollView>
                <Text style={{fontSize: 96}}>Scroll me plz</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>If you like</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>Scrolling down</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>What's the best</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 96}}>Framework around?</Text>
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Image source={logo} />
                <Text style={{fontSize: 80}}>React Native</Text>
              </ScrollView>
            );
            
            export default App;`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ScrollViewScreen;
