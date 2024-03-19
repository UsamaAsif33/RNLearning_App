import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import styles from '../Styles';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const RunningOnSimulator = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Running On Simulator:</Text28>
          <Text28>Starting the simulator:</Text28>
          <Text12>
            Once you have your React Native project initialized, you can run the
            following command inside the newly created project directory.
          </Text12>

          <CopyAbleTextWithButton
            content1={`npm run ios`}
            content2={`yarn ios`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />

          <Text12>
            If everything is set up correctly, you should see your new app
            running in the iOS Simulator shortly.
          </Text12>
          <Text28>Specifying a device:</Text28>
          <Text12>
            You can specify the device the simulator should run with the
            --simulator flag, followed by the device name as a string. The
            default is "iPhone 14". If you wish to run your app on an iPhone SE
            (3rd generation), run the following command:
          </Text12>

          <CopyAbleTextWithButton
            content1={`npm run ios -- --simulator="iPhone SE (3rd generation)"`}
            content2={`yarn ios --simulator "iPhone SE (3rd generation)"`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />
          <Text12>
            The device names correspond to the list of devices available in
            Xcode. You can check your available devices by running xcrun simctl
            list devices from the console.
          </Text12>
          <Text28>Specifying a version of device:</Text28>
          <Text12>
            If you have multiple iOS versions installed, you also need to
            specify it's appropiate version. E.g. To run your app on an iPhone
            14 Pro (16.0) run the following command:
          </Text12>

          <CopyAbleTextWithButton
            content1={`npm run ios -- --simulator="iPhone 14 Pro (16.0)"`}
            content2={`yarn ios --simulator "iPhone 14 Pro (16.0)"`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />
          <Text28>Specifying an UDID:</Text28>
          <Text12>
            You can specify the device UDID returned from xcrun simctl list
            devices command. E.g. To run your app with UDID
            AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA run the following command:
          </Text12>

          <CopyAbleTextWithButton
            content1={`npm run ios -- --udid="AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"`}
            content2={`yarn ios --udid "AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA"`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RunningOnSimulator;
