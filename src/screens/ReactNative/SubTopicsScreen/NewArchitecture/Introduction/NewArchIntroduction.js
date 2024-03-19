import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import styles from '../Styles';
import {Text12, Text18, Text28} from '../../../../../components/Text';
import {navigate} from '../../../../../navigation/rootNavigation';
import Header from '../../../../../components/Header/Header';

const NewArchIntroduction = () => {
  const onPillarBtnPress = () => {
    navigate('whatComposeNewArchitecture');
  };
  const onMigratingBtnPress = () => {
    navigate('PrerequisitesForLibraries');
  };

  const onNewARchBtnPress = () => {
    navigate('CreateNewArchitecture');
  };

  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Introduction</Text28>
          <Text12>
            React Native introduced a revamped architecture in version 0.68 to
            empower developers with enhanced capabilities for creating
            high-performance, responsive apps. This overhaul, driven by the need
            for improvement, focuses on rethinking Native Modules and
            Components. Key elements of this new architecture include:
            {'\n'}🔷 Turbo Modules: A framework facilitating efficient
            integration with native code.
            {'\n'}🔷 Fabric: The new Native Renderer offering improved rendering
            capabilities, cross-platform consistency, and performance.
            {'\n'}🔷 Codegen: This tool generates necessary C++ boilerplate code
            via static typing in JavaScript.
          </Text12>
          <Text18>For App Developers:</Text18>
          <Text12>{'\n'}🔷 Creating a new app with </Text12>
          <TouchableOpacity onPress={onNewARchBtnPress}>
            <Text12 textStyle={{fontWeight: 'bold'}}>
              the New Architecture
            </Text12>
          </TouchableOpacity>
          <Text12>
            is simplified with the provided template.
            {'\n'}🔷Migrating existing apps involves following the adoption
            guidelines.
          </Text12>
          <Text18>For Library Maintainers:</Text18>
          <Text12>
            {'\n'}🔷 Understand the fundamental concepts highlighted in the
          </Text12>
          <TouchableOpacity onPress={onPillarBtnPress}>
            <Text12 textStyle={{fontWeight: 'bold'}}>Pillars section.</Text12>
          </TouchableOpacity>

          <Text12>
            {'\n'}🔷 Then, for a how-to guide on supporting the New
            Architecture, check out the
          </Text12>
          <TouchableOpacity onPress={onMigratingBtnPress}>
            <Text12 textStyle={{fontWeight: 'bold'}}>Migration guide.</Text12>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NewArchIntroduction;
