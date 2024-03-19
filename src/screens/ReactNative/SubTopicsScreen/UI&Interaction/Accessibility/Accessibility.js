import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const Accessibility = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Accessibility:</Text28>
          <Text12>
            Both Android and iOS provide APIs for integrating apps with
            assistive technologies like the bundled screen readers VoiceOver
            (iOS) and TalkBack (Android). React Native has complementary APIs
            that let your app accommodate all users.
          </Text12>

          <Text28>{'\n'}Accessibility properties</Text28>

          <Text28>{'\n'}accessible:</Text28>
          <Text12>
            Indicates if the view is an accessibility element, grouping its
            children into a single selectable component. Translates to native
            focusable=true on Android.
          </Text12>

          <CopyAbleText
            content={`<View accessible={true}>
            <Text>text one</Text>
            <Text>text two</Text>
          </View>
          `}
          />
          <Text28>{'\n'}accessibilityLabel:</Text28>
          <Text12>
            Provides a description for accessibility and is verbalized by screen
            readers.
          </Text12>
          <CopyAbleText
            content={`<TouchableOpacity
            accessible={true}
            accessibilityLabel="Tap me!"
            onPress={onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Press me!</Text>
            </View>
          </TouchableOpacity>          
          `}
          />

          <Text28>{'\n'}accessibilityLabelledBy Android:</Text28>
          <Text12>Links an element to its label using nativeID.</Text12>
          <CopyAbleText
            content={`<View>
            <Text nativeID="formLabel">Label for Input Field</Text>
            <TextInput
              accessibilityLabel="input"
              accessibilityLabelledBy="formLabel"
            />
          </View>                            
          `}
          />

          <Text28>{'\n'}accessibilityHint:</Text28>
          <Text12>Provides additional context on the action's result.</Text12>
          <CopyAbleText
            content={`<TouchableOpacity
            accessible={true}
            accessibilityLabel="Go back"
            accessibilityHint="Navigates to the previous screen"
            onPress={onPress}>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Back</Text>
            </View>
          </TouchableOpacity>                                      
          `}
          />

          <Text28>{'\n'}accessibilityLanguage iOS:</Text28>
          <Text12>Sets the language for screen reader announcements.</Text12>
          <CopyAbleText
            content={`<View
            accessible={true}
            accessibilityLabel="Pizza"
            accessibilityLanguage="it-IT">
            <Text>🍕</Text>
          </View>                                               
          `}
          />

          <Text28>{'\n'}accessibilityLiveRegion Android:</Text28>
          <Text12>Alerts users dynamically about changes.</Text12>
          <CopyAbleText
            content={`<TouchableWithoutFeedback onPress={addOne}>
            <View style={styles.embedded}>
              <Text>Click me</Text>
            </View>
          </TouchableWithoutFeedback>
          <Text accessibilityLiveRegion="polite">
            Clicked {count} times
          </Text>                                                        
          `}
          />

          <Text28>{'\n'}accessibilityRole:</Text28>
          <Text12>
            Communicates the purpose of a component to assistive technology
            users.
          </Text12>
          <CopyAbleText
            content={`<View accessibilityRole="button">
            <Text>Press me!</Text>
          </View>                                                                 
          `}
          />

          <Text28>{'\n'}accessibilityState:</Text28>
          <Text12>Describes the current state of a component.</Text12>
          <CopyAbleText
            content={`<View accessibilityState={{disabled: true}} />`}
          />

          <Text28>{'\n'}accessibilityValue:</Text28>
          <Text12>Represents the current value of a component.</Text12>
          <CopyAbleText
            content={`<View accessibilityValue={{min: 0, max: 100, now: 50}} />`}
          />

          <Text28>{'\n'}Accessibility Actions:</Text28>
          <Text12>
            Allows programmatically invoking a component's action(s).
          </Text12>
          <CopyAbleText
            content={`<View
            accessibilityActions={[
              {name: 'cut', label: 'cut'},
              {name: 'copy', label: 'copy'},
              {name: 'paste', label: 'paste'},
            ]}
            onAccessibilityAction={handleAction}
          />
          `}
          />

          <Text28>{'\n'}Checking Screen Reader:</Text28>
          <Text12>
            Determines if a screen reader is enabled using AccessibilityInfo.
          </Text12>
          <CopyAbleText content={`AccessibilityInfo.isScreenReaderEnabled()`} />

          <Text28>{'\n'}Sending Accessibility Events Android:</Text28>
          <Text12>Triggers accessibility events on UI components.</Text12>
          <CopyAbleText
            content={`UIManager.sendAccessibilityEvent(viewTag, eventType)`}
          />

          <Text28>{'\n'}Testing TalkBack Support Android:</Text28>
          <Text12>Toggles TalkBack via settings or command line.</Text12>
          <CopyAbleText
            content={`adb shell settings put secure enabled_accessibility_services com.google.android.marvin.talkback/com.google.android.marvin.talkback.TalkBackService`}
          />

          <Text28>{'\n'}Testing VoiceOver Support iOS:</Text28>
          <Text12>Enables VoiceOver via device settings.</Text12>

          <Text28>{'\n'}Additional Resources:</Text28>
          <OnWebsiteDocsLink
            name={'Making React Native Apps Accessible'}
            link={
              'https://engineering.fb.com/2015/11/23/android/making-react-native-apps-accessible/'
            }
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Accessibility;
