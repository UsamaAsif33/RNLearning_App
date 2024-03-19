import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text18, Text20, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const PlatfromSpecificCode = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Platform-Specific Code</Text28>
          <Text12>
            React Native provides two ways to organize your code and separate it
            by platform:{'\n'}
            🔷Using the Platform module.{'\n'}
            🔷Using platform-specific file extensions.{'\n'}
          </Text12>

          {/* PLATFORM MODULE */}
          <Text20>Platform module</Text20>

          <Text12>
            React Native's platform detection module enables developers to
            identify the platform and implement platform-specific code for small
            components within an app.{'\n'}
          </Text12>
          <CopyAbleText
            content={`import {Platform, StyleSheet} from 'react-native';

            const styles = StyleSheet.create({
              height: Platform.OS === 'ios' ? 200 : 100,
            });`}
          />
          <Text12>
            The Platform.select method in React Native allows developers to
            specify platform-specific values based on the current platform being
            used, prioritizing 'ios' and 'android' keys for mobile platforms,
            followed by 'native' and 'default' keys if not specified.{'\n'}
          </Text12>
          <CopyAbleText
            content={`import {Platform, StyleSheet} from 'react-native';

            const styles = StyleSheet.create({
              container: {
                flex: 1,
                ...Platform.select({
                  ios: {
                    backgroundColor: 'red',
                  },
                  android: {
                    backgroundColor: 'green',
                  },
                  default: {
                    // other platforms, web for example
                    backgroundColor: 'blue',
                  },
                }),
              },
            });`}
          />

          {/* FOR VERSION CHECKING */}
          <Text18>{'\n'}Detecting the Android/IOS version</Text18>
          <Text12>you can run the following command to check version .</Text12>
          <CopyAbleText
            content={`import {Platform} from 'react-native';\nconsole.log('Platform Version Is... ',Platform.Version);`}
          />

          {/* PLATFORM SPECIFIC EXTENSIONS */}
          <Text20>Platform-specific extensions</Text20>
          <Text12>
            When dealing with more complex platform-specific code in React
            Native, consider splitting it into separate files. React Native
            automatically detects files with .ios. or .android. extensions,
            loading the appropriate platform file when needed from other
            components.{'\n'}
            {'\n'}BigButton.ios.js{'\n'}
            BigButton.android.js{'\n'}
            {'\n'}
            React Native will automatically pick up the right file based on the
            running platform. You can then import the component as follows:
          </Text12>
          <CopyAbleText content={`import BigButton from './BigButton';`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PlatfromSpecificCode;
