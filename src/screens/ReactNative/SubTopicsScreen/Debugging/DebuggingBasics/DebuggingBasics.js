import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {Paths} from '../../../../../assets/images';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {BtnListDebugging} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';

const DebuggingBasics = () => {
  const [isSelected, setIsSelected] = useState('Android');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Debugging Basics</Text28>
          <Text28>{'\n'}Accessing the Dev Menu:</Text28>
          <Text12>
            React Native provides an in-app developer menu which offers several
            debugging options. You can access the Dev Menu by shaking your
            device or via keyboard shortcuts:
            {'\n'}
            {'\n'}🔷 iOS Simulator: Cmd ⌘ + D (or Device - Shake)
            {'\n'}🔷 Android emulators: Cmd ⌘ + M (macOS) or Ctrl + M (Windows
            and Linux)
            {'\n'}
            {'\n'}Alternatively for Android devices and emulators, you can run
            adb shell input keyevent 82 in your terminal.
          </Text12>
          <Image
            style={styles.imgStyle}
            source={Paths?.debugging?.debuggingDevMenu}
          />

          <Text24 textStyle={styles?.txt24}>{'\n'}Opening the Debugger:</Text24>
          <Text12>
            The debugger allows you to understand and debug how your JavaScript
            code is running, similar to a web browser.
          </Text12>

          <View style={styles?.Container1}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {BtnListDebugging?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => onBtnPress(item?.name)}
                    key={item?.key}
                    style={[
                      styles?.btnStyle,
                      {
                        backgroundColor:
                          isSelected == item?.name
                            ? COLORS?.primary
                            : COLORS?.lightPrimary,
                      },
                    ]}>
                    <Text12>{item?.name}</Text12>
                  </TouchableOpacity>
                );
              })}
            </View>
            {isSelected == 'Flipper' ? (
              <>
                <Text12>
                  Flipper is a native debugging tool which provides JavaScript
                  debugging capabilities for React Native via an embedded Chrome
                  DevTools panel.
                  {'\n'}
                  <OnWebsiteDocsLink
                    name="Flipper"
                    link="https://fbflipper.com/"
                  />
                  {'\n'}
                  To debug JavaScript code in Flipper, select "Open Debugger"
                  from the Dev Menu. Learn more about Flipper here.
                  {'\n'}
                  <OnWebsiteDocsLink
                    name=" here"
                    link="https://fbflipper.com/docs/features/react-native/"
                  />
                </Text12>
                <Image
                  style={styles.imgStyle}
                  source={Paths?.debugging?.debuggingFlipper}
                />
              </>
            ) : isSelected == 'New Debugger (Experimental)' ? (
              <>
                <Text12>
                  The React Native team is working on a new JavaScript debugger
                  experience, intended to replace Flipper, with a preview
                  available as of React Native 0.73.
                  {'\n'}
                  {'\n'}
                  The new debugger can be enabled via React Native CLI. This
                  will also enable j to debug.
                  {'\n'}
                  <CopyAbleText
                    content={`npx react-native start --experimental-debugger`}
                  />
                  {'\n'}
                  When selecting "Open Debugger" in the Dev Menu, this will
                  launch the new debugger using Google Chrome or Microsoft Edge.
                </Text12>

                <Image
                  style={styles.imgStyle}
                  source={Paths?.debugging?.debuggingWelcome}
                />
              </>
            ) : (
              <>
                <Text12>
                  Hermes supports the Chrome debugger by implementing the Chrome
                  DevTools Protocol. This means Chrome's tools can be used to
                  directly debug JavaScript running on Hermes, on an emulator or
                  on a physical device.
                  {'\n'}1. In a Chrome browser window, navigate to
                  chrome://inspect.
                  {'\n'}2. Use the "Configure..." button to add the dev server
                  address (typically localhost:8081).
                  {'\n'}3. You should now see a "Hermes React Native" target
                  with an "inspect" link. Click this to open the debugger.
                </Text12>
                <Image
                  style={styles.imgStyle}
                  source={Paths?.debugging?.debuggingInstructions}
                />
              </>
            )}
          </View>
          <Text28>{'\n'}React DevTools:</Text28>
          <Text12>
            You can use React DevTools to inspect the React element tree, props,
            and state.
          </Text12>
          <CopyAbleText content={`npx react-devtools`} />
          <Image
            style={styles.imgStyle}
            source={Paths?.debugging?.debuggingBlank}
          />

          <Text28>{'\n'}LogBox:</Text28>
          <Text12>
            Errors and warnings in development builds are displayed in LogBox
            inside your app.
          </Text12>
          <Image
            style={{marginTop: 20, width: 300, height: 150}}
            source={Paths?.debugging?.debuggingLogbox}
          />

          <Text28>{'\n'}Console Errors and Warnings:</Text28>
          <Text12>
            Console errors and warnings are displayed as on-screen notifications
            with a red or yellow badge, and a notification count. To see more
            about an error or warning, tap the notification to see an expanded
            view and to paginate through other logs. LogBox notifications can be
            disabled using LogBox.ignoreAllLogs(). This can be useful when
            giving product demos, for example. Additionally, notifications can
            be disabled on a per-log basis via LogBox.ignoreLogs(). This can be
            useful for noisy warnings or those that cannot be fixed, e.g. in a
            third-party dependency.
          </Text12>
          <CopyAbleText
            content={`import {LogBox} from 'react-native';

                    // Ignore log notification by message
                    LogBox.ignoreLogs([
                      // Exact message
                      'Warning: componentWillReceiveProps has been renamed',

                      // Substring or regex match
                      /GraphQL error: .*/,
                    ]);

                    // Ignore all log notifications
                    LogBox.ignoreAllLogs();`}
          />

          <Text28>{'\n'}Syntax Errors:</Text28>
          <Text12>
            When a JavaScript syntax error occurs, LogBox will open with the
            location of the error. In this state, LogBox is not dismissable
            since your code cannot be executed. LogBox will automatically
            dismiss once the syntax error is fixed — either via Fast Refresh or
            after a manual reload.
          </Text12>

          <Text28>{'\n'}Performance Monitor:</Text28>
          <Text12>
            On Android and iOS, an in-app performance overlay can be toggled
            during development by selecting "Perf Monitor" in the Dev Menu.
            Learn more about this feature here.
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 120}}
            source={Paths?.debugging?.debuggingPerformanceMonitor}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DebuggingBasics;
