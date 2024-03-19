import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const DirectManipulation = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Direct Manipulation:</Text28>
          <Text12>
            It is sometimes necessary to make changes directly to a component
            without using state/props to trigger a re-render of the entire
            subtree. When using React in the browser for example, you sometimes
            need to directly modify a DOM node, and the same is true for views
            in mobile apps. setNativeProps is the React Native equivalent to
            setting properties directly on a DOM node.
          </Text12>

          <Text28>setNativeProps with TouchableOpacity:</Text28>
          <Text12>
            TouchableOpacity uses setNativeProps internally to update the
            opacity of its child component:
          </Text12>
          <CopyAbleText
            content={`const viewRef = useRef<View>();
            const setOpacityTo = useCallback(value => {
              // Redacted: animation related code
              viewRef.current.setNativeProps({
                opacity: value,
              });
            }, []);`}
          />
          <Text12>
            This allows us to write the following code and know that the child
            will have its opacity updated in response to taps, without the child
            having any knowledge of that fact or requiring any changes to its
            implementation:
          </Text12>
          <CopyAbleText
            content={`<TouchableOpacity onPress={handlePress}>
            <View>
              <Text>Press me!</Text>
            </View>
          </TouchableOpacity>`}
          />
          <Text12>
            Let's imagine that setNativeProps was not available. One way that we
            might implement it with that constraint is to store the opacity
            value in the state, then update that value whenever onPress is
            fired:
          </Text12>
          <CopyAbleText
            content={`const [buttonOpacity, setButtonOpacity] = useState(1);
            return (
              <TouchableOpacity
                onPressIn={() => setButtonOpacity(0.5)}
                onPressOut={() => setButtonOpacity(1)}>
                <View style={{opacity: buttonOpacity}}>
                  <Text>Press me!</Text>
                </View>
              </TouchableOpacity>
            );`}
          />
          <Text12>
            This is computationally intensive compared to the original example -
            React needs to re-render the component hierarchy each time the
            opacity changes, even though other properties of the view and its
            children haven't changed. Usually this overhead isn't a concern but
            when performing continuous animations and responding to gestures,
            judiciously optimizing your components can improve your animations'
            fidelity.
            {'\n'}
            {'\n'}
            If you look at the implementation of setNativeProps in
            NativeMethodsMixin you will notice that it is a wrapper around
            RCTUIManager.updateView - this is the exact same function call that
            results from re-rendering - see receiveComponent in
            ReactNativeBaseComponent.
          </Text12>

          <Text28>Composite components and setNativeProps</Text28>
          <Text12>
            Composite components are not backed by a native view, so you cannot
            call setNativeProps on them. Consider this example:
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React from 'react';
            import {Text, TouchableOpacity, View} from 'react-native';
            
            const MyButton = React.forwardRef<View, {label: string}>((props, ref) => (
              <View {...props} ref={ref} style={{marginTop: 50}}>
                <Text>{props.label}</Text>
              </View>
            ));
            
            const App = () => (
              <TouchableOpacity>
                <MyButton label="Press me!" />
              </TouchableOpacity>
            );
            
            export default App;`}
            content2={`import React from 'react';
            import {Text, TouchableOpacity, View} from 'react-native';
            
            const MyButton = React.forwardRef((props, ref) => (
              <View {...props} ref={ref} style={{marginTop: 50}}>
                <Text>{props.label}</Text>
              </View>
            ));
            
            const App = () => (
              <TouchableOpacity>
                <MyButton label="Press me!" />
              </TouchableOpacity>
            );
            
            export default App;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text12>
            If you run this you will immediately see this error: Touchable child
            must either be native or forward setNativeProps to a native
            component. This occurs because MyButton isn't directly backed by a
            native view whose opacity should be set. You can think about it like
            this: if you define a component with createReactClass you would not
            expect to be able to set a style prop on it and have that work - you
            would need to pass the style prop down to a child, unless you are
            wrapping a native component. Similarly, we are going to forward
            setNativeProps to a native-backed child component.
          </Text12>
          <Text28>Forward setNativeProps to a child</Text28>
          <Text12>
            Since the setNativeProps method exists on any ref to a View
            component, it is enough to forward a ref on your custom component to
            one of the "View" components that it renders. This means that a call
            to setNativeProps on the custom component will have the same effect
            as if you called setNativeProps on the wrapped View component
            itself.
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React from 'react';
            import {Text, TouchableOpacity, View} from 'react-native';
            
            const MyButton = React.forwardRef<View, {label: string}>((props, ref) => (
              <View {...props} ref={ref} style={{marginTop: 50}}>
                <Text>{props.label}</Text>
              </View>
            ));
            
            const App = () => (
              <TouchableOpacity>
                <MyButton label="Press me!" />
              </TouchableOpacity>
            );
            
            export default App;`}
            content2={`import React from 'react';
            import {Text, TouchableOpacity, View} from 'react-native';
            
            const MyButton = React.forwardRef((props, ref) => (
              <View {...props} ref={ref} style={{marginTop: 50}}>
                <Text>{props.label}</Text>
              </View>
            ));
            
            const App = () => (
              <TouchableOpacity>
                <MyButton label="Press me!" />
              </TouchableOpacity>
            );
            
            export default App;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />
          <Text12>
            You can now use MyButton inside of TouchableOpacity!
            {'\n'}
            {'\n'}
            You may have noticed that we passed all of the props down to the
            child view using ...props. The reason for this is that
            TouchableOpacity is actually a composite component, and so in
            addition to depending on setNativeProps on its child, it also
            requires that the child perform touch handling. To do this, it
            passes on various props that call back to the TouchableOpacity
            component. TouchableHighlight, in contrast, is backed by a native
            view and only requires that we implement setNativeProps.
          </Text12>
          <Text28>setNativeProps to edit TextInput value</Text28>
          <Text12>
            Another very common use case of setNativeProps is to edit the value
            of the TextInput. The controlled prop of TextInput can sometimes
            drop characters when the bufferDelay is low and the user types very
            quickly. Some developers prefer to skip this prop entirely and
            instead use setNativeProps to directly manipulate the TextInput
            value when necessary. For example, the following code demonstrates
            editing the input when you tap a button:
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React from 'react';
            import {useCallback, useRef} from 'react';
            import {
              StyleSheet,
              TextInput,
              Text,
              TouchableOpacity,
              View,
            } from 'react-native';
            
            const App = () => {
              const inputRef = useRef<TextInput>(null);
              const editText = useCallback(() => {
                inputRef.current?.setNativeProps({text: 'Edited Text'});
              }, []);
            
              return (
                <View style={styles.container}>
                  <TextInput ref={inputRef} style={styles.input} />
                  <TouchableOpacity onPress={editText}>
                    <Text>Edit text</Text>
                  </TouchableOpacity>
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              input: {
                height: 50,
                width: 200,
                marginHorizontal: 20,
                borderWidth: 1,
                borderColor: '#ccc',
              },
            });
            
            export default App;`}
            content2={`import React from 'react';
            import {useCallback, useRef} from 'react';
            import {
              StyleSheet,
              TextInput,
              Text,
              TouchableOpacity,
              View,
            } from 'react-native';
            
            const App = () => {
              const inputRef = useRef(null);
              const editText = useCallback(() => {
                inputRef.current.setNativeProps({text: 'Edited Text'});
              }, []);
            
              return (
                <View style={styles.container}>
                  <TextInput ref={inputRef} style={styles.input} />
                  <TouchableOpacity onPress={editText}>
                    <Text>Edit text</Text>
                  </TouchableOpacity>
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              input: {
                height: 50,
                width: 200,
                marginHorizontal: 20,
                borderWidth: 1,
                borderColor: '#ccc',
              },
            });
            
            export default App;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text12>
            You can use the clear method to clear the TextInput which clears the
            current input text using the same approach.
          </Text12>
          <Text28>Avoiding conflicts with the render function</Text28>
          <Text12>
            If you update a property that is also managed by the render
            function, you might end up with some unpredictable and confusing
            bugs because anytime the component re-renders and that property
            changes, whatever value was previously set from setNativeProps will
            be completely ignored and overridden.
          </Text12>
          <Text28>setNativeProps & shouldComponentUpdate</Text28>
          <Text12>
            By intelligently applying shouldComponentUpdate you can avoid the
            unnecessary overhead involved in reconciling unchanged component
            subtrees, to the point where it may be performant enough to use
            setState instead of setNativeProps.
          </Text12>
          <Text28>Other native methods</Text28>
          <Text12>
            The methods described here are available on most of the default
            components provided by React Native. Note, however, that they are
            not available on composite components that aren't directly backed by
            a native view. This will generally include most components that you
            define in your own app.
          </Text12>
          <Text28>measure(callback)</Text28>
          <Text12>
            Determines the location on screen, width, and height in the viewport
            of the given view and returns the values via an async callback. If
            successful, the callback will be called with the following
            arguments:
            {'\n'}
            🔷 x{'\n'}
            🔷 y{'\n'}
            🔷 width
            {'\n'}
            🔷 height
            {'\n'}
            🔷 pageX
            {'\n'}
            🔷 pageY
          </Text12>
          <Text12>
            Note that these measurements are not available until after the
            rendering has been completed in native. If you need the measurements
            as soon as possible and you don't need pageX and pageY, consider
            using the onLayout property instead.
            {'\n'}
            {'\n'}
            Also the width and height returned by measure() are the width and
            height of the component in the viewport. If you need the actual size
            of the component, consider using the onLayout property instead.
          </Text12>
          <Text28>measureInWindow(callback)</Text28>
          <Text12>
            Determines the location of the given view in the window and returns
            the values via an async callback. If the React root view is embedded
            in another native view, this will give you the absolute coordinates.
            If successful, the callback will be called with the following
            arguments:
            {'\n'}
            🔷 x{'\n'}
            🔷 y{'\n'}
            🔷 width
            {'\n'}
            🔷 height
          </Text12>
          <Text28>
            measureLayout(relativeToNativeComponentRef, onSuccess, onFail)
          </Text28>
          <Text12>
            Like measure(), but measures the view relative to an ancestor,
            specified with relativeToNativeComponentRef reference. This means
            that the returned coordinates are relative to the origin x, y of the
            ancestor view.
          </Text12>
          <CopyAbleTextWithButton
            content1={` import React, {useEffect, useRef, useState} from 'react';
            import {Text, View, StyleSheet} from 'react-native';
            
            type Measurements = {
              left: number;
              top: number;
              width: number;
              height: number;
            };
            
            const App = () => {
              const textContainerRef = useRef<View>(null);
              const textRef = useRef<Text>(null);
              const [measure, setMeasure] = useState<Measurements | null>(null);
            
              useEffect(() => {
                if (textRef.current && textContainerRef.current) {
                  textRef.current?.measureLayout(
                    textContainerRef.current,
                    (left, top, width, height) => {
                      setMeasure({left, top, width, height});
                    },
                    () => {
                      console.error('measurement failed');
                    },
                  );
                }
              }, [measure]);
            
              return (
                <View style={styles.container}>
                  <View ref={textContainerRef} style={styles.textContainer}>
                    <Text ref={textRef}>Where am I? (relative to the text container)</Text>
                  </View>
                  <Text style={styles.measure}>{JSON.stringify(measure)}</Text>
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                justifyContent: 'center',
              },
              textContainer: {
                backgroundColor: '#61dafb',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
              },
              measure: {
                textAlign: 'center',
                padding: 12,
              },
            });
            
            export default App;`}
            content2={`import React, {useEffect, useRef, useState} from 'react';
            import {Text, View, StyleSheet} from 'react-native';
            
            const App = () => {
              const textContainerRef = useRef(null);
              const textRef = useRef(null);
              const [measure, setMeasure] = useState(null);
            
              useEffect(() => {
                if (textRef.current && textContainerRef.current) {
                  textRef.current.measureLayout(
                    textContainerRef.current,
                    (left, top, width, height) => {
                      setMeasure({left, top, width, height});
                    },
                  );
                }
              }, [measure]);
            
              return (
                <View style={styles.container}>
                  <View ref={textContainerRef} style={styles.textContainer}>
                    <Text ref={textRef}>Where am I? (relative to the text container)</Text>
                  </View>
                  <Text style={styles.measure}>{JSON.stringify(measure)}</Text>
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                justifyContent: 'center',
              },
              textContainer: {
                backgroundColor: '#61dafb',
                justifyContent: 'center',
                alignItems: 'center',
                padding: 12,
              },
              measure: {
                textAlign: 'center',
                padding: 12,
              },
            });
            
            export default App;`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />
          <Text28>focus()</Text28>
          <Text12>
            Requests focus for the given input or view. The exact behavior
            triggered will depend on the platform and type of view.
          </Text12>
          <Text28>blur()</Text28>
          <Text12>
            Removes focus from an input or view. This is the opposite of
            focus().
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DirectManipulation;
