import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import styles from '../Styles';
import {Text12, Text18, Text20, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {Paths} from '../../../../../assets/images';

const CreateNewArchitecture = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Creating a New Architecture App</Text28>
          <Text12>
            This page will help you create a new React Native app that uses the
            New Architecture.
          </Text12>

          <Text20>Development Environment</Text20>
          <Text12>
            Before continuing, make sure you've followed all the steps in the
            Setting up the development environment
          </Text12>

          <Text20>Creating a New Application</Text20>
          <Text12>
            If you previously installed a global react-native-cli package,
            please remove it as it may cause unexpected issues:
          </Text12>
          <CopyAbleText
            content={
              'npm uninstall -g react-native-cli @react-native-community/cli'
            }
          />
          <Text12>
            If you already have your development environment set up, create a
            new React Native project from the template:
          </Text12>
          <CopyAbleText
            content={'npx react-native@latest init AwesomeProject'}
          />
          <Text12>
            {' '}
            🎗🎗 CAUTION 🎗🎗 : The New Architecture is available in React Native
            version 0.68 or later.
          </Text12>

          {/* CONFIGURATION */}

          <Text20>Configuration</Text20>
          <Text12>
            Follow the steps below to enable the New Architecture and build the
            app.
          </Text12>
          <Text18>Enable Hermes</Text18>
          <Text12>
            Hermes is an open-source JavaScript engine optimized for React
            Native. Hermes will be the default engine in the future, and we
            highly recommend you use it.
          </Text12>
          <Text18>Enable the New Architecture</Text18>

          <CopyAbleTextWithButton
            content1={`Set the newArchEnabled property to true by either:\nChanging the corresponding line in android/gradle.properties\nSetting the environment variable ORG_GRADLE_PROJECT_newArchEnabled=true\nThen build and run the app as usual:\nyarn android`}
            content2={`Navigate to the ios directory and run the following:\nbundle install && RCT_NEW_ARCH_ENABLED=1 bundle exec pod install\nThen build and run the app as usual:\nyarn ios`}
            buttonLabel1={`Android`}
            buttonLabel2={`iOS`}
          />
          <Text18> Troubleshooting</Text18>
          <Text12>
            react-native run-ios fails If you see a build failure from
            react-native run-ios, there may be cached files from a previous
            build with the old architecture. Clean the build cache and try
            again:
            {'\n'}Open the project ios/project.xcworkspace in Xcode
            {'\n'}In XCode, choose Product 👉🏻 Clean Build Folder
            {'\n'}In the project directory, remove the ios/Podfile.lock file and
            ios/Pods directory: rm -rf ios/Podfile.lock ios/Pods
            {'\n'}Re-run yarn pod-install and yarn ios
          </Text12>
          <Text20>Confirming the New Architecture is in Use</Text20>
          <Text12>
            After you build and run the app when Metro serves the JavaScript
            bundle, you should see "fabric": true in the Metro logs:
          </Text12>

          <Image
            source={Paths?.metroNewArch}
            style={styles?.imgStyle}
            resizeMode="contain"
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CreateNewArchitecture;
