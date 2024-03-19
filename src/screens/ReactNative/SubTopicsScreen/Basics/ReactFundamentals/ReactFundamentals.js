import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const ReactFundamentals = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>React Fundamentals:</Text28>
          <Text12>
            React Native runs on React, a popular open source library for
            building user interfaces with JavaScript..{'\n'}
            {'\n'}We’re going to cover the core concepts behind React:
            {'\n'}components {'\n'}JSX {'\n'}props {'\n'}state
          </Text12>

          <Text28>{'\n'}Your first component:</Text28>
          <Text12>
            Components are the building blocks of React Native applications.
            They are reusable and encapsulate a piece of UI that can be composed
            and reused throughout the application. The rest of this introduction
            to React uses cats in its examples: friendly, approachable creatures
            that need names and a cafe to work in. Here is your very first Cat
            component:
          </Text12>

          <CopyAbleText
            content={`import React from 'react';\nimport {Text} from 'react-native';\n\nconst Cat = () => {\nreturn <Text>Hello, I am your cat!</Text>;\n};\nexport default Cat;`}
          />

          {/* JSX */}
          <Text28>{'\n'}JSX (JavaScript XML):</Text28>
          <Text12>
            JSX is a syntax extension for JavaScript that allows developers to
            write HTML-like code within JavaScript. It is commonly used in React
            and React Native for building user interfaces. JSX makes it easier
            to write and understand the structure of UI components.
          </Text12>

          <CopyAbleText
            content={`import React from 'react';
            import { View, Text } from 'react-native';
            
            const MyComponent = () => {
              return (
                <View>
                  <Text>Hello, World!</Text>
                </View>
              );
            };
            
            export default MyComponent;
            `}
          />

          {/* PROPS */}
          <Text28>{'\n'}Props (Properties):</Text28>
          <Text12>
            Props are inputs to React components. They allow components to
            receive data from their parent components. Props are immutable and
            are passed down from parent to child components.
          </Text12>

          <CopyAbleText
            content={`import React from 'react';
            import { View, Text } from 'react-native';
            
            const Greeting = (props) => {
              return (
                <View>
                  <Text>Hello, {props.name}!</Text>
                </View>
              );
            };
            
            const App = () => {
              return (
                <View>
                  <Greeting name="Alice" />
                  <Greeting name="Bob" />
                  <Greeting name="Charlie" />
                </View>
              );
            };
            
            export default App;
            `}
          />

          {/* STATES */}
          <Text28>{'\n'}State:</Text28>
          <Text12>
            States are used to manage component-specific data that may change
            over time. Unlike props, states are mutable and can be updated using
            the setState method. Changes to a component's state trigger a
            re-render of the component.
          </Text12>

          <CopyAbleText
            content={`import React, { useState } from 'react';
            import { View, Text, Button } from 'react-native';
            
            const Counter = () => {
              const [count, setCount] = useState(0);
            
              const increment = () => {
                setCount(count + 1);
              };
            
              return (
                <View>
                  <Text>Count: {count}</Text>
                  <Button title="Increment" onPress={increment} />
                </View>
              );
            };
            
            export default Counter;`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReactFundamentals;
