import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import {FontAwesome5} from '../assets/vectorIcons/index';
import {Ionicons} from '../assets/vectorIcons/index';
import {MaterialIcons} from '../assets/vectorIcons/index';
import {navigationRef} from './rootNavigation';
import {COLORS} from '../shared/theme';
import Support from '../screens/Support/Support';
import RoadMaps from '../screens/RoadMaps/RoadMaps';
import ReactNative from '../screens/ReactNative/ReactNative';
import ImageView from '../components/ImageView/ImageView';
import NestedScreen from '../screens/ReactNative/SubTopicsScreen/SubTopicsScreen';
import Introduction from '../screens/ReactNative/SubTopicsScreen/Basics/Introduction/Introduction';
import CoreAndNative from '../screens/ReactNative/SubTopicsScreen/Basics/CoreAndNativeComponent/CoreAndNative';
import HandlingTextInput from '../screens/ReactNative/SubTopicsScreen/Basics/HandlingTextInput/HandlingTextInput';
import ScrollViewScreen from '../screens/ReactNative/SubTopicsScreen/Basics/ScrollView/ScrollView';
import ListView from '../screens/ReactNative/SubTopicsScreen/Basics/ListView/ListView';
import ReactFundamentals from '../screens/ReactNative/SubTopicsScreen/Basics/ReactFundamentals/ReactFundamentals';
import TroubleShooting from '../screens/ReactNative/SubTopicsScreen/Basics/TroubleShooting/TroubleShooting';
import MoreResources from '../screens/ReactNative/SubTopicsScreen/Basics/MoreResources/MoreResources';
import PlatfromSpecificCode from '../screens/ReactNative/SubTopicsScreen/Basics/PlatFormSpecific/PlatfromSpecificCode';
import Testing from '../screens/ReactNative/SubTopicsScreen/Testing/Testing';
import PerformanceOverView from '../screens/ReactNative/SubTopicsScreen/Performance/PerformanceOverview/PerformanceOverview';
import SpeedingUpYourBuildingPhase from '../screens/ReactNative/SubTopicsScreen/Performance/SpeedingUpYourBuildingPhase/SpeedingUpYourBuildingPhase';
import FastRefresh from '../screens/ReactNative/SubTopicsScreen/WorkFlow/FastRefresh/FastRefresh';
import Metro from '../screens/ReactNative/SubTopicsScreen/WorkFlow/Metro/Metro';
import RunningOnDevice from '../screens/ReactNative/SubTopicsScreen/WorkFlow/RunningOnDevice/RunningOnDevice';
import UpgradingToNewVersions from '../screens/ReactNative/SubTopicsScreen/WorkFlow/UpgradingToNewVersions/UpgradingToNewVersions';
import UsingLibraries from '../screens/ReactNative/SubTopicsScreen/WorkFlow/UsingLibraries/UsingLibraries';
import UsingTypeScript from '../screens/ReactNative/SubTopicsScreen/WorkFlow/UsingTypeScript/UsingTypeScript';
import Accessibility from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/Accessibility/Accessibility';
import Animations from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/Animations/Animations';
import GestureResponderSystem from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/GestureResponderSystem/GestureResponderSystem';
import HandlingTouches from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/HandlingTouches/HandlingTouches';
import NavigatingBetweenScreens from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/NavigatingBetweenScreens/NavigatingBetweenScreens';
import Networking from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/Networking/Networking';
import Security from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/Security/Security';
import ColorReference from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/ColorReference/ColorReference';
import HeightAndWidth from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/HeightAndWidth/HeightAndWidth';
import Images from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/Images/Images';
import LayoutWithFlexbox from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/LayoutWithFlexbox/LayoutWithFlexbox';
import Style from '../screens/ReactNative/SubTopicsScreen/UI&Interaction/Style/Style';
import HeadlessJS from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/HeadlessJS/HeadlessJS';
import ReactNativeGradlePlugin from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/ReactNativeGradlePlugin/ReactNativeGradlePlugin';
import LinkingLibraries from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/LinkingLibraries/LinkingLibraries';
import IOSCommunicationBetweenNativeAndReactNative from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/IOSCommunicationBetweenNativeAndReactNative/IOSCommunicationBetweenNativeAndReactNative';
import AppExtensions from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/AppExtensions/AppExtensions';
import PublishingToAppleAppStore from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/PublishingToAppleAppStore/PublishingToAppleAppStore';
import MigratingToTheNewArchitecture from '../screens/ReactNative/SubTopicsScreen/MigratingNewArchitecture/MigratingToTheNewArchitecture/MigratingToTheNewArchitecture';
import EnablingIniOSLibrary from '../screens/ReactNative/SubTopicsScreen/MigratingNewArchitecture/EnablingIniOSLibrary/EnablingIniOSLibrary';
import JavascriptEnvironment from '../screens/ReactNative/SubTopicsScreen/javascriptRunTime/jsEnvironment/JavascriptEnvironment';
import Timers from '../screens/ReactNative/SubTopicsScreen/javascriptRunTime/Timers/Timers';
import WhyNewArchitecture from '../screens/ReactNative/SubTopicsScreen/NewArchitecture/WhyNewArchitecture/WhyNewArchitecture';
import CreateNewArchitecture from '../screens/ReactNative/SubTopicsScreen/NewArchitecture/CreateNewArchitecture/CreateNewArchitecture';
import WhatComposeNewArch from '../screens/ReactNative/SubTopicsScreen/NewArchitecture/WhatComposeNewArch/WhatComposeNewArch';
import PrerequisitesForLibraries from '../screens/ReactNative/SubTopicsScreen/MigratingNewArchitecture/PrerequisitesForLibraries/PrerequisitesForLibraries';
import NewArchIntroduction from '../screens/ReactNative/SubTopicsScreen/NewArchitecture/Introduction/NewArchIntroduction';
import Hermes from '../screens/ReactNative/SubTopicsScreen/javascriptRunTime/Hermes/Hermes';
import DebuggingBasics from '../screens/ReactNative/SubTopicsScreen/Debugging/DebuggingBasics/DebuggingBasics';
import DebuggingReleaseBuilds from '../screens/ReactNative/SubTopicsScreen/Debugging/DebuggingReleaseBuilds/DebuggingReleaseBuilds';
import NativeDebugging from '../screens/ReactNative/SubTopicsScreen/Debugging/NativeDebugging/NativeDebugging';
import OtherDebuggingMethods from '../screens/ReactNative/SubTopicsScreen/Debugging/OtherDebuggingMethods/OtherDebuggingMethods';
import ReactDevTools from '../screens/ReactNative/SubTopicsScreen/Debugging/ReactDevTools/ReactDevTools';
import PublishingToGooglePlayStore from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/PublishingToGooglePlayStore/PublishingToGooglePlayStore';
import CommunicationBetweenNativeAndReactNative from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/CommunicationBetweenNativeAndReactNative/CommunicationBetweenNativeAndReactNative';
import RunningOnSimulator from '../screens/ReactNative/SubTopicsScreen/AndroidAndIOSGuide/RunningOnSimulator/RunningOnSimulator';
import DirectManipulation from '../screens/ReactNative/SubTopicsScreen/NativeComponents/DirectManipulation/DirectManipulation';

