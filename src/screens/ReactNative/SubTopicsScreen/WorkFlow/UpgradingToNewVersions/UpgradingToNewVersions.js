import {SafeAreaView, View} from 'react-native';
import React from 'react';

import Header from '../../../../../components/Header/Header';
import {Text28, Text12} from '../../../../../components/Text';
import styles from '../Styles';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const UpgradingToNewVersions = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <View style={styles?.Container1}>
        <Text28>Upgrading to new versions</Text28>
        <Text12>
          Upgrading to new versions of React Native unlocks more APIs, views,
          developer tools, and improvements. For Expo projects, update
          react-native, react, and expo versions in package.json, and use Expo's
          upgrade command. For React Native projects, the Upgrade Helper tool
          shows changes between versions and provides guidance. Use npx
          react-native upgrade to update dependencies and project files
          automatically, or manually update files based on changes. Troubleshoot
          issues related to caching by using react-native-clean-project to clear
          the project's cache.
        </Text12>
        <CopyAbleText content={`npx react-native-clean-project`} />
      </View>
    </SafeAreaView>
  );
};

export default UpgradingToNewVersions;
