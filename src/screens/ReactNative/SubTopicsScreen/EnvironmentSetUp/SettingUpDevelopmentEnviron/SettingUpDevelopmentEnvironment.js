import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import Header from '../../../../../components/Header/Header';
import {
  Text12,
  Text18,
  Text20,
  Text24,
  Text28,
} from '../../../../../components/Text';
import styles from '../Styles';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const SettingUpDevelopEnvironment = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text24>Out-of-Tree Platforms</Text24>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SettingUpDevelopEnvironment;
