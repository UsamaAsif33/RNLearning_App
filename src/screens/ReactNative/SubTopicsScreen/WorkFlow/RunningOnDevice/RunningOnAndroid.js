import {
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  View,
} from 'react-native';
import {useState} from 'react';

import styles from '../Styles';
import {Text12, Text18, Text20} from '../../../../../components/Text';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {OsBtnList} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const RunningOnAndroid = () => {
  const [isSelected, setIsSelected] = useState('macOS/Windows');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <ScrollView>
        <View>
          <Text18>Development OS</Text18>
          <View style={{flexDirection: 'row'}}>
            {OsBtnList?.map(item => {
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
          {/* ENABLE DEBUGGING OVER USB */}
          <Text18>1. Enable Debugging over USB</Text18>
          <Text12>
            To install and run apps during development on most Android devices,
            enable USB Debugging. Tap the Build number in Settings → About phone
            → Software info and then tapping the Build number row at the bottom
            seven times. to activate "Developer options". Then, turn on "USB
            debugging" in Settings → Developer options.
          </Text12>

          {/* PLUGGING VIA USB */}
          <Text18>2. Plug in your device via USB</Text18>
          {isSelected == 'macOS/Windows' ? (
            <>
              <Text12>
                Plug in your device via USB to your development machine. Check
                if your device is properly connected to ADB (Android Debug
                Bridge) by running adb devices.
              </Text12>
            </>
          ) : (
            <>
              <Text12>
                Go ahead and plug in your device via USB to your development
                machine. Next, check the manufacturer code by using
              </Text12>
              <OnWebsiteDocsLink
                name={'lsusb'}
                link={'https://github.com/jlhonora/lsusb'}
              />
              <Text12>
                (on mac, you must first install lsusb). lsusb should output
                something like this:
              </Text12>
              <CopyAbleText
                content={`$ lsusb
            Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
            Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
            Bus 001 Device 003: ID 22b8:2e76 Motorola PCS
            Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
            Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
            Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
            Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub`}
              />
              <Text12>
                These lines represent the USB devices currently connected to
                your machine. You want the line that represents your phone. If
                you're in doubt, try unplugging your phone and running the
                command again:
              </Text12>
              <CopyAbleText
                content={`$ lsusb
Bus 002 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 002 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 001 Device 002: ID 8087:0024 Intel Corp. Integrated Rate Matching Hub
Bus 001 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub
Bus 004 Device 001: ID 1d6b:0003 Linux Foundation 3.0 root hub
Bus 003 Device 001: ID 1d6b:0002 Linux Foundation 2.0 root hub`}
              />

              <Text12>
                You'll see that after removing the phone, the line which has the
                phone model ("Motorola PCS" in this case) disappeared from the
                list. This is the line that we care about. Bus 001 Device 003:
                ID 22b8:2e76 Motorola PCS From the above line, you want to grab
                the first four digits from the device ID: 22b8:2e76 In this
                case, it's 22b8. That's the identifier for Motorola. You'll need
                to input this into your udev rules in order to get up and
                running:
              </Text12>

              <CopyAbleText
                content={`echo 'SUBSYSTEM=="usb", ATTR{idVendor}=="22b8", MODE="0666", GROUP="plugdev"' | sudo tee /etc/udev/rules.d/51-android-usb.rules`}
              />
              <Text12>
                Make sure that you replace 22b8 with the identifier you get in
                the above command. Now check that your device is properly
                connecting to ADB, the Android Debug Bridge, by running adb
                devices.
              </Text12>
            </>
          )}

          <CopyAbleText
            content={`$ adb devices\nList of devices attached\nemulator-5554 offline   # Google emulator\n14ed2fcc device         # Physical device`}
          />
          <Text12>
            Seeing device in the right column means the device is connected. You
            must have only one device connected at a time.
          </Text12>

          {/* RUN YOUR APP */}
          <Text18>3. Run your app</Text18>
          <Text12>
            For Npm : use first command , and for Yarn use Second Command
          </Text12>
          <CopyAbleText content={`npm run android\nyarn android`} />
          <Text12>
            Seeing device in the right column means the device is connected. You
            must have only one device connected at a time.
          </Text12>

          {/* CONNECTING TO DEVELOPMENT SERVER */}
          <Text20>Connecting to the development server</Text20>
          <Text12>
            There are several ways of accomplishing this, depending on whether
            you have access to a USB cable or a Wi-Fi network.
          </Text12>

          {/* USING ADB REVERSE */}
          <Text18>Method 1: Using adb reverse (recommended)</Text18>
          <Text12>
            You can use this method if your device is running Android 5.0
            (Lollipop) or newer, it has USB debugging enabled, and it is
            connected via USB to your development machine. Run the following in
            a command prompt:
          </Text12>
          <CopyAbleText
            content={`$ adb -s <device name> reverse tcp:8081 tcp:8081`}
          />

          {/* CONNECTING VIA WIFI */}
          <Text18>Method 2: Connect via Wi-Fi</Text18>
          <Text12>
            {' '}
            You'll first need to install the app on your device using a USB
            cable, but once that has been done you can debug wirelessly by
            following these instructions. You'll need your development machine's
            current IP address before proceeding.
            {'\n'}👉Make sure your laptop and your phone are on the same Wi-Fi
            network.
            {'\n'}👉Open your React Native app on your device.
            {'\n'}👉You'll see a red screen with an error. This is OK. The
            following steps will fix that.
            {'\n'}👉Open the in-app Dev Menu.
            {'\n'}👉Go to Dev Settings → Debug server host & port for device.
            {'\n'}👉Type in your machine's IP address and the port of the local
            dev server (e.g. 10.0.1.1:8081).
            {'\n'}👉Go back to the Dev Menu and select Reload JS. You can now
            enable Live reloading from the Dev Menu. Your app will reload
            whenever your JavaScript code has changed.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RunningOnAndroid;
