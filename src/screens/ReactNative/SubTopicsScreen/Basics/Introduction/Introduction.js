import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from './Styles';
import Header from '../../../../../components/Header/Header';

const Introduction = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Introduction:</Text28>
          <Text12>
            This is an introductory Document to React Native. It provides an
            introduction to React Native, Native Components, React, and the
            documentation. This App is for everyone, whether they are advanced
            iOS developers, React beginners, or those starting programming for
            the first time.
            <Text24>
              {'\n'}
              {'\n'}
              {'\n'}Prerequisites:
            </Text24>
            {'\n'}🔷 Familiarity with JavaScript fundamentals is essential.
            {'\n'}🔷 While prior knowledge of React, Android, or iOS isn't
            required, it's beneficial. We provide links for deeper learning
            where necessary.
            {'\n'}
            {'\n'}This document is written for developers with various
            technology backgrounds, such as web, Android, iOS, etc. Specific
            explanations may be provided for different platforms. Now that you
            understand how this guide works, it's time to explore the foundation
            of React Native: Native Components
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Introduction;
