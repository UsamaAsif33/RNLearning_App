import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';

const ReactNativeGradlePlugin = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>React Native Gradle Plugin:</Text28>
          <Text12>
            This guide describes how to configure the React Native Gradle Plugin
            (often referred as RNGP), when building your React Native
            application for Android.
          </Text12>
          <Text28>Using the plugin:</Text28>
          <Text12>
            The React Native Gradle Plugin is distributed as a separate NPM
            package which is installed automatically with react-native.
            {'\n'}
            {'\n'}
            The plugin is already configured for new projects created using npx
            react-native init. You don't need to do any extra steps to install
            it if you created your app with this command.
            {'\n'}
            {'\n'}
            If you're integrating React Native into an existing project, please
            refer to the corresponding page: it contains specific instructions
            on how to install the plugin.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Configuring the plugin:
          </Text28>
          <Text12>
            By default, the plugin will work out of the box with sensible
            defaults. You should refer to this guide and customize the behavior
            only if you need it.
            {'\n'}
            {'\n'}
            To configure the plugin you can modify the react block, inside
            {'\n'}
            your android/app/build.gradle:
          </Text12>
          <CopyAbleText
            content={`apply plugin: "com.facebook.react"

            /**
             * This is the configuration block to customize your React Native Android app.
             * By default you don't need to apply any configuration, just uncomment the lines you need.
             */
            react {
              // Custom configuration goes here.
            }
            `}
          />
          <Text12>Each configuration key is described below:</Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>root:</Text28>
          <Text12>
            This is the root folder of your React Native project, i.e. where the
            package.json file lives. Default is ... You can customize it as
            follows:
          </Text12>
          <CopyAbleText
            content={`root = file("../")
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            reactNativeDir:
          </Text28>
          <Text12>
            This is the folder where the react-native package lives. Default is
            ../node_modules/react-native. If you're in a monorepo or using a
            different package manager, you can use adjust reactNativeDir to your
            setup.
            {'\n'}
            {'\n'}
            You can customize it as follows:
          </Text12>
          <CopyAbleText
            content={`reactNativeDir = file("../node_modules/react-native")
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            codegenDir:
          </Text28>
          <Text12>
            This is the folder where the react-native-codegen package lives.
            Default is ../node_modules/react-native-codegen. If you're in a
            monorepo or using a different package manager, you can adjust
            codegenDir to your setup.
            {'\n'}
            {'\n'}
            You can customize it as follows:
          </Text12>
          <CopyAbleText
            content={`codegenDir = file("../node_modules/@react-native/codegen")
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            cliFile:
          </Text28>
          <Text12>
            This is the entrypoint file for the React Native CLI. Default is
            ../node_modules/react-native/cli.js. The entrypoint file is needed
            as the plugin needs to invoke the CLI for bundling and creating your
            app.
            {'\n'}
            {'\n'}
            If you're in a monorepo or using a different package manager, you
            can adjust cliFile to your setup. You can customize it as follows:
          </Text12>
          <CopyAbleText
            content={`cliFile = file("../node_modules/react-native/cli.js")
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            debuggableVariants:
          </Text28>
          <Text12>
            This is the list of variants that are debuggable (see using variants
            for more context on variants).
            {'\n'}
            {'\n'}
            By default the plugin is considering as debuggableVariants only
            debug, while release is not. If you have other variants (like
            staging, lite, etc.) you'll need to adjust this accordingly.
            {'\n'}
            {'\n'}
            Variants that are listed as debuggableVariants will not come with a
            shipped bundle, so you'll need Metro to run them.
            {'\n'}
            {'\n'}
            You can customize it as follows:
          </Text12>
          <CopyAbleText
            content={`debuggableVariants = ["liteDebug", "prodDebug"]
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            nodeExecutableAndArgs:
          </Text28>
          <Text12>
            This is the list of node command and arguments that should be
            invoked for all the scripts. By default is [node] but can be
            customized to add extra flags as follows:
          </Text12>
          <CopyAbleText
            content={`nodeExecutableAndArgs = ["node"]
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            bundleCommand:
          </Text28>
          <Text12>
            This is the name of the bundle command to be invoked when creating
            the bundle for your app. That's useful if you're using RAM Bundles.
            By default is bundle but can be customized to add extra flags as
            follows:
          </Text12>
          <CopyAbleText
            content={`bundleCommand = "ram-bundle"
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            bundleConfig:
          </Text28>
          <Text12>
            This is the path to a configuration file that will be passed to
            bundle --config file if provided. Default is empty (no config file
            will be probided). More information on bundling config files can be
            found on the CLI documentation. Can be customized as follow:
          </Text12>
          <CopyAbleText
            content={`bundleConfig = file(../rn-cli.config.js)
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            bundleAssetName:
          </Text28>
          <Text12>
            This is the name of the bundle file that should be generated.
            Default is index.android.bundle. Can be customized as follow:
          </Text12>
          <CopyAbleText
            content={`bundleAssetName = "MyApplication.android.bundle"
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            entryFile:
          </Text28>
          <Text12>
            The entry file used for bundle generation. The default is to search
            for index.android.js or index.js. Can be customized as follow:
          </Text12>
          <CopyAbleText
            content={`entryFile = file("../js/MyApplication.android.js")
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            extraPackagerArgs:
          </Text28>
          <Text12>
            A list of extra flags that will be passed to the bundle command. The
            list of available flags is in the CLI documentation. Default is
            empty. Can be customized as follows:
          </Text12>
          <CopyAbleText
            content={`extraPackagerArgs = []
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            hermesCommand:
          </Text28>
          <Text12>
            The path to the hermesc command (the Hermes Compiler). React Native
            comes with a version of the Hermes compiler bundled with it, so you
            generally won't be needing to customize this. The plugin will use
            the correct compiler for your system by default.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            hermesFlags:
          </Text28>
          <Text12>
            The list of flags to pass to hermesc. By default is ["-O",
            "-output-source-map"]. You can customize it as follows
          </Text12>
          <CopyAbleText
            content={`hermesFlags = ["-O", "-output-source-map"]
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Using Flavors & Build Variants:
          </Text28>
          <Text12>
            The list of flags to pass to hermesc. By default is ["-O",
            "-output-source-map"]. You can customize it as follows
            {'\n'}
            {'\n'}
            Combining build types and flavors generates various build variants.
            For example, with debug/staging/release build types and full/lite
            flavors, you'd have 6 build variants like fullDebug, fullStaging,
            and fullRelease.
            {'\n'}
            {'\n'}
            If using custom variants beyond debug and release, you must specify
            debuggable variants to the React Native Gradle Plugin using the
            debuggableVariants configuration.
          </Text12>
          <CopyAbleText
            content={`apply plugin: "com.facebook.react"

            react {
            + debuggableVariants = ["fullStaging", "fullDebug"]
            }
            `}
          />
          <Text12>
            This is necessary because the plugin will skip the JS bundling for
            all the debuggableVariants: you'll need Metro to run them. For
            example, if you list fullStaging in the debuggableVariants, you
            won't be able to publish it to a store as it will be missing the
            bundle.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            What is the plugin doing under the hood?
          </Text28>
          <Text12>
            The React Native Gradle Plugin is responsible for configuring your
            Application build to ship React Native applications to production.
            The plugin is also used inside 3rd party libraries, to run the
            Codegen used for the New Architecture.
            {'\n'}
            {'\n'}
            Here is a summary of the plugin responsibilities:
            {'\n'}
            🔷 Add a createBundle Variant JsAndAssets task for every non
            debuggable variant, that is responsible of invoking the bundle,
            hermesc and compose-source-map commands.
            {'\n'}
            🔷 Setting up the proper version of the
            com.facebook.react:react-android and
            com.facebook.react:hermes-android dependency, reading the React
            Native version from the package.json of react-native.
            {'\n'}
            🔷 Setting up the proper Maven repositories (Maven Central, Google
            Maven Repo, JSC local Maven repo, etc.) needed to consume all the
            necessary Maven Dependencies.
            {'\n'}
            🔷 Setting up the NDK to let you build apps that are using the New
            Architecture.
            {'\n'}
            🔷 Setting up the buildConfigFields so that you can know at runtime
            if Hermes or the New Architecture are enabled.
            {'\n'}
            🔷 Setting up the Metro DevServer Port as an Android resource so the
            app knows on which port to connect.
            {'\n'}
            🔷 Invoking the React Native Codegen if a library or app is using
            the Codegen for the New Architecture.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReactNativeGradlePlugin;
