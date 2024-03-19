import {ScrollView, View, SafeAreaView} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const IOSSwift = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>{'\n'}Key Concepts:</Text28>
          <Text12>
            The keys to integrating React Native components into your iOS
            application are to: Set up React Native dependencies and directory
            structure. Understand what React Native components you will use in
            your app. Add these components as dependencies using CocoaPods.
            Develop your React Native components in JavaScript. Add a
            RCTRootView to your iOS app. This view will serve as the container
            for your React Native component. Start the React Native server and
            run your native application. Verify that the React Native aspect of
            your application works as expected.
          </Text12>

          <Text28>{'\n'}Prerequisites:</Text28>
          <Text12>
            Follow the React Native CLI Quickstart in the environment setup
            guide to configure your development environment for building React
            Native apps for iOS.
          </Text12>

          <Text28>{'\n'}1. Set up directory structure:</Text28>
          <Text12>
            To ensure a smooth experience, create a new folder for your
            integrated React Native project, then copy your existing iOS project
            to a /ios subfolder
          </Text12>

          <Text28>{'\n'}2. Install JavaScript dependencies:</Text28>
          <Text12>
            Go to the root directory for your project and create a new
            package.json file with the following contents:
          </Text12>
          <CopyAbleText
            content={`{
              "name": "MyReactNativeApp",
              "version": "0.0.1",
              "private": true,
              "scripts": {
                "start": "yarn react-native start"
              }
            }`}
          />

          <Text12>
            Next, install the react and react-native packages. Open a terminal
            or command prompt, then navigate to the directory with your
            package.json file and run:
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm install react-native`}
            content2={`yarn add react-native`}
            buttonLabel1={`npm`}
            buttonLabel2={`yarn`}
          />

          <Text28>{'\n'}3. Install CocoaPods:</Text28>
          <Text12>
            CocoaPods is a package management tool for iOS and macOS
            development. We use it to add the actual React Native framework code
            locally into your current project. We recommend installing CocoaPods
            using Homebrew.
          </Text12>
          <CopyAbleText content={`brew install cocoapods`} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IOSSwift;
