import {SafeAreaView, ScrollView, View} from 'react-native';

import Header from '../../../../../components/Header/Header';
import {Text12, Text18, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const JavascriptEnvironment = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>JavaScript Environment</Text28>
          <Text18>JavaScript Runtime</Text18>
          <Text12>
            In React Native, JavaScript code runs in up to three environments:
            {'\n'}🔷Hermes: Optimized open-source engine for React Native.
            {'\n'}🔷JavaScriptCore: Powers Safari on iOS; no JIT on iOS due to
            memory restrictions.
            {'\n'}🔷V8 (when debugging in Chrome): Used for debugging,
            communicating with native code via WebSockets.
          </Text12>

          <Text18>JavaScript Syntax Transformers</Text18>
          <Text12>
            Syntax transformers make writing code more enjoyable by allowing you
            to use new JavaScript syntax without having to wait for support on
            all interpreters. React Native ships with the Babel JavaScript
            compiler. Check
          </Text12>
          <OnWebsiteDocsLink
            name={'Babel documentation'}
            link={'https://babeljs.io/docs/plugins/#transform-plugins'}
          />
          <Text12>
            on its supported transformations for more details. A full list of
            React Native's enabled transformations can be found in
          </Text12>
          <OnWebsiteDocsLink
            name={'@react-native/babel-preset.'}
            link={
              'https://github.com/facebook/react-native/tree/main/packages/react-native-babel-preset'
            }
          />
          <Text12>
            Syntax transformers, enabled via Babel, allow using modern
            JavaScript syntax. React Native's enabled transformations include
            ECMAScript 5-13 features and miscellaneous polyfills for browser and
            ES6/7/8/9/10/11/13 environments. Common transformations include
            arrow functions, classes, destructuring, async functions, dynamic
            imports, and more. Additionally, polyfills for standard functions
            like Array.from, Object.assign, and XMLHttpRequest are available
            across environments.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default JavascriptEnvironment;
