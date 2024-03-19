import {ScrollView, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useState} from 'react';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {BtnList} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';

const DebuggingReleaseBuilds = () => {
  const [isSelected, setIsSelected] = useState('Android');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Debugging Release Builds</Text28>
          <Text28>{'\n'}Symbolicating a stack trace:</Text28>
          <Text12>
            If a React Native app throws an unhandled exception in a release
            build, the output may be obfuscated and hard to read.
          </Text12>
          <CopyAbleText
            content={`07-15 10:58:25.820 18979 18998 E AndroidRuntime: FATAL EXCEPTION: mqt_native_modules
            07-15 10:58:25.820 18979 18998 E AndroidRuntime: Process: com.awesomeproject, PID: 18979 07-15 10:58:25.820 18979 18998 E AndroidRuntime: com.facebook.react.common.JavascriptException: Failed, js engine: hermes, stack:
            07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132161
            07-15 10:58:25.820 18979 18998 E AndroidRuntime: p@1:132084
            07-15 10:58:25.820 18979 18998 E AndroidRuntime: f@1:131854
            07-15 10:58:25.820 18979 18998 E AndroidRuntime: anonymous@1:131119`}
          />
          <Text12>
            In the above stack trace, entries like p@1:132161 are minified
            function names and bytecode offsets. To debug these calls, we want
            to translate these into file, line, and function name, e.g.
            AwesomeProject/App.js:54:initializeMap. This is known as
            symbolication.
            {'\n'}
            {'\n'}You can symbolicate minified function names and bytecode like
            the above by passing the stack trace and a generated source map to
            metro-symbolicate.
            <OnWebsiteDocsLink
              name="metro-symbolicate"
              link="https://www.npmjs.com/package/metro-symbolicate"
            />
          </Text12>

          <Text28>{'\n'}Enabling source maps:</Text28>
          <Text12>
            Source maps are required to symbolicate stack traces. Make sure that
            source maps are enabled within the build config for the target
            platform.
          </Text12>

          <View style={styles?.Container1}>
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
                <Text12>
                  To enable source map generation:
                  {'\n'}🔷 Open Xcode and edit the build phase "Bundle React
                  Native code and images".
                  {'\n'}🔷 Above the other exports, add a SOURCEMAP_FILE entry
                  with the desired output path.
                </Text12>
                <CopyAbleText
                  content={`+ SOURCEMAP_FILE="$(pwd)/../main.jsbundle.map";
                  WITH_ENVIRONMENT="../node_modules/react-native/scripts/xcode/with-environment.sh"}`}
                />
                <Text12>
                  If done correctly you should see the output location of the
                  source map during Metro build output.
                </Text12>
                <CopyAbleText
                  content={`Writing bundle output to:, Build/Intermediates.noindex/ArchiveIntermediates/application/BuildProductsPath/Release-iphoneos/main.jsbundle
                  Writing sourcemap output to:, Build/Intermediates.noindex/ArchiveIntermediates/application/BuildProductsPath/Release-iphoneos/main.jsbundle.map`}
                />
              </>
            ) : (
              <>
                <Text12>
                  To enable source map generation, ensure the following
                  hermesFlags are present in android/app/build.gradle.
                </Text12>
                <CopyAbleText
                  content={`react {
                    hermesFlags = ["-O", "-output-source-map"]
                }`}
                />
                <Text12>
                  If done correctly you should see the output location of the
                  source map during Metro build output.
                </Text12>
                <CopyAbleText
                  content={`Writing bundle output to:, android/app/build/generated/assets/react/release/index.android.bundle
                  Writing sourcemap output to:, android/app/build/intermediates/sourcemaps/react/release/index.android.bundle.packager.map`}
                />
              </>
            )}
          </View>
          <Text28>{'\n'}Using metro-symbolicate:</Text28>
          <Text12>
            With source maps being generated, we can now translate our stack
            traces.
          </Text12>
          <CopyAbleText
            content={`# Print usage instructions
                  npx metro-symbolicate
                  
                  # From a file containing the stack trace
                  npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map < stacktrace.txt
                  
                  # From adb logcat (Android)
                  adb logcat -d | npx metro-symbolicate android/app/build/generated/sourcemaps/react/release/index.android.bundle.map`}
          />

          <Text28>Notes on source maps:</Text28>
          <Text12>
            {'\n'}🔷 Multiple source maps may be generated by the build process.
            Make sure to use the one in the location shown in the examples.
            {'\n'}🔷 Make sure that the source map you use corresponds to the
            exact commit of the crashing app. Small changes in source code can
            cause large differences in offsets.
            {'\n'}🔷 If metro-symbolicate exits immediately with success, make
            sure the input comes from a pipe or redirection and not from a
            terminal.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DebuggingReleaseBuilds;