import AndroidNativeUIComponents from '../screens/ReactNative/SubTopicsScreen/NativeComponents/AndroidNativeUIComponents/AndroidNativeUIComponents';
import SpeedingUpCiBuilds from '../screens/ReactNative/SubTopicsScreen/Performance/SpeedingUpCIBuilds/SpeedingUpCiBuilds';
import OptimizingFlatlistConfiguration from '../screens/ReactNative/SubTopicsScreen/Performance/OptimizingFlatlistConfiguration/OptimizingFlatlistConfiguration';
import RAMBundlesAndInlineRequires from '../screens/ReactNative/SubTopicsScreen/Performance/RamBundlesAndInlineRequires/RAMBundlesAndInlineRequires';
import Profiling from '../screens/ReactNative/SubTopicsScreen/Performance/Profiling/Profiling';
import ProfilingWithHermes from '../screens/ReactNative/SubTopicsScreen/Performance/ProfilingWithHermes/ProfilingWithHermes';
import Codegen from '../screens/ReactNative/SubTopicsScreen/NewArchitecture/Codegen/Codegen';
import WhatBackwardCompatability from '../screens/ReactNative/SubTopicsScreen/NewArchitecture/WhatBackwardCompatability/WhatBackwardCompatability';
import AndroidNativeModules from '../screens/ReactNative/SubTopicsScreen/NativeModules/AndroidNativeModules/AndroidNativeModules';
import IosNativeModules from '../screens/ReactNative/SubTopicsScreen/NativeModules/IosNativeModules/IosNativeModules';
import NativeModulesIntro from '../screens/ReactNative/SubTopicsScreen/NativeModules/NativeModulesIntro/NativeModulesIntro';
import NativeModulesNPMPackageSetup from '../screens/ReactNative/SubTopicsScreen/NativeModules/NativeModulesNPMPackageSetup/NativeModulesNPMPackageSetup';
import IOSNativeUIComponents from '../screens/ReactNative/SubTopicsScreen/NativeComponents/iOSNativeUIComponents/iOSNativeUIComponents';
import SettingUpDevelopEnvironment from '../screens/ReactNative/SubTopicsScreen/EnvironmentSetUp/SettingUpDevelopmentEnviron/SettingUpDevelopmentEnvironment';
import OutOfTreePlatform from '../screens/ReactNative/SubTopicsScreen/EnvironmentSetUp/OutOfTreePlatform/OutOfTreePlatform';
import BundlingForTvDevices from '../screens/ReactNative/SubTopicsScreen/EnvironmentSetUp/BundlingForTvDevices/BundlingForTvDevices';
import IntegratingWithAndroidFragment from '../screens/ReactNative/SubTopicsScreen/EnvironmentSetUp/IntegratingWithAndroidFragment/IntegratingWithAndroidFragment';
import IntegrationWithExistingApps from '../screens/ReactNative/SubTopicsScreen/EnvironmentSetUp/IntegrationWithExistingApps/IntegrationWithExistingApps';

