import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const Animations = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Animations:</Text28>
          <Text12>
            Animations are very important to create a great user experience.
            Stationary objects must overcome inertia as they start moving.
            Objects in motion have momentum and rarely come to a stop
            immediately. Animations allow you to convey physically believable
            motion in your interface. React Native provides two complementary
            animation systems: Animated for granular and interactive control of
            specific values, and LayoutAnimation for animated global layout
            transactions.
          </Text12>

          <Text28>{'\n'}Animated API:</Text28>
          <Text12>
            The Animated API is designed to concisely express a wide variety of
            interesting animation and interaction patterns in a very performant
            way. Animated focuses on declarative relationships between inputs
            and outputs, with configurable transforms in between, and start/stop
            methods to control time-based animation execution. Animated exports
            six animatable component types: View, Text, Image, ScrollView,
            FlatList and SectionList, but you can also create your own using
            Animated.createAnimatedComponent().
          </Text12>
          <CopyAbleTextWithButton
            content1={`import React, {useRef, useEffect} from 'react';
            import {Animated, Text, View} from 'react-native';
            import type {PropsWithChildren} from 'react';
            import type {ViewStyle} from 'react-native';
            
            type FadeInViewProps = PropsWithChildren<{style: ViewStyle}>;
            
            const FadeInView: React.FC<FadeInViewProps> = props => {
              const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
            
              useEffect(() => {
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 10000,
                  useNativeDriver: true,
                }).start();
              }, [fadeAnim]);
            
              return (
                <Animated.View // Special animatable View
                  style={{
                    ...props.style,
                    opacity: fadeAnim, // Bind opacity to animated value
                  }}>
                  {props.children}
                </Animated.View>
              );
            };
            
            // You can then use your FadeInView in place of a View in your components:
            export default () => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FadeInView
                    style={{
                      width: 250,
                      height: 50,
                      backgroundColor: 'powderblue',
                    }}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                      Fading in
                    </Text>
                  </FadeInView>
                </View>
              );
            };`}
            content2={`import React, {useRef, useEffect} from 'react';
            import {Animated, Text, View} from 'react-native';
            
            const FadeInView = props => {
              const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0
            
              useEffect(() => {
                Animated.timing(fadeAnim, {
                  toValue: 1,
                  duration: 10000,
                  useNativeDriver: true,
                }).start();
              }, [fadeAnim]);
            
              return (
                <Animated.View // Special animatable View
                  style={{
                    ...props.style,
                    opacity: fadeAnim, // Bind opacity to animated value
                  }}>
                  {props.children}
                </Animated.View>
              );
            };
            
            // You can then use your FadeInView in place of a View in your components:
            export default () => {
              return (
                <View
                  style={{
                    flex: 1,
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}>
                  <FadeInView
                    style={{
                      width: 250,
                      height: 50,
                      backgroundColor: 'powderblue',
                    }}>
                    <Text style={{fontSize: 28, textAlign: 'center', margin: 10}}>
                      Fading in
                    </Text>
                  </FadeInView>
                </View>
              );
            };`}
            buttonLabel1={`TypeScript`}
            buttonLabel2={`JavaScript`}
          />

          <Text28>{'\n'}Configuring animations:</Text28>
          <Text12>
            Animations are highly configurable, offering options such as custom
            and predefined easing functions, delays, durations, decay factors,
            and spring constants. The commonly used animation type is
            Animated.timing(), which animates a value over time. It supports
            various easing functions, with the default being easeInOut,
            conveying gradual acceleration and deceleration. Custom easing
            functions, durations, and delays are supported. For instance, to
            create a 2-second animation of an object that backs up before moving
            to its final position, one can specify a custom easing function and
            duration.
          </Text12>
          <CopyAbleText
            content={`Animated.timing(this.state.xPosition, {
                  toValue: 100,
                  easing: Easing.back(),
                  duration: 2000,
                  useNativeDriver: true,
            }).start();`}
          />

          <Text28>{'\n'}Composing animations:</Text28>
          <Text12>
            Animations can be combined and played in sequence or in parallel.
            Sequential animations can play immediately after the previous
            animation has finished, or they can start after a specified delay.
            The Animated API provides several methods, such as sequence() and
            delay(), each of which take an array of animations to execute and
            automatically calls start()/stop() as needed. For example, the
            following animation coasts to a stop, then it springs back while
            twirling in parallel:
          </Text12>
          <CopyAbleText
            content={`Animated.sequence([
              // decay, then spring to start and twirl
              Animated.decay(position, {
                // coast to a stop
                velocity: {x: gestureState.vx, y: gestureState.vy}, // velocity from gesture release
                deceleration: 0.997,
                useNativeDriver: true,
              }),
              Animated.parallel([
                // after decay, in parallel:
                Animated.spring(position, {
                  toValue: {x: 0, y: 0}, // return to start
                  useNativeDriver: true,
                }),
                Animated.timing(twirl, {
                  // and twirl
                  toValue: 360,
                  useNativeDriver: true,
                }),
              ]),
            ]).start(); // start the sequence group`}
          />

          <Text28>{'\n'}Combining animated values:</Text28>
          <Text12>
            You can combine two animated values via addition, multiplication,
            division, or modulo to make a new animated value. There are some
            cases where an animated value needs to invert another animated value
            for calculation. An example is inverting a scale (2x -- 0.5x):
          </Text12>
          <CopyAbleText
            content={`const a = new Animated.Value(1);
            const b = Animated.divide(1, a);
            
            Animated.spring(a, {
              toValue: 2,
              useNativeDriver: true,
            }).start();`}
          />

          <Text28>{'\n'}Interpolation:</Text28>
          <Text12>
            Each property can be run through an interpolation first. An
            interpolation maps input ranges to output ranges, typically using a
            linear interpolation but also supports easing functions. By default,
            it will extrapolate the curve beyond the ranges given, but you can
            also have it clamp the output value.
            {'\n'}
            {'\n'}A basic mapping to convert a 0-1 range to a 0-100 range would
            be:
          </Text12>
          <CopyAbleText
            content={`value.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 100],
            });`}
          />

          <Text12>
            For example, you may want to think about your Animated.Value as
            going from 0 to 1, but animate the position from 150px to 0px and
            the opacity from 0 to 1. This can be done by modifying style from
            the example above like so:
          </Text12>
          <CopyAbleText
            content={`  style={{
              opacity: this.state.fadeAnim, // Binds directly
              transform: [{
                translateY: this.state.fadeAnim.interpolate({
                  inputRange: [0, 1],
                  outputRange: [150, 0]  // 0 : 150, 0.5 : 75, 1 : 0
                }),
              }],
            }}`}
          />

          <Text12>
            interpolate() supports multiple range segments as well, which is
            handy for defining dead zones and other handy tricks. For example,
            to get a negation relationship at -300 that goes to 0 at -100, then
            back up to 1 at 0, and then back down to zero at 100 followed by a
            dead-zone that remains at 0 for everything beyond that, you could
            do:
          </Text12>
          <CopyAbleText
            content={`value.interpolate({
              inputRange: [-300, -100, 0, 100, 101],
              outputRange: [300, 0, 1, 0, 0],
            });`}
          />

          <Text12>Which would map like so:</Text12>
          <CopyAbleText
            content={`Input | Output
            ------|-------
              -400|    450
              -300|    300
              -200|    150
              -100|      0
               -50|    0.5
                 0|      1
                50|    0.5
               100|      0
               101|      0
               200|      0`}
          />

          <Text12>
            interpolate() also supports mapping to strings, allowing you to
            animate colors as well as values with units. For example, if you
            wanted to animate a rotation you could do:
          </Text12>
          <CopyAbleText
            content={`value.interpolate({
              inputRange: [0, 360],
              outputRange: ['0deg', '360deg'],
            });`}
          />

          <Text28>{'\n'}Tracking dynamic values:</Text28>
          <Text12>
            Animated values can also track other values by setting the toValue
            of an animation to another animated value instead of a plain number.
            For example, a "Chat Heads" animation like the one used by Messenger
            on Android could be implemented with a spring() pinned on another
            animated value, or with timing() and a duration of 0 for rigid
            tracking. They can also be composed with interpolations:
          </Text12>
          <CopyAbleText
            content={`Animated.spring(follower, {toValue: leader}).start();
            Animated.timing(opacity, {
              toValue: pan.x.interpolate({
                inputRange: [0, 300],
                outputRange: [1, 0],
                useNativeDriver: true,
              }),
            }).start();`}
          />

          <Text28>{'\n'}Tracking gestures:</Text28>
          <Text12>
            Gestures, like panning or scrolling, and other events can map
            directly to animated values using Animated.event. This is done with
            a structured map syntax so that values can be extracted from complex
            event objects. The first level is an array to allow mapping across
            multiple args, and that array contains nested objects. For example,
            when working with horizontal scrolling gestures, you would do the
            following in order to map event.nativeEvent.contentOffset.x to
            scrollX (an Animated.Value):
          </Text12>
          <CopyAbleText
            content={` onScroll={Animated.event(
              // scrollX = e.nativeEvent.contentOffset.x
              [{nativeEvent: {
                   contentOffset: {
                     x: scrollX
                   }
                 }
               }]
            )}`}
          />

          <Text12>ScrollView with Animated Event Example</Text12>
          <CopyAbleText
            content={`import React, {useRef} from 'react';
            import {
              SafeAreaView,
              ScrollView,
              Text,
              StyleSheet,
              View,
              ImageBackground,
              Animated,
              useWindowDimensions,
            } from 'react-native';
            
            const images = new Array(6).fill(
              'https://images.unsplash.com/photo-1556740749-887f6717d7e4',
            );
            
            const App = () => {
              const scrollX = useRef(new Animated.Value(0)).current;
            
              const {width: windowWidth} = useWindowDimensions();
            
              return (
                <SafeAreaView style={styles.container}>
                  <View style={styles.scrollContainer}>
                    <ScrollView
                      horizontal={true}
                      pagingEnabled
                      showsHorizontalScrollIndicator={false}
                      onScroll={Animated.event([
                        {
                          nativeEvent: {
                            contentOffset: {
                              x: scrollX,
                            },
                          },
                        },
                      ])}
                      scrollEventThrottle={1}>
                      {images.map((image, imageIndex) => {
                        return (
                          <View style={{width: windowWidth, height: 250}} key={imageIndex}>
                            <ImageBackground source={{uri: image}} style={styles.card}>
                              <View style={styles.textContainer}>
                                <Text style={styles.infoText}>
                                  {'Image - ' + imageIndex}
                                </Text>
                              </View>
                            </ImageBackground>
                          </View>
                        );
                      })}
                    </ScrollView>
                    <View style={styles.indicatorContainer}>
                      {images.map((image, imageIndex) => {
                        const width = scrollX.interpolate({
                          inputRange: [
                            windowWidth * (imageIndex - 1),
                            windowWidth * imageIndex,
                            windowWidth * (imageIndex + 1),
                          ],
                          outputRange: [8, 16, 8],
                          extrapolate: 'clamp',
                        });
                        return (
                          <Animated.View
                            key={imageIndex}
                            style={[styles.normalDot, {width}]}
                          />
                        );
                      })}
                    </View>
                  </View>
                </SafeAreaView>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              scrollContainer: {
                height: 300,
                alignItems: 'center',
                justifyContent: 'center',
              },
              card: {
                flex: 1,
                marginVertical: 4,
                marginHorizontal: 16,
                borderRadius: 5,
                overflow: 'hidden',
                alignItems: 'center',
                justifyContent: 'center',
              },
              textContainer: {
                backgroundColor: 'rgba(0,0,0, 0.7)',
                paddingHorizontal: 24,
                paddingVertical: 8,
                borderRadius: 5,
              },
              infoText: {
                color: 'white',
                fontSize: 16,
                fontWeight: 'bold',
              },
              normalDot: {
                height: 8,
                width: 8,
                borderRadius: 4,
                backgroundColor: 'silver',
                marginHorizontal: 4,
              },
              indicatorContainer: {
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
              },
            });
            
            export default App;`}
          />

          <Text12>
            When using PanResponder, you could use the following code to extract
            the x and y positions from gestureState.dx and gestureState.dy. We
            use a null in the first position of the array, as we are only
            interested in the second argument passed to the PanResponder
            handler, which is the gestureState.
          </Text12>
          <CopyAbleText
            content={`onPanResponderMove={Animated.event(
              [null, // ignore the native event
              // extract dx and dy from gestureState
              // like 'pan.x = gestureState.dx, pan.y = gestureState.dy'
              {dx: pan.x, dy: pan.y}
            ])}`}
          />

          <Text12>PanResponder with Animated Event Example</Text12>
          <CopyAbleText
            content={`import React, {useRef} from 'react';
            import {Animated, View, StyleSheet, PanResponder, Text} from 'react-native';
            
            const App = () => {
              const pan = useRef(new Animated.ValueXY()).current;
              const panResponder = useRef(
                PanResponder.create({
                  onMoveShouldSetPanResponder: () => true,
                  onPanResponderMove: Animated.event([null, {dx: pan.x, dy: pan.y}]),
                  onPanResponderRelease: () => {
                    Animated.spring(pan, {
                      toValue: {x: 0, y: 0},
                      useNativeDriver: true,
                    }).start();
                  },
                }),
              ).current;
            
              return (
                <View style={styles.container}>
                  <Text style={styles.titleText}>Drag & Release this box!</Text>
                  <Animated.View
                    style={{
                      transform: [{translateX: pan.x}, {translateY: pan.y}],
                    }}
                    {...panResponder.panHandlers}>
                    <View style={styles.box} />
                  </Animated.View>
                </View>
              );
            };
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              titleText: {
                fontSize: 14,
                lineHeight: 24,
                fontWeight: 'bold',
              },
              box: {
                height: 150,
                width: 150,
                backgroundColor: 'blue',
                borderRadius: 5,
              },
            });
            
            export default App;`}
          />

          <Text28>{'\n'}Using the native driver:</Text28>
          <Text12>
            The Animated API is designed to be serializable and efficient by
            utilizing the native driver. When the native driver is enabled
            (useNativeDriver: true), all animation details are sent to the
            native side before starting, allowing native code to handle the
            animation on the UI thread without frequent communication with the
            JavaScript thread. This approach ensures smooth animations even if
            the JavaScript thread is blocked after the animation has started.
            Animations without explicitly enabling the native driver default to
            false but emit a warning, encouraging the use of the native driver
            for performance optimization.
          </Text12>
          <CopyAbleText
            content={`Animated.timing(this.state.animatedValue, {
              toValue: 1,
              duration: 500,
              useNativeDriver: true, // <-- Set this to true
            }).start();`}
          />

          <Text12>
            Animated values are only compatible with one driver so if you use
            native driver when starting an animation on a value, make sure every
            animation on that value also uses the native driver. The native
            driver also works with Animated.event. This is especially useful for
            animations that follow the scroll position as without the native
            driver, the animation will always run a frame behind the gesture due
            to the async nature of React Native.
          </Text12>
          <CopyAbleText
            content={`<Animated.ScrollView // <-- Use the Animated ScrollView wrapper
            scrollEventThrottle={1} // <-- Use 1 here to make sure no events are ever missed
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {y: this.state.animatedValue},
                  },
                },
              ],
              {useNativeDriver: true}, // <-- Set this to true
            )}>
            {content}
          </Animated.ScrollView>;`}
          />

          <Text28>{'\n'}Bear in mind:</Text28>
          <Text12>
            While using transform styles such as rotateY, rotateX, and others
            ensure the transform style perspective is in place. At this time
            some animations may not render on Android without it. Example below.
          </Text12>
          <CopyAbleText
            content={`<Animated.View
            style={{
              transform: [
                {scale: this.state.scale},
                {rotateY: this.state.rotateY},
                {perspective: 1000}, // without this line this Animation will not render on Android while working fine on iOS
              ],
            }}
          />`}
          />

          <Text28>{'\n'}Additional examples:</Text28>
          <Text12>
            The RNTester app has various examples of Animated in use:
            {'\n'}
            <OnWebsiteDocsLink
              name="AnimatedGratuitousApp"
              link="https://github.com/facebook/react-native/tree/main/packages/rn-tester/js/examples/AnimatedGratuitousApp"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="NativeAnimationsExample"
              link="https://github.com/facebook/react-native/blob/main/packages/rn-tester/js/examples/NativeAnimation/NativeAnimationsExample.js"
            />
          </Text12>

          <Text28>{'\n'}LayoutAnimation API:</Text28>
          <Text12>
            LayoutAnimation allows for the global configuration of create and
            update animations to be applied to all views in the subsequent
            render/layout cycle. It simplifies Flexbox layout updates by
            automatically animating changes without the need for explicit
            measurement or calculation of properties. This feature is
            particularly beneficial for scenarios where layout alterations might
            affect ancestor components, such as expanding a "see more" section
            that impacts the size of its parent and surrounding elements. While
            LayoutAnimation is powerful and convenient for certain tasks, it
            offers less control compared to other animation libraries like
            Animated. If precise control over animations is required,
            alternative approaches may be necessary.
            {'\n'}
            {'\n'}Note that in order to get this to work on Android you need to
            set the following flags via UIManager:
          </Text12>
          <CopyAbleText
            content={`UIManager.setLayoutAnimationEnabledExperimental(true);`}
          />

          <Text28>{'\n'}LayoutAnimations</Text28>
          <CopyAbleText
            content={`import React from 'react';
            import {
              NativeModules,
              LayoutAnimation,
              Text,
              TouchableOpacity,
              StyleSheet,
              View,
            } from 'react-native';
            
            const {UIManager} = NativeModules;
            
            UIManager.setLayoutAnimationEnabledExperimental &&
              UIManager.setLayoutAnimationEnabledExperimental(true);
            
            export default class App extends React.Component {
              state = {
                w: 100,
                h: 100,
              };
            
              _onPress = () => {
                // Animate the update
                LayoutAnimation.spring();
                this.setState({w: this.state.w + 15, h: this.state.h + 15});
              };
            
              render() {
                return (
                  <View style={styles.container}>
                    <View
                      style={[styles.box, {width: this.state.w, height: this.state.h}]}
                    />
                    <TouchableOpacity onPress={this._onPress}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Press me!</Text>
                      </View>
                    </TouchableOpacity>
                  </View>
                );
              }
            }
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              },
              box: {
                width: 200,
                height: 200,
                backgroundColor: 'red',
              },
              button: {
                backgroundColor: 'black',
                paddingHorizontal: 20,
                paddingVertical: 15,
                marginTop: 15,
              },
              buttonText: {
                color: '#fff',
                fontWeight: 'bold',
              },
            });`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Animations;
