import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const NativeDebugging = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Native Debugging</Text28>
          <Text28>{'\n'}Projects with Native Code Only:</Text28>
          <Text12>
            The following section only applies to projects with native code
            exposed. If you are using the managed Expo workflow, see the guide
            on prebuild to use this API.
            {'\n'}
            <OnWebsiteDocsLink
              name="prebuild"
              link="https://docs.expo.dev/workflow/prebuild/"
            />
          </Text12>

          <Text28>{'\n'}Accessing native logs:</Text28>
          <Text12>
            You can display the console logs for an iOS or Android app by using
            the following commands in a terminal while the app is running:
          </Text12>
          <CopyAbleText
            content={`# For Android:
            npx react-native log-android
            # Or, for iOS:
            npx react-native log-ios`}
          />

          <Text28>{'\n'}Debugging native code:</Text28>
          <Text12>
            When working with native code, such as when writing native modules,
            you can launch the app from Android Studio or Xcode and take
            advantage of the native debugging features (setting up breakpoints,
            etc.) as you would in case of building a standard native app.
            Another option is to run your application using the React Native CLI
            and attach the native debugger of the native IDE (Android Studio or
            Xcode) to the process.
          </Text12>

          <Text28>{'\n'}Android Studio:</Text28>
          <Text12>
            On Android Studio you can do this by going on the "Run" option on
            the menu bar, clicking on "Attach to Process..." and selecting the
            running React Native app.
          </Text12>

          <Text28>{'\n'}Xcode:</Text28>
          <Text12>
            On Xcode click on "Debug" on the top menu bar, select the "Attach to
            process" option, and select the application in the list of "Likely
            Targets".
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NativeDebugging;
