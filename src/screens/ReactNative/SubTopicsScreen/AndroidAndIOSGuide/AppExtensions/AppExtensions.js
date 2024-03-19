import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import styles from '../Styles';
import {Paths} from '../../../../../assets/images';

const AppExtensions = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>App Extensions:</Text28>
          <Text12>
            App extensions let you provide custom functionality and content
            outside of your main app. There are different types of app
            extensions on iOS, and they are all covered in the App Extension
            Programming Guide. In this guide, we'll briefly cover how you may
            take advantage of app extensions on iOS.
          </Text12>
          <Text28>Memory use in extensions:</Text28>
          <Text12>
            As these extensions are loaded outside of the regular app sandbox,
            it's highly likely that several of these app extensions will be
            loaded simultaneously. As you might expect, these extensions have
            small memory usage limits. Keep these in mind when developing your
            app extensions. It's always highly recommended to test your
            application on an actual device, and more so when developing app
            extensions: too frequently, developers find that their extension
            works fine in the iOS Simulator, only to get user reports that their
            extension is not loading on actual devices.
            {'\n'}
            {'\n'}
            We highly recommend that you watch Conrad Kramer's talk on Memory
            Use in Extensions to learn more about this topic.
          </Text12>
          <Text28>Today widget:</Text28>
          <Text12>
            The memory limit of a Today widget is 16 MB. As it happens, Today
            widget implementations using React Native may work unreliably
            because the memory usage tends to be too high. You can tell if your
            Today widget is exceeding the memory limit if it yields the message
            'Unable to Load':
          </Text12>
          <Image
            style={{width: 300, height: 100, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.AppExtension}
          />
          <Text12>
            When testing app extensions, particularly Today widgets, it's
            crucial to use a real device as simulator testing may not be
            sufficient. Debug-configured builds are prone to exceeding memory
            limits, while release-configured builds may not immediately fail but
            could still approach the 16 MB limit. Using Xcode's Instruments to
            analyze real-world memory usage is highly recommended. This is
            particularly important as common operations like fetching data from
            an API can quickly surpass the 16 MB limit. For experimenting with
            the limits of React Native Today widget implementations, extending
            the example project in react-native-today-widget is advised.
          </Text12>
          <Text28>Other app extensions:</Text28>
          <Text12>
            Other types of app extensions have greater memory limits than the
            Today widget. For instance, Custom Keyboard extensions are limited
            to 48 MB, and Share extensions are limited to 120 MB. Implementing
            such app extensions with React Native is more viable. One proof of
            concept example is react-native-ios-share-extension.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AppExtensions;
