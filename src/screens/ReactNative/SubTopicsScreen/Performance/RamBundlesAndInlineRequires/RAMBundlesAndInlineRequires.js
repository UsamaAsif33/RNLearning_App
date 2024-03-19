import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';

const RAMBundlesAndInlineRequires = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>RAM Bundles and Inline Requires:</Text28>
          <Text12>
            If you have a large app you may want to consider the Random Access
            Modules (RAM) bundle format, and using inline requires. This is
            useful for apps that have a large number of screens which may not
            ever be opened during a typical usage of the app. Generally it is
            useful to apps that have large amounts of code that are not needed
            for a while after startup. For instance the app includes complicated
            profile screens or lesser used features, but most sessions only
            involve visiting the main screen of the app for updates. We can
            optimize the loading of the bundle by using the RAM format and
            requiring those features and screens inline (when they are actually
            used).
          </Text12>

          <Text28>{'\n'}Loading JavaScript:</Text28>
          <Text12>
            Before react-native can execute JS code, that code must be loaded
            into memory and parsed. With a standard bundle if you load a 50mb
            bundle, all 50mb must be loaded and parsed before any of it can be
            executed. The optimization behind RAM bundles is that you can load
            only the portion of the 50mb that you actually need at startup, and
            progressively load more of the bundle as those sections are needed.
          </Text12>

          <Text28>{'\n'}Inline Requires:</Text28>
          <Text12>
            Inline requires delay the requiring of a module or file until that
            file is actually needed. A basic example would look like this:
          </Text12>

          <CopyAbleText
            content={`import React, {Component} from 'react';
            import {Text} from 'react-native';
            // ... import some very expensive modules
            
            // You may want to log at the file level to verify when this is happening
            console.log('VeryExpensive component loaded');
            
            export default class VeryExpensive extends Component {
              // lots and lots of code
              render() {
                return <Text>Very Expensive Component</Text>;
              }
            }`}
          />

          <CopyAbleText
            content={`import React, {Component} from 'react';
            import {TouchableOpacity, View, Text} from 'react-native';
            
            let VeryExpensive = null;
            
            export default class Optimized extends Component {
              state = {needsExpensive: false};
            
              didPress = () => {
                if (VeryExpensive == null) {
                  VeryExpensive = require('./VeryExpensive').default;
                }
            
                this.setState(() => ({
                  needsExpensive: true,
                }));
              };
            
              render() {
                return (
                  <View style={{marginTop: 20}}>
                    <TouchableOpacity onPress={this.didPress}>
                      <Text>Load</Text>
                    </TouchableOpacity>
                    {this.state.needsExpensive ? <VeryExpensive /> : null}
                  </View>
                );
              }
            }`}
          />

          <Text28>{'\n'}Enable the RAM format:</Text28>
          <Text12>
            On iOS using the RAM format will create a single indexed file that
            react native will load one module at a time. On Android, by default
            it will create a set of files for each module. You can force Android
            to create a single file, like iOS, but using multiple files can be
            more performant and requires less memory. Enable the RAM format in
            Xcode by editing the build phase "Bundle React Native code and
            images". Before
            ../node_modules/react-native/scripts/react-native-xcode.sh add
            export BUNDLE_COMMAND="ram-bundle":
          </Text12>
          <CopyAbleText
            content={`export BUNDLE_COMMAND="ram-bundle"
            export NODE_BINARY=node
            ../node_modules/react-native/scripts/react-native-xcode.sh`}
          />

          <Text12>
            On Android enable the RAM format by editing your
            android/app/build.gradle file. Before the line apply from:
            "../../node_modules/react-native/react.gradle" add or amend the
            project.ext.react block:
          </Text12>
          <CopyAbleText
            content={`project.ext.react = [
              bundleCommand: "ram-bundle",
            ]`}
          />

          <Text12>
            Use the following lines on Android if you want to use a single
            indexed file:
          </Text12>
          <CopyAbleText
            content={`project.ext.react = [
              bundleCommand: "ram-bundle",
              extraPackagerArgs: ["--indexed-ram-bundle"]
            ]`}
          />

          <Text28>{'\n'}Configure Preloading and Inline Requires:</Text28>
          <Text12>
            Now that we have a RAM bundle, there is overhead for calling
            require. require now needs to send a message over the bridge when it
            encounters a module it has not loaded yet. This will impact startup
            the most, because that is where the largest number of require calls
            are likely to take place while the app loads the initial module.
            Luckily we can configure a portion of the modules to be preloaded.
            In order to do this, you will need to implement some form of inline
            require.
          </Text12>

          <Text28>{'\n'}Investigating the Loaded Modules:</Text28>
          <Text12>
            In your root file (index.(ios|android).js) you can add the following
            after the initial imports:
          </Text12>
          <CopyAbleText
            content={`const modules = require.getModules();
            const moduleIds = Object.keys(modules);
            const loadedModuleNames = moduleIds
              .filter(moduleId => modules[moduleId].isInitialized)
              .map(moduleId => modules[moduleId].verboseName);
            const waitingModuleNames = moduleIds
              .filter(moduleId => !modules[moduleId].isInitialized)
              .map(moduleId => modules[moduleId].verboseName);
            
            // make sure that the modules you expect to be waiting are actually waiting
            console.log(
              'loaded:',
              loadedModuleNames.length,
              'waiting:',
              waitingModuleNames.length,
            );
            
            // grab this text blob, and put it in a file named packager/modulePaths.js
            console.log(
              module.exports = {JSON.stringify(
                loadedModuleNames.sort(),
                null,
                2,
              )};,
            );`}
          />

          <Text12>
            When you run your app, you can look in the console and see how many
            modules have been loaded, and how many are waiting. You may want to
            read the moduleNames and see if there are any surprises. Note that
            inline requires are invoked the first time the imports are
            referenced. You may need to investigate and refactor to ensure only
            the modules you want are loaded on startup. Note that you can change
            the Systrace object on require to help debug problematic requires.
          </Text12>
          <CopyAbleText
            content={`require.Systrace.beginEvent = message => {
              if (message.includes(problematicModule)) {
                throw new Error();
              }
            };`}
          />

          <Text28>{'\n'}Updating the metro.config.js:</Text28>
          <Text12>
            We now need to update metro.config.js in the root of the project to
            use our newly generated modulePaths.js file:
          </Text12>
          <CopyAbleText
            content={`const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');
            const fs = require('fs');
            const path = require('path');
            const modulePaths = require('./packager/modulePaths');
            
            const config = {
              transformer: {
                getTransformOptions: () => {
                  const moduleMap = {};
                  modulePaths.forEach(modulePath => {
                    if (fs.existsSync(modulePath)) {
                      moduleMap[path.resolve(modulePath)] = true;
                    }
                  });
                  return {
                    preloadedModules: moduleMap,
                    transform: {inlineRequires: {blockList: moduleMap}},
                  };
                },
              },
            };
            
            module.exports = mergeConfig(getDefaultConfig(__dirname), config);`}
          />

          <Text28>{'\n'}Test and Measure Improvements:</Text28>
          <Text12>
            You should now be ready to build your app using the RAM format and
            inline requires. Make sure you measure the before and after startup
            times.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default RAMBundlesAndInlineRequires;
