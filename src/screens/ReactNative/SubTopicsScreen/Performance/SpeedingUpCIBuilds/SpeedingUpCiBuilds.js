import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';

const SpeedingUpCiBuilds = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28 >Speeding Up CI Builds:</Text28>
          <Text12 >
            You or your company may have set up a Continuous Integration (CI)
            environment to test your React Native application.
            {'\n'}A fast CI service is important for 2 reasons:
            {'\n'}🔷 The more time CI machines are running, the more they cost.
            {'\n'}🔷 The longer the CI jobs take to run, the longer the
            development loop.
            {'\n'}It is therefore important to try and minimize the time the CI
            environment spends building React Native.
          </Text12>
          <Text28 >
            {'\n'}Disable Flipper for iOS
          </Text28>
          <Text12 >
            The content explains that Flipper, a debugging tool bundled with
            React Native, is not necessary in continuous integration (CI)
            environments. It mentions that Flipper can be time-consuming to
            build, especially for iOS apps. Starting from React Native version
            0.71, a flag called NO_FLIPPER can be set in the Podfile to exclude
            Flipper from the app. By default, Flipper is included, but setting
            NO_FLIPPER=1 during pod installation prevents its installation. This
            helps save time during the build process.
          </Text12>
          <CopyAbleText
            content={`# from the root folder of the react native project
            NO_FLIPPER=1 bundle exec pod install --project-directory=ios`}
          />
          <Text28 >
            {'\n'}Handle Transitive Dependencies:
          </Text28>
          <Text12 >
            The content provides instructions for handling Flipper dependencies
            in React Native apps. When disabling Flipper with the NO_FLIPPER
            flag, the app might still fail to build if it relies on libraries
            that depend on Flipper. To address this, the recommended approach is
            to create a react-native.config.js file and exclude the transitive
            dependency explicitly when the flag is turned on. This ensures that
            the app installs the necessary dependencies properly. As an example,
            if the app uses the react-native-flipper library, it should be
            excluded from the dependencies in react-native.config.js when
            Flipper is disabled.
          </Text12>
          <CopyAbleText
            content={`module.exports = {
                // other fields
                dependency: {
                  ...(process.env.NO_FLIPPER
                    ? {'react-native-flipper': {platforms: {ios: null}}}
                    : {}),
                },
              };`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpeedingUpCiBuilds;
