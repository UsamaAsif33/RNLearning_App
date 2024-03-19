import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';


const NativeModulesNPMPackageSetup = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28 >
            Native Modules NPM Package Setup:
          </Text28>
          <Text12 >
            Native modules are usually distributed as npm packages, except that
            on top of the usual JavaScript they will include some native code
            per platform. To understand more about npm packages you may find
            this guide useful.
            {'\n'}
            {'\n'}
            To get set up with the basic project structure for a native module
            we will use the community tool called create-react-native-library.
            You can go ahead further and dive deep into how that library works,
            but for our needs we will only execute the basic script:
          </Text12>
          <CopyAbleText
            content={`npx create-react-native-library@latest react-native-awesome-module`}
          />
          <Text12 >
            Where react-native-awesome-module is the name you would like for the
            new module. After doing this you will navigate into
            react-native-awesome-module folder and bootstrap the example project
            by running:
          </Text12>
          <CopyAbleText content={`yarn`} />
          <Text12 >
            When the bootstrap is done, you will be able to start the example
            app by executing one of the following commands:
          </Text12>
          <CopyAbleText
            content={`# Android app
            yarn example android
            # iOS app
            yarn example ios`}
          />
          <Text12 >
            When all steps above are done, you will be able to continue with
            Android Native Modules or iOS Native Modules guides to add in some
            code.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NativeModulesNPMPackageSetup;
