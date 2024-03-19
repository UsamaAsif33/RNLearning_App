import {ScrollView, View, Image, SafeAreaView} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const NavigatingBetweenScreens = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Navigating Between Screens:</Text28>
          <Text12>
            React Native apps often consist of multiple screens, which are
            managed using navigation components. For beginners, React Navigation
            is recommended due to its simplicity and support for common
            navigation patterns like stack and tab navigation on both Android
            and iOS. Alternatively, for projects integrating React Native into
            existing native navigation systems or seeking an alternative,
            react-native-navigation offers native navigation support for both
            platforms.
          </Text12>
          <Text28>{'\n'}React Navigation</Text28>
          <Text12>
            The community solution to navigation is a standalone library that
            allows developers to set up the screens of an app with a few lines
            of code.
          </Text12>

          <Text28>{'\n'}Installation and setup</Text28>
          <CopyAbleText
            content={`npm install @react-navigation/native @react-navigation/native-stack`}
          />

          <Text12>
            If you have an Expo managed project, install the dependencies with
            expo:
          </Text12>
          <CopyAbleText
            content={`npx expo install react-native-screens react-native-safe-area-context`}
          />

          <Text12>
            If you have a bare React Native project, install the dependencies
            with npm:
          </Text12>
          <CopyAbleText
            content={`npm install react-native-screens react-native-safe-area-context`}
          />

          <Text12>
            For iOS with bare React Native project, make sure you have CocoaPods
            installed. Then install the pods to complete the installation:
          </Text12>
          <CopyAbleText
            content={`cd ios
            pod install
            cd ..`}
          />

          <Text12>
            Now, you need to wrap the whole app in NavigationContainer. Usually
            you'd do this in your entry file, such as index.js or App.js:
          </Text12>
          <CopyAbleText
            content={`import * as React from 'react';
            import {NavigationContainer} from '@react-navigation/native';
            
            const App = () => {
              return (
                <NavigationContainer>
                  {/* Rest of your app code */}
                </NavigationContainer>
              );
            };
            
            export default App;`}
          />

          <Text28>{'\n'}Usage</Text28>
          <Text12>
            Now you can create an app with a home screen and a profile screen:
          </Text12>
          <CopyAbleText
            content={`import * as React from 'react';
            import {NavigationContainer} from '@react-navigation/native';
            import {createNativeStackNavigator} from '@react-navigation/native-stack';
            
            const Stack = createNativeStackNavigator();
            
            const MyStack = () => {
              return (
                <NavigationContainer>
                  <Stack.Navigator>
                    <Stack.Screen
                      name="Home"
                      component={HomeScreen}
                      options={{title: 'Welcome'}}
                    />
                    <Stack.Screen name="Profile" component={ProfileScreen} />
                  </Stack.Navigator>
                </NavigationContainer>
              );
            };`}
          />

          <Text12>
            Each screen takes a component prop that is a React component. Those
            components receive a prop called navigation which has various
            methods to link to other screens. For example, you can use
            navigation.navigate to go to the Profile screen:
          </Text12>
          <CopyAbleText
            content={`const HomeScreen = ({navigation}) => {
              return (
                <Button
                  title="Go to Jane's profile"
                  onPress={() =>
                    navigation.navigate('Profile', {name: 'Jane'})
                  }
                />
              );
            };
            const ProfileScreen = ({navigation, route}) => {
              return <Text>This is {route.params.name}'s profile</Text>;
            };`}
          />
          <Text12>
            This native-stack navigator uses the native APIs:
            UINavigationController on iOS and Fragment on Android so that
            navigation built with createNativeStackNavigator will behave the
            same and have the same performance characteristics as apps built
            natively on top of those APIs.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default NavigatingBetweenScreens;
