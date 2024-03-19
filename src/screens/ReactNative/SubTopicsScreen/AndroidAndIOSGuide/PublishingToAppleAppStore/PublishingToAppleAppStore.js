import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';
import {Paths} from '../../../../../assets/images';

const PublishingToAppleAppStore = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Publishing to Apple App Store:</Text28>
          <Text12>
            The publishing process is the same as any other native iOS app, with
            some additional considerations to take into account.
          </Text12>
          <Text28>1. Configure release scheme</Text28>
          <Text12>
            Building an app for distribution in the App Store requires using the
            Release scheme in Xcode. Apps built for Release will automatically
            disable the in-app Dev Menu, which will prevent your users from
            inadvertently accessing the menu in production. It will also bundle
            the JavaScript locally, so you can put the app on a device and test
            whilst not connected to the computer.
            {'\n'}
            {'\n'}
            To configure your app to be built using the Release scheme, go to
            Product → Scheme → Edit Scheme. Select the Run tab in the sidebar,
            then set the Build Configuration dropdown to Release.
          </Text12>

          <Image
            style={{width: 300, height: 200, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.PublishingToAppleAppStore}
          />
          <Text28>Pro Tips:</Text28>
          <Text12>
            As your App Bundle grows in size, you may start to see a blank
            screen flash between your splash screen and the display of your root
            application view. If this is the case, you can add the following
            code to AppDelegate.m in order to keep your splash screen displayed
            during the transition.
          </Text12>
          <CopyAbleText
            content={`
            // Place this code after "[self.window makeKeyAndVisible]" and before "return YES;"
            UIStoryboard *sb = [UIStoryboard storyboardWithName:@"LaunchScreen" bundle:nil];
            UIViewController *vc = [sb instantiateInitialViewController];
            rootView.loadingView = vc.view;
            `}
          />
          <Text12>
            The static bundle is built every time you target a physical device,
            even in Debug. If you want to save time, turn off bundle generation
            in Debug by adding the following to your shell script in the Xcode
            Build Phase Bundle React Native code and images:
          </Text12>
          <CopyAbleText
            content={`
            if [ {"$CONFIGURATION"} == "Debug" ]; then
            export SKIP_BUNDLING=true
           fi
            `}
          />
          <Text28>2. Build app for release</Text28>
          <Text12>
            You can now build your app for release by tapping Cmd ⌘ + B or
            selecting Product → Build from the menu bar. Once built for release,
            you'll be able to distribute the app to beta testers and submit the
            app to the App Store.
            {'\n'}
            {'\n'}
            Once you are done with the testing and ready to publish to App
            Store, follow along with this guide.
            {'\n'}
            {'\n'}
            🔷Launch your terminal, and navigate into the iOS folder of your app
            and type open. .{'\n'}
            🔷Double click on YOUR_APP_NAME.xcworkspace. It should launch XCode.
            {'\n'}
            🔷Click on Product → Archive. Make sure to set the device to "Any
            iOS Device (arm64)".
            {'\n'}
            🔷After the archive is completed, in the archive window, click on
            Distribute App.
            {'\n'}
            🔷Click on App Store Connect now (if you want to publish in App
            Store).
            {'\n'}
            🔷Click Upload → Make sure all the check boxes are selected, hit
            Next.
            {'\n'}
            🔷Choose between Automatically manage signing and Manually manage
            signing based on your needs.
            {'\n'}
            🔷Click on Upload.
            {'\n'}
            🔷Now you can find it in the App Store Connect under TestFlight.
            {'\n'}
            {'\n'}
            Now fill up the necessary information and in the Build Section,
            select the build of the app and click on Save → Submit For Review.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PublishingToAppleAppStore;
