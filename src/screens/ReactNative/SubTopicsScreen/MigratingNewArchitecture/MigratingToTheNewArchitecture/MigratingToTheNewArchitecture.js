import {ScrollView, View} from 'react-native';
import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import styles from '../Styles';

const MigratingToTheNewArchitecture = () => {
  return (
    <View style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28 textStyle={styles?.txt28}>
            Migrating to the New Architecture:
          </Text28>

          <Text28 textStyle={styles?.txt28}>
            Getting Started with the New Architecture:
          </Text28>
          <Text12 textStyle={styles?.txt12}>
            This migration guide is designed for React Native library authors
            and application developers. It outlines the steps you need to follow
            to roll out the new Architecture, composed of the new NativeModule
            system (Turbo Module) and the new Renderer (Fabric) to your Android
            and iOS libraries and apps.
          </Text12>
        </View>
      </ScrollView>
    </View>
  );
};

export default MigratingToTheNewArchitecture;
