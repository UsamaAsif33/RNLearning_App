import {SafeAreaView, ScrollView, View} from 'react-native';

import Header from '../../../../../components/Header/Header';
import {Text12, Text18, Text28} from '../../../../../components/Text';
import styles from '../Styles';

const Timers = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Timers</Text28>
          <Text12>
            In React Native, several asynchronous functions are available for
            scheduling tasks:
            {'\n'}🔷 setTimeout and clearTimeout: Schedule and cancel a one-time
            task after a specified delay.
            {'\n'}🔷 setInterval and clearInterval: Schedule and cancel a
            recurring task at a specified interval.
            {'\n'}🔷 setImmediate and clearImmediate: Schedule and cancel a task
            to be executed at the end of the current JavaScript execution block.
            {'\n'}🔷 requestAnimationFrame and cancelAnimationFrame: Schedule
            and cancel a task to be executed before the next repaint. It's
            important to note that requestAnimationFrame behaves differently
            from setTimeout(fn, 0). The former fires after all frames have
            flushed, while the latter fires as quickly as possible, potentially
            over 1000 times per second on certain devices like iPhone 5S.
            Additionally, setImmediate is executed at the end of the current
            JavaScript execution block, just before sending the batched response
            back to native. Calling setImmediate within a setImmediate callback
            results in immediate execution without yielding back to native in
            between. Furthermore, the Promise implementation in React Native
            uses setImmediate as its asynchronicity implementation.
          </Text12>

          <Text18>InteractionManager</Text18>
          <Text12>
            To ensure smooth performance in React Native apps, it's crucial to
            avoid heavy operations during user interactions and animations.
            While React Native runs on a single JavaScript execution thread, you
            can use InteractionManager to schedule tasks after interactions and
            animations are completed. You can schedule tasks to run after
            interactions using {' '}
            <Text12 textStyle={{fontWeight: 'bold'}}>
              InteractionManager.runAfterInteractions( )
            </Text12>
            . This ensures that long-running synchronous tasks are scheduled to
            start only after interactions or animations have finished. Compared
            to other scheduling methods like requestAnimationFrame() or
            setTimeout/setInterval, which may delay animations,
            runAfterInteractions() prioritizes tasks without delaying ongoing
            animations. The system waits until all active touches (interactions)
            have ended or been cancelled before executing the scheduled tasks.
            Additionally, InteractionManager allows registering animations by
            creating an interaction handle when the animation starts and
            clearing it upon completion using {'\t'}  
            <Text12 textStyle={{fontWeight: 'bold'}}>
                 InteractionManager.createInteractionHandle()
            </Text12>{' '}
            and{' '}
            <Text12 textStyle={{fontWeight: 'bold'}}>
              InteractionManager.clearInteractionHandle(handle)
            </Text12>
            , respectively. This ensures that tasks queued with
            runAfterInteractions() are executed appropriately, taking into
            account ongoing animations.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Timers;
