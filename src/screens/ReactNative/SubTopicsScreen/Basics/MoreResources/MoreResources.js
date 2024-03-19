import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text20, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const MoreResources = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>More Resources</Text28>
          <Text12>
            There’s always more to learn: developer workflows, shipping to app
            stores, internationalization, security and more.
          </Text12>

          {/* Dive deep*/}
          <Text20>
            {' '}
            <Text20 textStyle={styles?.txt20}>Dive deep</Text20>{' '}
          </Text20>
          <OnWebsiteDocsLink
            name="React’s Documentation"
            link={'https://react.dev/learn'}
          />
          <OnWebsiteDocsLink
            name="MDN’s JavaScript tutorials, reference, and guides"
            link={'https://reactnative.dev/docs/more-resources'}
          />
          <OnWebsiteDocsLink
            name="Android  platform docs"
            link={'https://developer.android.com/develop'}
          />
          <OnWebsiteDocsLink
            name="IOS platform docs"
            link={'https://developer.apple.com/documentation/uikit'}
          />

          <Text20>
            {' '}
            <Text20>IDEs</Text20>{' '}
          </Text20>
          <Text12 textStyle={styles?.txt12}>
            We recommend using the VS Code code editor and its handy React
            Native tools.
          </Text12>

          {/* PLATFORM TO TRY */}
          <Text20>
            {' '}
            <Text20>Platforms to try</Text20>{' '}
          </Text20>
          <Text12 textStyle={styles?.txt12}>
            Expo is a framework of tools and services for React Native that
            focuses on helping you build, ship, and iterate on your app, to use
            preview deployment workflows that are popular with web development,
            and to automate your development workflows. Expo also makes it
            possible to build React Native apps without ever touching Xcode or
            Android Studio, and it doesn't get in the way if you want to use
            those tools.
            {'\n'}
            {'\n'}
            {'\n'}Ignite is a starter kit CLI with several React Native
            boilerplates. The latest, Ignite Maverick, uses MobX-State-Tree for
            state management, React Navigation, and other common libraries.It
            has generators for screens, models, and more, and supports Expo out
            of the box. Ignite also comes with a component library that is tuned
            for custom designs, theming support, and testing. If you are looking
            for a preconfigured tech stack, Ignite could be perfect for you.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MoreResources;
