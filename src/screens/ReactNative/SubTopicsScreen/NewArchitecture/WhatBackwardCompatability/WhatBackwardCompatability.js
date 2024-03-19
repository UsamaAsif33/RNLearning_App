import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import styles from '../Styles';
import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import {navigate} from '../../../../../navigation/rootNavigation';

const WhatBackwardCompatability = () => {
  const onTurboenBtnPress = () => {
    // navigate('')
  };

  const onFabricBtnPress = () => {
    // navigate('')
  };

  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>What Backward Compatibility Is</Text28>
          <Text12>
            Creating a backward compatible module is important to provide a
            library that works in both the Old Architecture and the New
            Architecture. Not all the users of your library will immediately
            jump on the New Architecture ship: it is a good thing that they will
            be able to use your library even if they are still using the old
            architecture. The trick to create a good backward compatible module
            is to minimize the changes required to adopt the new version. In
            that way, users of the module can smoothly move to the new version
            and migrate to the New Architecture when they are ready, ideally by
            issuing one different command. To achieve this result, we have to
            perform few changes in our Turbo Native Module and Fabric Native
            Component configurations. The steps we have to follow are:
            {'\n'}🔷 Update the installation configuration to avoid using code
            that is not needed by the Old Architecture.
            {'\n'}🔷 Update the code to support both architectures. Both Android
            and iOS build pipelines gives you mechanism to provide a library
            that will compile with the correct React Native Architecture.
            {'\n'}🔷 Configure the specs to load the proper implementation, so
            that the JavaScript layer leverages the New Architecture when it is
            available.
          </Text12>

          <Text12>To create a backward compatible Turbo Native Module, </Text12>
          <TouchableOpacity onPress={onTurboenBtnPress}>
            <Text12>👉 follow this guide.</Text12>
          </TouchableOpacity>

          <Text12>
            To create a backward compatible Fabric Native Component,{' '}
          </Text12>
          <TouchableOpacity onPress={onFabricBtnPress}>
            <Text12>👉 follow this guide.</Text12>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WhatBackwardCompatability;
