import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';
import {Paths} from '../../../../../assets/images';

const LinkingLibraries = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Linking Libraries:</Text28>
          <Text12>
            Not every app uses all the native capabilities, and including the
            code to support all those features would impact the binary size...
            But we still want to support adding these features whenever you need
            them.
            {'\n'}
            {'\n'}
            With that in mind we exposed many of these features as independent
            static libraries.
            {'\n'}
            {'\n'}
            For most of the libs it will be as quick as dragging two files,
            sometimes a third step will be necessary, but no more than that.
          </Text12>
          <Text28>
            Here are the few steps to link your libraries that contain native
            code
            {'\n'}
          </Text28>
          <Text28>Automatic linking:</Text28>
          <Text12>Install a library with native dependencies:</Text12>
          <CopyAbleText
            content={`npm install <library-with-native-dependencies> --save
            `}
          />
          <Text12>
            That's it! Next time you build your app the native code will be
            linked thanks to the autolinking mechanism.
          </Text12>
          <Text28>
            Manual linking:
            {'\n'}
          </Text28>
          <Text28>Step 1:</Text28>
          <Text12>
            If the library has native code, there must be an .xcodeproj file
            inside its folder. Drag this file to your project on Xcode (usually
            under the Libraries group on Xcode);
          </Text12>
          <Image
            style={{width: 300, height: 200, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.ManualLinking?.ManualLinkingStep1}
          />
          <Text28>Step 2:</Text28>
          <Text12>
            Click on your main project file (the one that represents the
            .xcodeproj) select Build Phases and drag the static library from the
            Products folder inside the Library you are importing to Link Binary
            With Libraries
          </Text12>
          <Image
            style={{width: 300, height: 200, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.ManualLinking?.ManualLinkingStep2}
          />
          <Text28>Step 3:</Text28>
          <Text12>
            Not every library will need this step, what you need to consider is:
            {'\n'}
            {'\n'}
            Do I need to know the contents of the library at compile time?
            {'\n'}
            {'\n'}
            What that means is, are you using this library on the native side or
            only in JavaScript? If you are only using it in JavaScript, you are
            good to go!
            {'\n'}
            {'\n'}
            If you do need to call it from native, then we need to know the
            library's headers. To achieve that you have to go to your project's
            file, select Build Settings and search for Header Search Paths.
            There you should include the path to your library. (This
            documentation used to recommend using recursive, but this is no
            longer recommended, as it can cause subtle build failures,
            especially with CocoaPods.)
          </Text12>
          <Image
            style={{width: 300, height: 200, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.ManualLinking?.ManualLinkingStep3}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LinkingLibraries;
