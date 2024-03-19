import {ScrollView, View, SafeAreaView} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const AndroidJava = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>{'\n'}Key Concepts:</Text28>
          <Text12>
            The keys to integrating React Native components into your Android
            application are to: Set up React Native dependencies and directory
            structure. Develop your React Native components in JavaScript. Add a
            ReactRootView to your Android app. This view will serve as the
            container for your React Native component. Start the React Native
            server and run your native application. Verify that the React Native
            aspect of your application works as expected.
          </Text12>

          <Text28>{'\n'}Prerequisites:</Text28>
          <Text12>
            Follow the React Native CLI Quickstart in the environment setup
            guide to configure your development environment for building React
            Native apps for Android.
          </Text12>

          <Text28>{'\n'}1. Set up directory structure:</Text28>
          <Text12>
            To ensure a smooth experience, create a new folder for your
            integrated React Native project, then copy your existing Android
            project to an /android subfolder.
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
                "start": "react-native start"
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

          <Text28>{'\n'}Adding React Native to your app</Text28>
          <Text28>{'\n'}Configuring Gradle:</Text28>
          <Text12>
            React Native uses the React Native Gradle Plugin to configure your
            dependencies and project setup. First, let's edit your
            settings.gradle file by adding this line:
          </Text12>
          <CopyAbleText
            content={`includeBuild('../node_modules/@react-native/gradle-plugin')`}
          />

          <Text12>
            Then you need to open your top level build.gradle and include this
            line:
          </Text12>
          <CopyAbleText
            content={`buildscript {
              repositories {
                  google()
                  mavenCentral()
              }
              dependencies {
                  classpath("com.android.tools.build:gradle:7.3.1")
          +       classpath("com.facebook.react:react-native-gradle-plugin")
              }
          }`}
          />

          <Text12>
            This makes sure the React Native Gradle Plugin is available inside
            your project. Finally, add those lines inside your app's
            build.gradle file (it's a different build.gradle file inside your
            app folder):
          </Text12>
          <CopyAbleText
            content={`apply plugin: "com.android.application"
            +apply plugin: "com.facebook.react"
            
            repositories {
                mavenCentral()
            }
            
            dependencies {
                // Other dependencies here
            +   implementation "com.facebook.react:react-android"
            +   implementation "com.facebook.react:hermes-android"
            }`}
          />

          <Text28>{'\n'}Enable native modules autolinking:</Text28>
          <Text12>
            To use the power of autolinking, we have to apply it a few places.
            First add the following entry to settings.gradle:
          </Text12>
          <CopyAbleText
            content={`apply from: file("../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesSettingsGradle(settings)`}
          />

          <Text12>
            Next add the following entry at the very bottom of the
            app/build.gradle:
          </Text12>
          <CopyAbleText
            content={`apply from: file("../../node_modules/@react-native-community/cli-platform-android/native_modules.gradle"); applyNativeModulesAppBuildGradle(project)`}
          />

          <Text28>{'\n'}Configuring permissions:</Text28>
          <Text12>
            Next, make sure you have the Internet permission in your
            AndroidManifest.xml:
          </Text12>
          <CopyAbleText
            content={`<uses-permission android:name="android.permission.INTERNET" />`}
          />

          <Text12>
            If you need to access to the DevSettingsActivity add to your
            AndroidManifest.xml:
          </Text12>
          <CopyAbleText
            content={`<activity android:name="com.facebook.react.devsupport.DevSettingsActivity" />`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AndroidJava;
