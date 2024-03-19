import {SafeAreaView, ScrollView, View} from 'react-native';

import {COLORS} from '../../../../../shared/theme';
import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';

const FastRefresh = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Fast Refresh:</Text28>
          <Text12>
            Fast Refresh is a React Native feature that provides near-instant
            feedback for changes in React components. It's enabled by default
            and can be toggled in the React Native Dev Menu.
            <Text24>
              {'\n'}
              {'\n'}
              {'\n'}How It Works:
            </Text24>
            {'\n'}
            {'\n'}🔷 Fast Refresh updates only the edited module, re-rendering
            the React component if applicable.
            {'\n'}🔷 For modules with non-React exports, it updates both the
            edited module and its importers.
            {'\n'}🔷 If the edited file is imported outside the React tree, Fast
            Refresh does a full reload.
            <Text24>
              {'\n'}
              {'\n'}
              {'\n'}Error Resilience:
            </Text24>
            {'\n'}
            {'\n'}Syntax errors can be fixed during Fast Refresh sessions,
            removing redboxes. Modules with syntax errors don't run, eliminating
            the need for app reload.
            {'\n'}Runtime errors during module initialization are handled; the
            session continues once errors are fixed.
            {'\n'}Similarly, if a runtime error occurs within a component, the
            session continues after correction, with React remounting the app.
            {'\n'}Error boundaries help in gracefully handling errors in
            production, retrying rendering after redboxes on subsequent edits.
            They should be designed intentionally, avoiding excessive
            granularity.
            <Text24>
              {'\n'}
              {'\n'}
              {'\n'}Limitations:
            </Text24>
            {'\n'}
            {'\n'}
            Fast Refresh endeavors to retain local React state in the edited
            component, but certain conditions may cause state reset:
            {'\n'}
            {'\n'}🔷 Class components do not preserve state; only function
            components and Hooks do.
            {'\n'}🔷 Additional exports alongside the React component in the
            edited module may lead to state resetting.
            {'\n'}🔷 If a higher-order component like
            createNavigationContainer(MyScreen) is exported, and the returned
            component is a class, state resets.
            {'\n'}
            {'\n'}In the longer term, as more of your codebase moves to function
            components and Hooks, you can expect state to be preserved in more
            cases.
            <Text24>
              {'\n'}
              {'\n'}
              {'\n'}Tips:
            </Text24>
            {'\n'}
            {'\n'}🔷 Fast Refresh preserves React local state in function
            components (and Hooks) by default.
            {'\n'}🔷 Sometimes you might want to force the state to be reset,
            and a component to be remounted. For example, this can be handy if
            you're tweaking an animation that only happens on mount. To do this,
            you can add // @refresh reset anywhere in the file you're editing.
            This directive is local to the file, and instructs Fast Refresh to
            remount components defined in that file on every edit.
            <Text24>
              {'\n'}
              {'\n'}
              {'\n'}Fast Refresh and Hooks:
            </Text24>
            {'\n'}
            {'\n'}
            Fast Refresh in React attempts to preserve component state between
            edits.
            {'\n'}useState and useRef Hooks maintain their previous values
            unless their arguments or order of calls change.
            {'\n'}Hooks with dependencies like useEffect always update during
            Fast Refresh, ignoring their dependency lists.
            {'\n'}This ensures that edits reflect accurately on the screen, even
            if dependencies remain unchanged.
            {'\n'}Despite potential unexpected outcomes, it's advisable to write
            resilient code to facilitate the introduction of new dependencies,
            even without Fast Refresh.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default FastRefresh;
