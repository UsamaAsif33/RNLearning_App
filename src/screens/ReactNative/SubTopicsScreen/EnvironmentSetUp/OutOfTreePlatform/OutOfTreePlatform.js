import {SafeAreaView, ScrollView, View} from 'react-native';

import Header from '../../../../../components/Header/Header';
import {Text12, Text18, Text24} from '../../../../../components/Text';
import styles from '../Styles';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const OutOfTreePlatform = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text24>Out-of-Tree Platforms</Text24>
          <Text12>
            React Native is not only for Android and iOS devices - our partners
            and the community maintain projects that bring React Native to other
            platforms, such as:
          </Text12>

          <Text18>From Partners</Text18>
          <OnWebsiteDocsLink
            link={'https://github.com/microsoft/react-native-macos'}
            name={'React Native macOS '}
          />
          <Text12>- React Native for macOS and Cocoa.</Text12>
          <OnWebsiteDocsLink
            link={'https://github.com/microsoft/react-native-windows'}
            name={'React Native Windows'}
          />
          <Text12>
            - React Native for Microsoft's Universal Windows Platform (UWP).
          </Text12>

          <Text18>From Community</Text18>
          <OnWebsiteDocsLink
            link={'https://github.com/react-native-tvos/react-native-tvos'}
            name={'React Native tvOS'}
          />
          <Text12>- React Native for macOS and Cocoa.</Text12>
          <OnWebsiteDocsLink
            link={'https://github.com/necolas/react-native-web'}
            name={'React Native Web'}
          />
          <Text12> - React Native on the web using React DOM.</Text12>

          <OnWebsiteDocsLink
            link={'https://github.com/react-native-skia/react-native-skia'}
            name={'React Native Web'}
          />
          <Text12>
            {' '}
            - React Native using Skia as a renderer. Currently supports Linux
            and macOS.
          </Text12>

          <Text18>Creating your own React Native platform</Text18>
          <Text12>
            Right now the process of creating a React Native platform from
            scratch is not very well documented - one of the goals of the
            upcoming re-architecture (Fabric) is to make maintaining a platform
            easier.
          </Text12>

          <Text18>Bundling</Text18>
          <Text12>
            As of React Native 0.57 you can now register your React Native
            platform with React Native's JavaScript bundler, Metro. This means
            you can pass --platform example to npx react-native bundle, and it
            will look for JavaScript files with the .example.js suffix. To
            register your platform with RNPM, your module's name must match one
            of these patterns:
            {'\n'}🔷 react-native-example - It will search all top-level modules
            that start with react-native-
            {'\n'}🔷 @org/react-native-example - It will search for modules that
            start with react-native- under any scope
            {'\n'}🔷 @react-native-example/module - It will search in all
            modules under scopes with names starting with @react-native- You
            must also have an entry in your package.json like this:
          </Text12>

          <CopyAbleText
            content={`{\n"rnpm": {\n"haste": {\n"providesModuleNodeModules": ["react-native-example"],\n"platforms": ["example"]\n}\n}\n}`}
          />
          <Text12>
            "providesModuleNodeModules" is an array of modules that will get
            added to the Haste module search path, and "platforms" is an array
            of platform suffixes that will be added as valid platforms.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OutOfTreePlatform;
