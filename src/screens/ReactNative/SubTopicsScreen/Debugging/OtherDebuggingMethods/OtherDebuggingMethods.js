import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {Paths} from '../../../../../assets/images';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {BtnList} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';

const OtherDebuggingMethods = () => {
  const [isSelected, setIsSelected] = useState('Android');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Other Debugging Methods</Text28>
          <Text12>
            This page covers other JavaScript debugging methods besides what is
            described in Opening the Debugger. If you are using a newly created
            React Native or Expo app, we recommend starting there.
          </Text12>

          <Text28>Safari Developer Tools (direct JSC debugging)</Text28>
          <Text12>
            You can use Safari to debug the iOS version of your app when using
            JavaScriptCore (JSC) as your app's runtime.
            <OnWebsiteDocsLink
              name="JavaScriptCore "
              link="https://trac.webkit.org/wiki/JavaScriptCore"
            />
            {'\n'}1. Physical devices only: Open the Settings app, and navigate
            to Safari - Advanced, and make sure "Web Inspector" is turned on.
            {'\n'}2. On your Mac, open Safari and enable the Develop menu. This
            can be found under Safari - Settings..., then the Advanced tab, then
            selecting "Show features for web developers".
            {'\n'}3. Find your device under the Develop menu, and select the
            "JSContext" item from the submenu. This will open Safari's Web
            Inspector, which includes Console and Sources panels similar to
            Chrome DevTools.
          </Text12>
          <Image
            style={styles.imgStyle}
            source={Paths?.OtherDebuggingMethods?.debuggingSafariTools}
          />

          <Text28>{'\n'}Remote JavaScript Debugging (deprecated):</Text28>
          <Text12>
            Remote JavaScript Debugging connects an external web browser
            (Chrome) to your app and runs your JavaScript code inside a web
            page. This allows you to use Chrome's debugger as you would with any
            web app. Note that the browser environment can be very different,
            and not all React Native modules will work when debugging this way.
          </Text12>

          <Text28>{'\n'}Setup:</Text28>
          <Text12>
            Since React Native 0.73, Remote JavaScript Debugging must be
            manually enabled using the NativeDevSettings module.
          </Text12>
          <CopyAbleText
            content={`import NativeDevSettings from 'react-native/Libraries/NativeModules/specs/NativeDevSettings';

              function MyApp() {
              // Assign this to a dev-only button or useEffect call
              const connectToRemoteDebugger = () => {
              NativeDevSettings.setIsDebuggingRemotely(true);
            };
          }`}
          />
          <Text12>
            When NativeDevSettings.setIsDebuggingRemotely(true) is invoked, this
            will open a new tab at http://localhost:8081/debugger-ui.
            {'\n'}
            <OnWebsiteDocsLink
              name="http://localhost:8081/debugger-ui"
              link="http://localhost:8081/debugger-ui/"
            />
            {'\n'}From this page, open Chrome DevTools via:
            {'\n'}🔷 View - Developer - Developer Tools
            {'\n'}🔷 ⌥ Option + Cmd ⌘ + I (macOS) / Ctrl + Shift + I (Windows
            and Linux).
            {'\n'} The Console and Sources panels will allow you to inspect your
            React Native code.
          </Text12>
          <Image
            style={styles.imgStyle}
            source={Paths?.OtherDebuggingMethods?.debuggingChromeDebugger}
          />

          <Text28>{'\n'}Debugging on a physical device:</Text28>

          <View style={styles?.Container1}>
            <View style={{flexDirection: 'row'}}>
              {BtnList?.map(item => {
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
            {isSelected == 'iOS' ? (
              <>
                <Text12>
                  On iOS devices, open the file RCTWebSocketExecutor.mm and
                  change "localhost" to the IP address of your computer.
                  {'\n'}
                  {'\n'}
                  <OnWebsiteDocsLink
                    name="RCTWebSocketExecutor.mm"
                    link="https://github.com/facebook/react-native/blob/main/packages/react-native/React/CoreModules/RCTWebSocketExecutor.mm"
                  />
                </Text12>
              </>
            ) : (
              <>
                <Text12>
                  On Android 5.0+ devices connected via USB, you can use the adb
                  command line tool to set up port forwarding from the device to
                  your computer:
                </Text12>
                <CopyAbleText content={`adb reverse tcp:8081 tcp:8081`} />
              </>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OtherDebuggingMethods;