const ReactNativeStack = createNativeStackNavigator();
function ReactNativeScreens() {
  return (
    <ReactNativeStack.Navigator screenOptions={{headerShown: false}}>
      

      <ReactNativeStack.Screen name="ReactNative" component={ReactNative} />
      <ReactNativeStack.Screen
        name="AndroidNativeModules"
        component={AndroidNativeModules}
      />
      <ReactNativeStack.Screen
        name="IosNativeModules"
        component={IosNativeModules}
      />
      <ReactNativeStack.Screen
        name="NativeModulesIntro"
        component={NativeModulesIntro}
      />
      <ReactNativeStack.Screen
        name="NativeModulesNPMPackageSetup"
        component={NativeModulesNPMPackageSetup}
      />
      <ReactNativeStack.Screen
        name="DirectManipulation"
        component={DirectManipulation}
      />
      <ReactNativeStack.Screen
        name="IOSNativeUIComponents"
        component={IOSNativeUIComponents}
      />
      <ReactNativeStack.Screen
        name="AndroidNativeUIComponents"
        component={AndroidNativeUIComponents}
      />
      <ReactNativeStack.Screen
        name="SubTopicsScreen"
        component={NestedScreen}
      />
      <ReactNativeStack.Screen name="Introduction" component={Introduction} />
      <ReactNativeStack.Screen name="CoreAndNative" component={CoreAndNative} />
      <ReactNativeStack.Screen
        name="HandlingTextInput"
        component={HandlingTextInput}
      />
      <ReactNativeStack.Screen
        name="ScrollViewScreen"
        component={ScrollViewScreen}
      />
      <ReactNativeStack.Screen name="ListView" component={ListView} />
      <ReactNativeStack.Screen
        name="ReactFundamentals"
        component={ReactFundamentals}
      />
      <ReactNativeStack.Screen
        name="TroubleShooting"
        component={TroubleShooting}
      />
      <ReactNativeStack.Screen name="MoreResources" component={MoreResources} />
      <ReactNativeStack.Screen
        name="PlatfromSpecificCode"
        component={PlatfromSpecificCode}
      />
      <ReactNativeStack.Screen name="Testing" component={Testing} />
      <ReactNativeStack.Screen name="FastRefresh" component={FastRefresh} />
      <ReactNativeStack.Screen name="Metro" component={Metro} />
      <ReactNativeStack.Screen
        name="RunningOnDevice"
        component={RunningOnDevice}
      />
      <ReactNativeStack.Screen
        name="PerformanceOverView"
        component={PerformanceOverView}
      />
      <ReactNativeStack.Screen
        name="SpeedingUpYourBuildingPhase"
        component={SpeedingUpYourBuildingPhase}
      />
      <ReactNativeStack.Screen
        name="SpeedingUpCiBuilds"
        component={SpeedingUpCiBuilds}
      />
      <ReactNativeStack.Screen
        name="OptimizingFlatlistConfiguration"
        component={OptimizingFlatlistConfiguration}
      />
      <ReactNativeStack.Screen
        name="RAMBundlesAndInlineRequires"
        component={RAMBundlesAndInlineRequires}
      />
      <ReactNativeStack.Screen name="Profiling" component={Profiling} />
      <ReactNativeStack.Screen
        name="ProfilingWithHermes"
        component={ProfilingWithHermes}
      />
      <ReactNativeStack.Screen
        name="UpgradingToNewVersions"
        component={UpgradingToNewVersions}
      />
      <ReactNativeStack.Screen
        name="UsingLibraries"
        component={UsingLibraries}
      />
      <ReactNativeStack.Screen
        name="UsingTypeScript"
        component={UsingTypeScript}
      />
      <ReactNativeStack.Screen
        name="RunningOnSimulator"
        component={RunningOnSimulator}
      />
      <ReactNativeStack.Screen name="Accessibility" component={Accessibility} />
      <ReactNativeStack.Screen name="Animations" component={Animations} />
      <ReactNativeStack.Screen
        name="GestureResponderSystem"
        component={GestureResponderSystem}
      />
      <ReactNativeStack.Screen
        name="HandlingTouches"
        component={HandlingTouches}
      />
      <ReactNativeStack.Screen
        name="NavigatingBetweenScreens"
        component={NavigatingBetweenScreens}
      />
      <ReactNativeStack.Screen name="Networking" component={Networking} />
      <ReactNativeStack.Screen name="Security" component={Security} />
      <ReactNativeStack.Screen
        name="ColorReference"
        component={ColorReference}
      />
      <ReactNativeStack.Screen
        name="HeightAndWidth"
        component={HeightAndWidth}
      />
      <ReactNativeStack.Screen name="Images" component={Images} />
      <ReactNativeStack.Screen
        name="LayoutWithFlexbox"
        component={LayoutWithFlexbox}
      />
      <ReactNativeStack.Screen
        name="CommunicationBetweenNativeAndReactNative"
        component={CommunicationBetweenNativeAndReactNative}
      />
      <ReactNativeStack.Screen name="Style" component={Style} />
      <ReactNativeStack.Screen name="HeadlessJS" component={HeadlessJS} />
      <ReactNativeStack.Screen
        name="LinkingLibraries"
        component={LinkingLibraries}
      />
      <ReactNativeStack.Screen
        name="IOSCommunicationBetweenNativeAndReactNative"
        component={IOSCommunicationBetweenNativeAndReactNative}
      />
      <ReactNativeStack.Screen name="AppExtensions" component={AppExtensions} />
      <ReactNativeStack.Screen
        name="PublishingToAppleAppStore"
        component={PublishingToAppleAppStore}
      />
      <ReactNativeStack.Screen
        name="MigratingToTheNewArchitecture"
        component={MigratingToTheNewArchitecture}
      />
      <ReactNativeStack.Screen
        name="EnablingIniOSLibrary"
        component={EnablingIniOSLibrary}
      />
      <ReactNativeStack.Screen
        name="JavascriptEnvironment"
        component={JavascriptEnvironment}
      />
      <ReactNativeStack.Screen name="Timers" component={Timers} />
      <ReactNativeStack.Screen
        name="ReactNativeGradlePlugin"
        component={ReactNativeGradlePlugin}
      />
      <ReactNativeStack.Screen
        name="NewArchIntroduction"
        component={NewArchIntroduction}
      />
      <ReactNativeStack.Screen
        name="WhyNewArchitecture"
        component={WhyNewArchitecture}
      />
      <ReactNativeStack.Screen
        name="CreateNewArchitecture"
        component={CreateNewArchitecture}
      />
      <ReactNativeStack.Screen
        name="whatComposeNewArchitecture"
        component={WhatComposeNewArch}
      />
      <ReactNativeStack.Screen
        name="PrerequisitesForLibraries"
        component={PrerequisitesForLibraries}
      />
      <ReactNativeStack.Screen name="Hermes" component={Hermes} />
      <ReactNativeStack.Screen
        name="DebuggingBasics"
        component={DebuggingBasics}
      />
      <ReactNativeStack.Screen
        name="DebuggingReleaseBuilds"
        component={DebuggingReleaseBuilds}
      />
      <ReactNativeStack.Screen
        name="NativeDebugging"
        component={NativeDebugging}
      />
      <ReactNativeStack.Screen
        name="OtherDebuggingMethods"
        component={OtherDebuggingMethods}
      />
      <ReactNativeStack.Screen name="ReactDevTools" component={ReactDevTools} />
      <ReactNativeStack.Screen
        name="PublishingToGooglePlayStore"
        component={PublishingToGooglePlayStore}
      />
      <ReactNativeStack.Screen name="Codegen" component={Codegen} />
      <ReactNativeStack.Screen
        name="WhatBackwardCompatability"
        component={WhatBackwardCompatability}
      />
        <ReactNativeStack.Screen
        name="SettingUpDevelopEnvironment"
        component={SettingUpDevelopEnvironment}
      />
       <ReactNativeStack.Screen
        name="OutOfTreePlatform"
        component={OutOfTreePlatform}
      />
       <ReactNativeStack.Screen
        name="BundlingForTvDevices"
        component={BundlingForTvDevices}
      />
      <ReactNativeStack.Screen
        name="IntegratingWithAndroidFragment"
        component={IntegratingWithAndroidFragment}
      />
        <ReactNativeStack.Screen
        name="IntegrationWithExistingApps"
        component={IntegrationWithExistingApps}
      />
    </ReactNativeStack.Navigator>
  );
}

