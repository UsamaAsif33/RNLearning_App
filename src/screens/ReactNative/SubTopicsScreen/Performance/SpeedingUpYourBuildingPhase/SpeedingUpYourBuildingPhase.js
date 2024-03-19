import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const SpeedingUpYourBuildingPhase = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Speeding up your Build phase:</Text28>
          <Text12>
            Building your React Native app could be expensive and take several
            minutes of developers time. This can be problematic as your project
            grows and generally in bigger organizations with multiple React
            Native developers.
            {'\n'}
            {'\n'}
            To mitigate this performance hit, this page shares some suggestions
            on how to improve your build time.
          </Text12>
          <Text28>
            {'\n'}Build only one ABI during development (Android-only):
          </Text28>
          <Text12>
            When building your android app locally, by default you build all the
            4 Application Binary Interfaces (ABIs) : armeabi-v7a, arm64-v8a, x86
            & x86_64.{'\n'}
            {'\n'}Now to confuse the matter a little bit, open up the Dev Menu
            in your app and toggle Show Perf Monitor. You will notice that there
            are two different frame rates.
          </Text12>
          <CopyAbleText
            content={`$ yarn react-native run-android --active-arch-only

                  [ ... ]
                  info Running jetifier to migrate libraries to AndroidX. You can disable it using "--no-jetifier" flag.
                  Jetifier found 1037 file(s) to forward-jetify. Using 32 workers...
                  info JS server already running.
                  info Detected architectures arm64-v8a
                  info Installing the app...`}
          />

          <Text12>
            Therefore, if you're building directly with Gradle from the command
            line and without the CLI, you can specify the ABI you want to build
            as follows:
          </Text12>
          <CopyAbleText
            content={`$ ./gradlew :app:assembleDebug -PreactNativeArchitectures=x86,x86_64`}
          />

          <Text12>
            If you wish, you can also override this value locally, using the
            gradle.properties file you have in the top-level folder of your
            project:
            {'\n'}
            <OnWebsiteDocsLink
              name="top-level folder"
              link="https://github.com/facebook/react-native/blob/19cf70266eb8ca151aa0cc46ac4c09cb987b2ceb/template/android/gradle.properties#L30-L33"
            />
          </Text12>
          <CopyAbleText
            content={`# Use this property to specify which architecture you want to build.
            # You can also override it from the CLI using
            # ./gradlew <task> -PreactNativeArchitectures=x86_64
            reactNativeArchitectures=armeabi-v7a,arm64-v8a,x86,x86_644`}
          />

          <Text28>{'\n'}Use a compiler cache:</Text28>
          <Text12>
            If you're running frequent native builds (either C++ or
            Objective-C), you might benefit from using a compiler cache.
            Specifically you can use two type of caches: local compiler caches
            and distributed compiler caches.
            {'\n'}
            {'\n'}
            We suggest to use ccache to cache the compilation of your native
            builds. Ccache works by wrapping the C++ compilers, storing the
            compilation results, and skipping the compilation if an intermediate
            compilation result was originally stored. To install it, you can
            follow the official installation instructions. On macOS, we can
            install ccache with brew install ccache. Once installed you can
            configure it as follows to cache NDK compile results:
            {'\n'}
            <OnWebsiteDocsLink
              name="official installation instructions"
              link="https://github.com/ccache/ccache/blob/master/doc/INSTALL.md"
            />
          </Text12>
          <CopyAbleText
            content={`ln -s $(which ccache) /usr/local/bin/gcc
            ln -s $(which ccache) /usr/local/bin/g++
            ln -s $(which ccache) /usr/local/bin/cc
            ln -s $(which ccache) /usr/local/bin/c++
            ln -s $(which ccache) /usr/local/bin/clang
            ln -s $(which ccache) /usr/local/bin/clang++`}
          />

          <Text12>You can verify that it works using the which command:</Text12>
          <CopyAbleText
            content={`$ which gcc
            /usr/local/bin/gcc`}
          />

          <Text12>
            If the results is /usr/local/bin/gcc, then you're effectively
            calling ccache which will wrap the gcc calls.
          </Text12>
          <CopyAbleText
            content={`unlink /usr/local/bin/gcc
            unlink /usr/local/bin/g++
            unlink /usr/local/bin/cc
            unlink /usr/local/bin/c++
            unlink /usr/local/bin/clang
            unlink /usr/local/bin/clang++`}
          />

          <Text12>
            You can then do two clean builds (e.g. on Android you can first run
            yarn react-native run-android, delete the android/app/build folder
            and run the first command once more). You will notice that the
            second build was way faster than the first one (it should take
            seconds rather than minutes). While building, you can verify that
            ccache works correctly and check the cache hits/miss rate ccache -s
          </Text12>
          <CopyAbleText
            content={`$ ccache -s
            Summary:
              Hits:             196 /  3068 (6.39 %)
                Direct:           0 /  3068 (0.00 %)
                Preprocessed:   196 /  3068 (6.39 %)
              Misses:          2872
                Direct:        3068
                Preprocessed:  2872
              Uncacheable:        1
            Primary storage:
              Hits:             196 /  6136 (3.19 %)
              Misses:          5940
              Cache size (GB): 0.60 / 20.00 (3.00 %)`}
          />

          <Text28>{'\n'}Distributed caches:</Text28>
          <Text12>
            Similar to local caches, you might want to consider using a
            distributed cache for your native builds. This could be specifically
            useful in bigger organizations that are doing frequent native
            builds. We recommend to use sccache to achieve this. We defer to the
            sccache distributed compilation quickstart for instructions on how
            to setup and use this tool.
            {'\n'}
            <OnWebsiteDocsLink
              name="sccache"
              link="https://github.com/mozilla/sccache"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="distributed compilation"
              link="https://github.com/mozilla/sccache/blob/main/docs/DistributedQuickstart.md"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="quickstart"
              link="https://github.com/mozilla/sccache/blob/main/docs/DistributedQuickstart.md"
            />
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SpeedingUpYourBuildingPhase;
