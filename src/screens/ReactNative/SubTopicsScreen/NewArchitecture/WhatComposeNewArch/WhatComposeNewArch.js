import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';
import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import { navigate } from '../../../../../navigation/rootNavigation';

const WhatComposeNewArch = () => {
 const onCodegenBtnPress = ()=>{
  navigate('Codegen')
 }

  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>What Composes the New Architecture</Text28>
          <Text12>
            The New Architecture is composed mainly of two pillars:
          </Text12>
          <TouchableOpacity>
            <Text12>👉 The New Native Module System - Turbo Modules</Text12>
          </TouchableOpacity>
          <TouchableOpacity>
            <Text12>👉 The New Renderer - Fabric</Text12>
          </TouchableOpacity>

          <Text12>
            The core concepts of React Native still holds true in the New
            Architecture: Native Modules are the preferred way to create
            libraries that leverage some platform-specific API. Native
            Components are the preferred way to create reusable UI components,
            providing a native experience to the users. The main goal of this
            section is to drive the reader through a step-by-step guide to
            create their first Native Module or Component which is compatible
            with the New Architecture.{'\n'}The next sections contain a
            high-level overview of the pillars and the steps to create them. To
            create one of these pillars, the steps are: Define a JavaScript
            specification using Flow or TypeScript. Configure the dependencies
            management system to generate code from the provided spec. Implement
            the Native code. Integrate the code in the app. Finally, we dive a
            little deeper into the
          </Text12>
          <TouchableOpacity onPress={onCodegenBtnPress}>
            <Text12>👉 Codegen</Text12>
          </TouchableOpacity>
          <Text12>
            process that is required to create all the C++ types and files used
            by our components, including some useful steps to work comfortably
            while developing the component.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WhatComposeNewArch;
