import {Image, SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {Paths} from '../../../../../assets/images';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const ReactDevTools = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>React DevTools:</Text28>
          <Text12>
            React DevTools can be used to debug the React component hierarchy
            within your app. The standalone version of React DevTools allows
            connecting to React Native apps. To use it, install or run the
            react-devtools package. It should connect to your simulator within a
            few seconds.
            {'\n'}
            <OnWebsiteDocsLink
              name="React DevTools "
              link="https://github.com/facebook/react/tree/main/packages/react-devtools"
            />
          </Text12>
          <CopyAbleText content={`npx react-devtools`} />
          <Image
            style={styles.imgStyle}
            source={Paths?.ReactDevTools?.debugging}
          />

          <Text24 textStyle={styles?.txt24}>
            {'\n'}Integration with the Element Inspector:
          </Text24>
          <Text12>
            React Native provides an Element Inspector, available under the Dev
            Menu as "Show Element Inspector". The inspector lets you tap on any
            UI element and see information about it.
          </Text12>
          <Image
            style={styles.imgStyle}
            source={Paths?.ReactDevTools?.debuggingInspector}
          />

          <Text12>
            When React DevTools is connected, the Element Inspector will enter a
            collapsed mode, and instead use DevTools as the primary UI. In this
            mode, clicking on something in the simulator will navigate to the
            relevant component in DevTools.
            {'\n'}
            {'\n'}You can select "Hide Element Inspector" in the same menu to
            exit this mode.
          </Text12>
          <Image
            style={styles.imgStyle}
            source={Paths?.ReactDevTools?.debuggingDevtools}
          />

          <Text24 textStyle={styles?.txt24}>
            {'\n'}Debugging application state:
          </Text24>
          <Text12>
            Reactotron is an open-source desktop app that allows you to inspect
            Redux or MobX-State-Tree application state as well as view custom
            logs, run custom commands such as resetting state, store and restore
            state snapshots, and other helpful debugging features for React
            Native apps.
            {'\n'}
            <OnWebsiteDocsLink
              name="Reactotron"
              link="https://github.com/infinitered/reactotron"
            />
            {'\n'}
            {'\n'}You can view installation instructions in the README. If
            you're using Expo, here is an article detailing how to install on
            Expo.
            {'\n'}
            <OnWebsiteDocsLink
              name="in the README"
              link="https://github.com/infinitered/reactotron"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="how to install on Expo"
              link="https://shift.infinite.red/start-using-reactotron-in-your-expo-project-today-in-3-easy-steps-a03d11032a7a"
            />
          </Text12>

          <Text24 textStyle={styles?.txt24}>{'\n'}Troubleshooting:</Text24>
          <Image
            style={styles.imgStyle}
            source={Paths?.ReactDevTools?.Troubleshooting}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReactDevTools;
