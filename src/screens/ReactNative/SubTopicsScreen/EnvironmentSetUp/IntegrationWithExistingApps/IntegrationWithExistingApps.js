import {
  Image,
  ScrollView,
  View,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {useState} from 'react';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {BtnListApps} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';
import AndroidJava from './AndroidJava';
import IOSObjectiveC from './IOSObjectiveC';
import IOSSwift from './IOSSwift';
import AndroidKotlin from './AndroidKotlin';

const IntegrationWithExistingApps = () => {
  const [isSelected, setIsSelected] = useState('Android');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Integration with Existing Apps:</Text28>
          <Text12>
            React Native is great when you are starting a new mobile app from
            scratch. However, it also works well for adding a single view or
            user flow to existing native applications. With a few steps, you can
            add new React Native based features, screens, views, etc. The
            specific steps are different depending on what platform you're
            targeting.
          </Text12>

          <View style={styles?.Container1}>
            <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
              {BtnListApps?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => onBtnPress(item?.name)}
                    key={item?.key}
                    style={[
                      styles?.btnStyle,
                      {
                        backgroundColor:
                          isSelected == item?.name
                            ? COLORS?.primary
                            : COLORS?.lightPrimary,
                      },
                    ]}>
                    <Text12>{item?.name}</Text12>
                  </TouchableOpacity>
                );
              })}
            </View>
            {isSelected == 'Android(Java)' ? (
              <AndroidJava />
            ) : isSelected == 'iOS(Objective-C)' ? (
              <IOSObjectiveC />
            ) : isSelected == 'iOS(Swift)' ? (
              <IOSSwift />
            ) : (
              <AndroidKotlin/>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntegrationWithExistingApps;
