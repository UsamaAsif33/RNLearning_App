import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const UsingLibraries = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Using Libraries:</Text28>
          <Text12>
            React Native provides a set of built-in Core Components and APIs
            ready to use in your app. You're not limited to the components and
            APIs bundled with React Native. React Native has a community of
            thousands of developers. If the Core Components and APIs don't have
            what you are looking for, you may be able to find and install a
            library from the community to add the functionality to your app..
          </Text12>

          <Text12>{'\n'}Selecting a Package Manager:</Text12>
          <Text12>
            React Native libraries are typically installed
            {'\n'}
            <OnWebsiteDocsLink
              name="npm registry"
              link="https://www.npmjs.com/"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="npm CLI"
              link="https://docs.npmjs.com/cli/v10/commands/npm/"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="Yarn Classic"
              link="https://classic.yarnpkg.com/en/"
            />
          </Text12>
          <Text28>{'\n'}Installing a Library:</Text28>
          <Text12>
            To install a library in your project, navigate to your project
            directory in your terminal and run the installation command. Let's
            try this with react-native-webview:
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm install react-native-webview`}
            content2={`yarn add react-native-webview`}
            buttonLabel1={`npm`}
            buttonLabel2={`yarn`}
          />

          <Text28>{'\n'}Linking Native Code on iOS:</Text28>
          <Text12>
            React Native uses CocoaPods to manage iOS project dependencies and
            most React Native libraries follow this same convention. If a
            library you are using does not, then please refer to their README
            for additional instruction. In most cases, the following
            instructions will apply. Run pod install in our ios directory in
            order to link it to our native iOS project. A shortcut for doing
            this without switching to the ios directory is to run npx
            pod-install.
          </Text12>
          <CopyAbleText content={`npx pod-install`} />

          <Text12>
            Once this is complete, re-build the app binary to start using your
            new library:
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm run ios`}
            content2={`yarn ios`}
            buttonLabel1={`npm`}
            buttonLabel2={`yarn`}
          />

          <Text28>{'\n'}Linking Native Code on Android:</Text28>
          <Text12>
            React Native uses Gradle to manage Android project dependencies.
            After you install a library with native dependencies, you will need
            to re-build the app binary to use your new library:
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm run android`}
            content2={`yarn android`}
            buttonLabel1={`npm`}
            buttonLabel2={`yarn`}
          />

          <Text28>{'\n'}Finding Libraries:</Text28>
          <Text12>
            The React Native Directory serves as a comprehensive database for
            React Native libraries, primarily sourced from the React Native
            Community and Expo. Libraries within the directory are typically
            developed by volunteers and companies invested in React Native,
            supporting various platforms such as iOS, Android, and others to
            varying degrees. Expo libraries are exclusively TypeScript-based and
            prioritize compatibility with iOS, Android, and react-native-web. If
            a library isn't found on the React Native Directory, developers can
            turn to the npm registry, although not all listed libraries may be
            compatible with React Native as npm caters to multiple JavaScript
            environments.
          </Text12>
          <Text28>{'\n'}Determining Library Compatibility</Text28>
          <Text28>{'\n'}Compatibility with React Native:</Text28>
          <Text12>
            Libraries specifically tailored for other platforms may not be
            compatible with React Native. Testing the library within your React
            Native project is the most reliable method to determine
            compatibility, and if it doesn't work, removal using npm uninstall
            is recommended.
          </Text12>

          <Text28>{'\n'}Platform Support:</Text28>
          <Text12>
            React Native Directory provides filtering options based on platform
            compatibility, including iOS, Android, Web, and Windows. If a
            desired library isn't listed, consulting the library's README for
            platform support details is advised.
          </Text12>

          <Text28>{'\n'}Version Compatibility:</Text28>
          <Text12>
            Typically, the latest library version aligns with the latest React
            Native version. For older React Native versions, referring to the
            library's README for compatibility information and installing a
            specific version using npm install library-name@version-number is
            recommended. For example, npm install
            @react-native-community/netinfo@^2.0.0 installs version 2.0.0 of the
            @react-native-community/netinfo library.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UsingLibraries;
