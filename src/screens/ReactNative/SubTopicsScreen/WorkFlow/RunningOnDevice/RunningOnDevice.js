import {Image, SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';
import {useState} from 'react';

import styles from '../Styles';
import {
  Text12,
  Text18,
  Text20,
  Text24,
  Text28,
} from '../../../../../components/Text';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import Header from '../../../../../components/Header/Header';
import {BtnList} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import {Paths} from '../../../../../assets/images';
import RunningOnAndroid from './RunningOnAndroid';

const RunningOnDevice = () => {
  const [isSelected, setIsSelected] = useState('Android');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Running On Device</Text28>
          <View style={{flexDirection: 'row'}}>
            {BtnList?.map(item => {
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
          {isSelected == 'iOS' ? (
            <>
              <Text20>Running your app on iOS devices</Text20>
              <Text18>1. Plug in your device via USB</Text18>
              <Text12 textStyle={styles?.txt12}>
                To run your app on an iOS device, connect it to your Mac via USB
                using a Lightning cable. Navigate to your project's ios folder
                and open the .xcodeproj file (or .xcworkspace if you're using
                CocoaPods) with Xcode. If it's your first time, register your
                device for development by opening the Product menu in Xcode,
                selecting Destination, and choosing your device from the list.
                Xcode will register your device for development.
              </Text12>

              {/* 2. Configure code signing */}
              <Text18>2. Configure code signing</Text18>
              <Text12>Register for an</Text12>
              <OnWebsiteDocsLink
                name=" Apple developer account"
                link={'https://developer.apple.com/'}
              />
              <Text12>if you don't have one yet.</Text12>
              <Text12>
                In Xcode, select your project and main target. Under "General"
                tab, ensure your Apple developer account is chosen in the
                "Signing" section. Repeat for the Tests target.
              </Text12>
              <Image
                source={Paths?.ConfigureCodeSigning}
                style={styles?.imgStyle}
                resizeMode="contain"
              />

              {/* BUILD AND RUN */}
              <Text18>3. Build and Run your app</Text18>
              <Text12>
                Once setup is complete, your device will be listed as the build
                target in the Xcode toolbar and Devices pane (Shift ⇧ + Cmd ⌘ +
                2). Press the Build and run button (Cmd ⌘ + R) or select Run
                from the Product menu to launch your app on your device.
              </Text12>

              {/* CONNECTING TO DEVELOPMENT */}
              <Text20>Connecting to the development server</Text20>
              <Text12>
                For fast iteration on a device, connect to the same Wi-Fi
                network as your computer. Shake your device to access the Dev
                Menu, then enable Live Reload. This allows your app to reload
                whenever your JavaScript code changes.
              </Text12>
              <Image
                source={Paths?.ConnectingToDev}
                style={styles?.imgStyle}
                resizeMode="contain"
              />
              <Text12>
                When trying to connect to the development server you might get a
                red screen with an error saying:{'\n'}"Connection to
                http://localhost:8081/debugger-proxy?role=client timed out. Are
                you running node proxy? If you are running on the device, check
                if you have the right IP address in RCTWebSocketExecutor.m."
                {'\n'}
                To solve this issue check the following points.
              </Text12>
              <Text18>1. Wi-Fi network.</Text18>
              <Text12>
                Make sure your laptop and your phone are on the same Wi-Fi
                network.
              </Text12>
              <Text18>2. IP address</Text18>
              <Text12>
                Make sure that the build script detected the IP address of your
                machine correctly .Open the Report navigator tab, select the
                last Build and search for IP= followed by an IP address. The IP
                address which gets embedded in the app should match your
                machines IP address.
              </Text12>

              <Image
                source={Paths?.Xcode}
                style={styles?.imgStyle}
                resizeMode="contain"
              />
            </>
          ) : (
            <RunningOnAndroid />
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RunningOnDevice;
