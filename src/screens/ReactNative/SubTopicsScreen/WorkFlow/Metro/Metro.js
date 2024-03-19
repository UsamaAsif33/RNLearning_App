import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const Metro = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Metro:</Text28>
          <Text12>
            React Native uses Metro to build your JavaScript code and assets.
          </Text12>

          <Text28>{'\n'}Configuring Metro:</Text28>
          <Text12>
            Configuration options for Metro can be customized in your project's
            metro.config.js file. This can export either:
            {'\n'}🔷 An object(recommended) that will be merged on top of
            Metro's internal config defaults.
            {'\n'}🔷 A function that will be called with Metro's internal config
            defaults and should return a final config object.
            {'\n'} {'\n'} Below is the default metro.config.js file in a React
            Native template project:
          </Text12>

          <CopyAbleText
            content={`const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

            /**
             * Metro configuration
             * https://facebook.github.io/metro/docs/configuration
             *
             * @type {import('metro-config').MetroConfig}
             */
            const config = {};
            
            module.exports = mergeConfig(getDefaultConfig(__dirname), config);`}
          />

          <Text28>{'\n'}Advanced: Using a config function:</Text28>
          <Text12>
            Exporting a config function is an opt-in to managing the final
            config yourself — Metro will not apply any internal defaults. This
            pattern can be useful when needing to read the base default config
            object from Metro or to set options dynamically.
          </Text12>

          <CopyAbleText
            content={`const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

            module.exports = function (baseConfig) {
              const defaultConfig = mergeConfig(baseConfig, getDefaultConfig(__dirname));
              const {resolver: {assetExts, sourceExts}} = defaultConfig;
            
              return mergeConfig(
                defaultConfig,
                {
                  resolver: {
                    assetExts: assetExts.filter(ext => ext !== 'svg'),
                    sourceExts: [...sourceExts, 'svg'],
                  },
                },
              );
            };
            `}
          />

          <Text28>{'\n'}Alternative:</Text28>

          <CopyAbleText
            content={`const defaultConfig = getDefaultConfig(__dirname);

            const config = {
              resolver: {
                sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
              },
            };
            
            module.exports = mergeConfig(defaultConfig, config);
            `}
          />

          <Text28>{'\n'}✅ Recommended:</Text28>

          <CopyAbleText
            content={`const config = {
                resolver: {
                  sourceExts: ['js', 'ts', 'tsx', 'svg'],
                },
              };
            `}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Metro;
