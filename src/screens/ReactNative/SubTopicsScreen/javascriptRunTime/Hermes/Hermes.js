import {Image, SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import Header from '../../../../../components/Header/Header';
import {Text12, Text18, Text20, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import {Paths} from '../../../../../assets/images';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import {navigate} from '../../../../../navigation/rootNavigation';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const Hermes = () => {
  const OnUpgradeBtnPress = () => {
    navigate('UpgradingToNewVersions');
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Hermes</Text28>
          <Text12>
            Hermes is a JavaScript engine designed specifically for React
            Native, aiming to optimize performance. Utilizing Hermes can lead to
            faster start-up times, reduced memory usage, and smaller app sizes
            compared to JavaScriptCore. Key points about Hermes in React Native:
            Hermes comes bundled with React Native, requiring no additional
            configuration for use. React Native releases include a version of
            Hermes tailored for compatibility with that specific React Native
            version. This bundling approach addresses past issues of matching
            Hermes versions with React Native versions, ensuring seamless
            compatibility. Users can still choose to disable Hermes if desired,
            with instructions provided for doing so. Overall, Hermes offers
            React Native developers a transparent and efficient solution for
            enhancing app performance without added configuration complexity.
          </Text12>
          <Image source={Paths?.Hermes?.HermesLogo} style={styles?.imgStyle} />

          {/* Confirming Hermes is in use */}
          <Text20>Confirming Hermes is in use</Text20>
          <Text12>
            If you've recently created a new app from scratch, you should see if
            Hermes is enabled in the welcome view:
          </Text12>
          <Image
            source={Paths?.Hermes?.HermesHeader}
            style={styles?.imgStyle}
          />

          {/* Debugging JS on Hermes using Google Chrome's DevTools */}
          <Text20>Debugging JS on Hermes using Google Chrome's DevTools</Text20>
          <Text12>
            Chrome connects to Hermes running on device via Metro, so you'll
            need to know where Metro is listening. Typically this will be on
            localhost:8081, but this is{' '}
          </Text12>
          <OnWebsiteDocsLink
            name={'configurable'}
            link={'https://metrobundler.dev/docs/configuration/'}
          />
          <Text12>
            When running yarn start the address is written to stdout on startup.
            Once you know where the Metro server is listening, you can connect
            with Chrome using the following steps:
            {'\n'}🔷 Navigate to chrome://inspect in a Chrome browser instance.
            {'\n'}🔷 Use the Configure... button to add the Metro server address
            (typically localhost:8081 as described above).
          </Text12>
          <Image
            source={Paths?.Hermes?.GoogleChromeDevTool}
            style={styles?.imgStyle}
          />
          <Image
            source={Paths?.Hermes?.TargetDiscSetting}
            style={styles?.imgStyle}
          />
          <Text12>
            🔷 You should now see a "Hermes React Native" target with an
            "inspect" link which can be used to bring up debugger. If you don't
            see the "inspect" link, make sure the Metro server is running.
          </Text12>
          <Image
            source={Paths?.Hermes?.HermesInspectTarget}
            style={styles?.imgStyle}
          />

          <Text12>
            🔷 You can now use the Chrome debug tools. For example, to
            breakpoint the next time some JavaScript is run, click on the pause
            button and trigger an action in your app which would cause
            JavaScript to execute.
          </Text12>
          <Image
            source={Paths?.Hermes?.ChromeDebugTool}
            style={styles?.imgStyle}
          />

          {/* Enabling Hermes on Older Versions of React Native */}
          <Text20>Enabling Hermes on Older Versions of React Native</Text20>
          <Text12>
            To enable Hermes on older versions of React Native, follow these
            steps:
            {'\n'}🔷 Ensure you're using at least version 0.60.4 of React Native
            for Android or version 0.64 for iOS.
            {'\n'}🔷 If your existing app is based on an earlier version of
            React Native, upgrade it first. Refer to the
          </Text12>

          <TouchableOpacity onPress={OnUpgradeBtnPress}>
            <Text12 textStyle={{fontWeight: 'bold'}}>
              {' '}
              Upgrading to new React Native Versions
            </Text12>
          </TouchableOpacity>

          <Text12>
            guide for instructions.
            {'\n'}🔷 After upgrading the app, verify that everything is
            functioning correctly before attempting to switch to Hermes.
          </Text12>

          {/* FOR ANDROID */}
          <Text18>Android</Text18>
          <Text12>
            Edit your android/gradle.properties file and make sure hermesEnabled
            is true:
          </Text12>
          <CopyAbleText
            content={`# Use this property to enable or disable the Hermes JS engine.
# If set to false, you will be using JSC instead.
hermesEnabled=true`}
          />
          <Text12>
            Also, if you're using ProGuard, you will need to add these rules in
            proguard-rules.pro :
          </Text12>
          <CopyAbleText
            content={`-keep class com.facebook.hermes.unicode.** { *; }
-keep class com.facebook.jni.** { *; }`}
          />

          <Text12>
            Next, if you've already built your app at least once, clean the
            build:
          </Text12>
          <CopyAbleText content={`$ cd android && ./gradlew clean`} />
          <Text12>
            That's it! You should now be able to develop and deploy your app as
            usual: For Npm Use first command and for Yarn use Second 👇
          </Text12>
          <CopyAbleText content={`npm run android\nyarn android`} />

          {/* FOR IOS */}
          <Text18>iOS</Text18>
          <Text12>
            Since React Native 0.64, Hermes also runs on iOS. To enable Hermes
            for iOS, edit your ios/Podfile file and make the change illustrated
            below:
          </Text12>
          <CopyAbleText
            content={`   use_react_native!(
     :path => config[:reactNativePath],
     # to enable hermes on iOS, change false to true and then install pods
     # By default, Hermes is disabled on Old Architecture, and enabled on New Architecture.
     # You can enable/disable it manually by replacing flags[:hermes_enabled] with true or false.
-    :hermes_enabled => flags[:hermes_enabled],
+    :hermes_enabled => true
   )`}
          />
          <Text12>
            By default, you will be using Hermes if you're on the New
            Architecture. By specifying a value such as true or false you can
            enable/disable Hermes as you wish. Once you've configured it, you
            can install the Hermes pods with:
          </Text12>
          <CopyAbleText content={`$ cd ios && pod install`} />
          <Text12>
            That's it! You should now be able to develop and deploy your app as
            usual: For Npm Use first command and for Yarn use Second 👇
          </Text12>
          <CopyAbleText content={`npm run ios\nyarn ios`} />

          {/* Switching back to JavaScriptCore */}
          <Text20>Switching back to JavaScriptCore</Text20>
          <Text12>
            React Native also supports using JavaScriptCore as the JavaScript
            engine. Follow these instructions to opt-out of Hermes.
          </Text12>
          <Text18>Android</Text18>
          <Text12>
            Edit your android/gradle.properties file and flip hermesEnabled back
            to false:
          </Text12>
          <CopyAbleText
            content={`# Use this property to enable or disable the Hermes JS engine.
            # If set to false, you will be using JSC instead.
            hermesEnabled=false`}
          />

          <Text18>iOS</Text18>
          <Text12>
            Edit your ios/Podfile file and make the change illustrated below:
          </Text12>
          <CopyAbleText
            content={`   use_react_native!(
              :path => config[:reactNativePath],
         +    :hermes_enabled => false,
              # Enables Flipper.
              #
              # Note that if you have use_frameworks! enabled, Flipper will not work and
              # you should disable the next line.
              :flipper_configuration => flipper_config,
              # An absolute path to your application root.
              :app_path => "#{Pod::Config.instance.installation_root}/.."
            )`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Hermes;
