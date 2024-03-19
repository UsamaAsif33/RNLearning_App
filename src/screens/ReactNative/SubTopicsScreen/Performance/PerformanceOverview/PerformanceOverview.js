import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';
import {Paths} from '../../../../../assets/images';

const PerformanceOverView = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Performance Overview:</Text28>
          <Text12>
            React Native offers advantages over WebView-based tools by providing
            60 frames per second and a native look and feel. While React Native
            automates many optimizations, there are areas where manual
            intervention is necessary, as it may not always determine the best
            optimization approach. The guide provides basics for troubleshooting
            performance issues and suggests solutions for common problems to
            ensure smooth UI performance.
          </Text12>
          <Text28>{'\n'}What you need to know about frames</Text28>
          <Text12>
            Movies, often referred to as "moving pictures," create the illusion
            of realistic motion by rapidly changing static images, known as
            frames. The smoothness and lifelike quality of a video or user
            interface depend on the number of frames displayed per second. iOS
            devices typically display 60 frames per second, providing
            approximately 16.67 milliseconds for generating each frame. Failing
            to complete the necessary work within this time frame results in
            dropping a frame, causing the UI to appear unresponsive.{'\n'}
            {'\n'}Now to confuse the matter a little bit, open up the Dev Menu
            in your app and toggle Show Perf Monitor. You will notice that there
            are two different frame rates.
          </Text12>
          <Image
            style={{width: 300, height: 100, marginTop: hp('2')}}
            resizeMode="contain"
            source={Paths?.performanceOverView}
          />
          <Text28>{'\n'}JS frame rate (JavaScript thread):</Text28>
          <Text12>
            In React Native applications, the JavaScript thread handles business
            logic, including rendering React components, making API calls, and
            processing touch events. Updates to native views are batched and
            sent to the native side before each frame deadline, but if the
            JavaScript thread is unresponsive, frames may be dropped, causing
            animations controlled by JavaScript to freeze.
            {'\n'}
            {'\n'}
            Navigator transitions often trigger such unresponsiveness, as the
            JavaScript thread renders necessary components for scene
            transitions, leading to stuttering. Additionally, componentDidMount
            may add further delays during transitions. {'\n'}
            {'\n'}
            Similarly, delays in responding to touches, such as
            TouchableOpacity, occur when the JavaScript thread is overloaded
            across multiple frames, hindering processing of raw touch events and
            affecting component reactivity. This results in unresponsive touch
            events and inability to adjust native view opacity.
          </Text12>
          <Text28>{'\n'}UI frame rate (main thread):</Text28>
          <Text12>
            Many people have noticed that performance of NavigatorIOS is better
            out of the box than Navigator. The reason for this is that the
            animations for the transitions are done entirely on the main thread,
            and so they are not interrupted by frame drops on the JavaScript
            thread.
            {'\n'}
            {'\n'}
            Similarly, you can happily scroll up and down through a ScrollView
            when the JavaScript thread is locked up because the ScrollView lives
            on the main thread. The scroll events are dispatched to the JS
            thread, but their receipt is not necessary for the scroll to occur.
          </Text12>
          <Text28>{'\n'}Common sources of performance problems:</Text28>
          <Text28>{'\n'}Running in development mode (dev=true)</Text28>
          <Text12>
            JavaScript thread performance suffers greatly when running in dev
            mode. This is unavoidable: a lot more work needs to be done at
            runtime to provide you with good warnings and error messages, such
            as validating propTypes and various other assertions. Always make
            sure to test performance in release builds.
          </Text12>
          <Text28>{'\n'}Using console.log statements</Text28>
          <Text12>
            When running a bundled app, these statements can cause a big
            bottleneck in the JavaScript thread. This includes calls from
            debugging libraries such as redux-logger, so make sure to remove
            them before bundling. You can also use this babel plugin that
            removes all the console.* calls. You need to install it first with
            npm i babel-plugin-transform-remove-console --save-dev, and then
            edit the .babelrc file under your project directory like this:
          </Text12>
          <CopyAbleText
            content={`{
                "env": {
                  "production": {
                    "plugins": ["transform-remove-console"]
                  }
                }
              }`}
          />
          <Text12>
            This will automatically remove all console.* calls in the release
            (production) versions of your project.
            {'\n'}
            {'\n'}
            It is recommended to use the plugin even if no console.* calls are
            made in your project. A third party library could also call them.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            ListView initial rendering is too slow or scroll performance is bad
            for large lists
          </Text28>
          <Text12>
            Use the new FlatList or SectionList component instead. Besides
            simplifying the API, the new list components also have significant
            performance enhancements, the main one being nearly constant memory
            usage for any number of rows.
            {'\n'}
            {'\n'}
            If your FlatList is rendering slow, be sure that you've implemented
            getItemLayout to optimize rendering speed by skipping measurement of
            the rendered items.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            JS FPS plunges when re-rendering a view that hardly changes
          </Text28>
          <Text12>
            When using a ListView, providing a rowHasChanged function is crucial
            for efficiently determining if a row needs re-rendering. With
            immutable data structures, this check can be simplified to a
            reference equality comparison.
            {'\n'}
            {'\n'}
            Similarly, implementing shouldComponentUpdate allows specifying
            conditions for component re-rendering. Pure components, reliant
            solely on props and state for rendering, benefit from PureComponent,
            automating re-rendering optimizations. Immutable data structures
            further enhance efficiency. In cases of deep comparisons on large
            object lists, full component re-rendering might be faster and less
            complex.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Dropping JS thread FPS because of doing a lot of work on the
            JavaScript thread at the same time
          </Text28>
          <Text12>
            The most common occurrence of performance issues, such as slow
            Navigator transitions, stems from this, but there are other
            instances when it may arise. While using InteractionManager can
            mitigate this, if delaying work during animation compromises user
            experience, LayoutAnimation becomes a viable alternative.
            {'\n'}
            {'\n'}
            Presently, the Animated API calculates each keyframe on demand on
            the JavaScript thread, unless configured with useNativeDriver: true.
            In contrast, LayoutAnimation utilizes Core Animation, unaffected by
            frame drops on both JavaScript and main threads.
            {'\n'}
            {'\n'}
            An example where LayoutAnimation proves beneficial is animating
            modals (e.g., sliding down from the top and fading in an overlay)
            while concurrently handling multiple network requests, modal content
            rendering, and updating the parent view. Refer to the Animations
            guide for detailed instructions on leveraging LayoutAnimation.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Caveats:
          </Text28>
          <Text12>
            🔷 LayoutAnimation only works for fire-and-forget animations
            ("static" animations) -- if it must be interruptible, you will need
            to use Animated.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Animating the size of an image drops UI thread FPS:
          </Text28>
          <Text12>
            On iOS, each time you adjust the width or height of an Image
            component it is re-cropped and scaled from the original image. This
            can be very expensive, especially for large images. Instead, use the
            transform: Scale style property to animate the size. An example of
            when you might do this is when you tap an image and zoom it in to
            full screen.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            My TouchableX view isn't very responsive:
          </Text28>
          <Text12>
            Sometimes, if we do an action in the same frame that we are
            adjusting the opacity or highlight of a component that is responding
            to a touch, we won't see that effect until after the onPress
            function has returned. If onPress does a setState that results in a
            lot of work and a few frames dropped, this may occur. A solution to
            this is to wrap any action inside of your onPress handler in
            requestAnimationFrame:
          </Text12>
          <CopyAbleText
            content={`handleOnPress() {
                requestAnimationFrame(() => {
                  this.doExpensiveAction();
                });
              }
            `}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Slow navigator transitions:
          </Text28>
          <Text12>
            Navigator animations in React Native are managed by the JavaScript
            thread, which can cause stuttering if the thread becomes overwhelmed
            during transitions. For instance, during a "push from right"
            transition, updates may be skipped if the JavaScript thread is
            overloaded, resulting in animation stutter.
            {'\n'}
            {'\n'}
            One solution is to transfer JavaScript-based animations to the main
            thread, such as by precalculating transition offsets and executing
            them efficiently. This approach ensures that drops in the JavaScript
            thread's performance do not significantly affect animation quality.
            {'\n'}
            {'\n'}
            To address this issue, the new React Navigation library utilizes
            native components and the Animated library to deliver smooth 60 FPS
            animations on the native thread. This relieves the JavaScript thread
            from animation responsibilities, enhancing overall performance.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PerformanceOverView;
