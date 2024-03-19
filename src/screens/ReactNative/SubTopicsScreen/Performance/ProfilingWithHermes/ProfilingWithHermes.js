import {ScrollView, View, SafeAreaView, Image} from 'react-native';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {Paths} from '../../../../../assets/images';

const ProfilingWithHermes = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Profiling with Hermes:</Text28>
          <Text12>
            You can visualize JavaScript's performance in a React Native app
            using Hermes. Hermes is a small and lightweight JavaScript engine
            optimized for running React Native (you can read more about using it
            with React Native here). Hermes helps improve app performance and
            also exposes ways to analyze the performance of the JavaScript that
            it runs. In this section, you will learn how to profile your React
            Native app running on Hermes and how to visualize the profile using
            the Performance tab on Chrome DevTools
            {'\n'}
            {'\n'}Follow the instructions below to get started profiling:
            {'\n'}1. Record a Hermes sampling profile
            {'\n'}2. Execute command from CLI
            {'\n'}3. Open the downloaded profile on Chrome DevTools
          </Text12>

          <Text24>{'\n'}Record a Hermes sampling profile:</Text24>
          <Text12>
            To record a sampling profiler from the Dev Menu:
            {'\n'}1. Navigate to your running Metro server terminal.
            {'\n'}2. Press d to open the Dev Menu.
            {'\n'}3. Select Enable Sampling Profiler.
            {'\n'}4. Execute your JavaScript by in your app (press buttons,
            etc.)
            {'\n'}5. Open the Dev Menu by pressing d again.
            {'\n'}6. Select Disable Sampling Profiler to stop recording and save
            the sampling profiler.
            {'\n'}A toast will show the location where the sampling profiler has
            been saved, usually in /data/user/0/com.appName/cache/*.cpuprofile
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 600}}
            source={Paths?.ProfilingWithHermes?.HermesProfileSave}
          />

          <Text28>{'\n'}Execute command from CLI:</Text28>
          <Text12>
            You can use the React Native CLI to convert the Hermes tracing
            profile to Chrome tracing profile, and then pull it to your local
            machine using:
          </Text12>
          <CopyAbleText
            content={`npx react-native profile-hermes [destinationDir]`}
          />

          <Text28>{'\n'}Open the downloaded profile in Chrome DevTools:</Text28>
          <Text12>
            To open the profile in Chrome DevTools:
            {'\n'}1. Open Chrome DevTools.
            {'\n'}2. Select the Performance tab.
            {'\n'}3. Right click and choose Load profile...
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 80}}
            source={Paths?.ProfilingWithHermes?.openChromeProfile}
          />

          <Text28>{'\n'}How does the Hermes Profile Transformer work?:</Text28>
          <Text12>
            The Hermes Sample Profile is of the JSON object format, while the
            format that Google's DevTools supports is JSON Array Format. (More
            information about the formats can be found on the Trace Event Format
            Document)
          </Text12>
          <CopyAbleText
            content={`export interface HermesCPUProfile {
            traceEvents: SharedEventProperties[];
            samples: HermesSample[];
            stackFrames: {[key in string]: HermesStackFrame};
          }`}
          />
          <Text12>
            The Hermes profile has most of its information encoded into the
            samples and stackFrames properties. Each sample is a snapshot of the
            function call stack at that particular timestamp as each sample has
            a sf property which corresponds to a function call.
          </Text12>
          <CopyAbleText
            content={`export interface HermesSample {
              cpu: string;
              name: string;
              ts: string;
              pid: number;
              tid: string;
              weight: string;
              /**
               * Will refer to an element in the stackFrames object of the Hermes Profile
               */
              sf: number;
              stackFrameData?: HermesStackFrame;
            }`}
          />
          <Text12>
            The information about a function call can be found in stackFrames
            which contains key-object pairs, where the key is the sf number and
            the corresponding object gives us all the relevant information about
            the function including the sf number of its parent function. This
            parent-child relationship can be traced upwards to find the
            information of all the functions running at a particular timestamp.
          </Text12>
          <CopyAbleText
            content={`export interface HermesStackFrame {
              line: string;
              column: string;
              funcLine: string;
              funcColumn: string;
              name: string;
              category: string;
              /**
               * A parent function may or may not exist
               */
              parent?: number;
            }`}
          />

          <Text12>
            The samples and the stackFrames in tandem can then be used to
            generate all the start and end events at the corresponding
            timestamps, wherein:
            {'\n'}1. Start Nodes/Events: Nodes absent in the previous sample's
            function call stack but present in the current sample's.
            {'\n'}2. End Nodes/Events: Nodes present in the previous sample's
            function call stack but absent in the current sample's.
          </Text12>
          <Image
            style={{marginTop: 20, width: 320, height: 500}}
            source={Paths?.ProfilingWithHermes?.CallStackDemo}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilingWithHermes;