const RoadMapStack = createNativeStackNavigator();
function RoadMapScreens() {
  return (
    <RoadMapStack.Navigator screenOptions={{headerShown: false}}>
      <RoadMapStack.Screen name="RoadMaps" component={RoadMaps} />
      <RoadMapStack.Screen
        name="RoadMapsDetail"
        component={ImageView}
        options={{headerShown: false}}
      />
    </RoadMapStack.Navigator>
  );
}

const AccountStack = createNativeStackNavigator();
function SupportScreens() {
  return (
    <AccountStack.Navigator screenOptions={{headerShown: false}}>
      <AccountStack.Screen name="ContactSupport" component={Support} />
    </AccountStack.Navigator>
  );
}

const MainTabs = createBottomTabNavigator();
function MainTabsScreen() {
  return (
    <MainTabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: COLORS.darkBlue,
        tabBarInactiveTintColor: COLORS.primary,
        tabBarActiveBackgroundColor: COLORS.white,
        tabBarInactiveBackgroundColor: COLORS.white,
        headerShown: false,
        tabBarStyle: {
          borderTopWidth: 0,
        },
      }}>
      <MainTabs.Screen
        name="React Native"
        component={ReactNativeScreens}
        options={{
          tabBarLabel: 'React Native',
          tabBarIcon: ({focused}) => (
            <Ionicons
              name={'logo-react'}
              size={20}
              color={focused ? COLORS.darkBlue : COLORS.primary}
            />
          ),
        }}
      />
      <MainTabs.Screen
        name="Road Maps"
        component={RoadMapScreens}
        options={{
          tabBarLabel: 'Road Maps',
          tabBarIcon: ({focused}) => (
            <FontAwesome5
              name={'road'}
              size={20}
              color={focused ? COLORS.darkBlue : COLORS.primary}
            />
          ),
        }}
      />
      <MainTabs.Screen
        name="Support"
        component={SupportScreens}
        options={{
          tabBarLabel: 'Support',
          tabBarIcon: ({focused}) => (
            <MaterialIcons
              name={'support-agent'}
              size={20}
              color={focused ? COLORS.darkBlue : COLORS.primary}
            />
          ),
        }}
      />
    </MainTabs.Navigator>
  );
}

function Route() {
  return (
    <NavigationContainer ref={navigationRef}>
      <MainTabsScreen />
    </NavigationContainer>
  );
}

export default Route;
