import {Image, SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from './Styles';
import Header from '../../../../../components/Header/Header';
import {Paths} from '../../../../../assets/images';

const CoreAndNative = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Core Components and Native Components:</Text28>
          <Text12 textStyle={styles?.txt12}>
            React Native allows building Android and iOS apps using React and
            native platform capabilities. It utilizes JavaScript to access
            platform APIs and describe UI appearance and behavior through React
            components.
          </Text12>

          {/* VIEWS AND MOBILE APP DEVELOPMENT */}
          <Text24>{'\n'}Views and mobile development:</Text24>
          <Text12>
            Views are fundamental UI elements in mobile development, serving as
            the basic building blocks on the screen to display text, images, or
            respond to user input. React Native allows developers to use React
            components to create native views for Android and iOS.
          </Text12>
          <Image style={styles.imgStyle} source={Paths?.Views} />

          {/* NATIVE COMPONENTS */}
          <Text24>{'\n'}Native Components:</Text24>
          <Text12>
            Native Components in React Native are platform-backed components
            that ensure apps look, feel, and perform like native apps. These
            components can be either essential Core Components provided by React
            Native or custom components created by developers to meet specific
            app requirements.
          </Text12>

          {/* CORE COMPONENTS */}
          <Text24>{'\n'}Core Components:</Text24>
          <Text12>
            React Native's Core Components, including View, Text, Image,
            ScrollView, and TextInput, provide essential building blocks for
            mobile app development. These components enable developers to create
            dynamic user interfaces with native-like performance across Android
            and iOS platforms. Leveraging these Core Components, developers can
            design interactive interfaces for displaying text, images, and input
            fields within their React Native applications.
          </Text12>

          <Image style={{width: 300, height: 200}} source={Paths?.Component} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CoreAndNative;
