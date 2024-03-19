import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from '../Styles';
import {Text12, Text18, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';

const WhyNewArchitecture = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Why a New Architecture</Text28>
          <Text12>
            The New Architecture in React Native addresses key issues of the Old
            Architecture related to performance and flexibility by introducing
            significant improvements. Here's a simplified breakdown of the
            changes:
          </Text12>

          <Text18>Old Architecture's Limitations:</Text18>
          <Text12>
            {'\n'}🔷 Serialized data passing through "The Bridge" between JS and
            native layers, leading to asynchronous and single-threaded
            operations.
            {'\n'}🔷 Overhead from data serialization/deserialization, using JSON
            format.
            {'\n'}🔷 Lack of synchronous execution and concurrency from
            JavaScript to native functions.
          </Text12>

          <Text18>New Architecture's Enhancements:</Text18>
          <Text12>
            {'\n'}🔷 Replaced "The Bridge" with the JavaScript Interface (JSI),
            enabling direct method invocation between JavaScript and C++
            objects.
            {'\n'}🔷 Enables synchronous execution of functions, improving
            performance.
            {'\n'}🔷 Supports concurrency, allowing execution on different
            threads.
            {'\n'}🔷 Eliminates serialization overhead, enhancing efficiency.
            {'\n'}🔷 Introduces code sharing between platforms using C++,
            facilitating platform-agnostic code.
            {'\n'}🔷 Ensures type safety through automatically generated code,
            enabling proper method invocation between JS and C++ objects.
            {'\n'}These improvements form the basis of the New Native Module
            System, facilitating further enhancements such as the development of
            a faster and more performant Native Renderer for rendering Native
            Components.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default WhyNewArchitecture;
