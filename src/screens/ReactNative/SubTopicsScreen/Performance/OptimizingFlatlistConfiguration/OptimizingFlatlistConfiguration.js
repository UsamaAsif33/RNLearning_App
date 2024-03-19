import {ScrollView, View, SafeAreaView} from 'react-native';

import {Text12, Text24, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const OptimizingFlatlistConfiguration = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Optimizing Flatlist Configuration</Text28>
          <Text28>{'\n'}Terms:</Text28>
          <Text12>
            {'\n'}🔷 VirtualizedList: React Native's implementation of the
            Virtual List concept, utilized through the FlatList component.
            {'\n'}🔷 Memory Consumption: Refers to the amount of list-related
            data stored in memory, potentially leading to app crashes if
            excessive.
            {'\n'}🔷 Responsiveness: Indicates the app's ability to promptly
            react to user interactions. Low responsiveness results in delayed
            responses to user actions.
            {'\n'}🔷 Blank Areas: Occur when the VirtualizedList struggles to
            render items quickly, resulting in sections of the list displaying
            blank spaces instead of content.
            {'\n'}🔷 Viewport: The visible area of content rendered on the
            screen, typically measured in pixels.
            {'\n'}🔷 Window: The larger area where list items should be mounted,
            extending beyond the viewport's boundaries.
          </Text12>

          <Text24>{'\n'}Props:</Text24>
          <Text12>
            Here are a list of props that can help to improve FlatList
            performance:
            {'\n'}If true, views that are outside of the viewport are detached
            from the native view hierarchy.
            {'\n'}
            {'\n'}Pros: This reduces time spent on the main thread, and thus
            reduces the risk of dropped frames, by excluding views outside of
            the viewport from the native rendering and drawing traversals.
            {'\n'}
            {'\n'}Cons: Be aware that this implementation can have bugs, such as
            missing content (mainly observed on iOS), especially if you are
            doing complex things with transforms and/or absolute positioning.
            Also note this does not save significant memory because the views
            are not deallocated, only detached.
          </Text12>

          <Text28>{'\n'}maxToRenderPerBatch:</Text28>
          <Text12>
            It is a VirtualizedList prop that can be passed through FlatList.
            This controls the amount of items rendered per batch, which is the
            next chunk of items rendered on every scroll.
            {'\n'}
            {'\n'}Pros: Setting a bigger number means less visual blank areas
            when scrolling (increases the fill rate).
            {'\n'}
            {'\n'}Cons: More items per batch means longer periods of JavaScript
            execution potentially blocking other event processing, like presses,
            hurting responsiveness.
          </Text12>

          <Text28>{'\n'}updateCellsBatchingPeriod:</Text28>
          <Text12>
            While maxToRenderPerBatch tells the amount of items rendered per
            batch, setting updateCellsBatchingPeriod tells your VirtualizedList
            the delay in milliseconds between batch renders (how frequently your
            component will be rendering the windowed items).
            {'\n'}
            {'\n'}Pros: Combining this prop with maxToRenderPerBatch gives you
            the power to, for example, render more items in a less frequent
            batch, or less items in a more frequent batch.
            {'\n'}
            {'\n'}Cons: Less frequent batches may cause blank areas, More
            frequent batches may cause responsiveness issues..
          </Text12>

          <Text28>{'\n'}initialNumToRender:</Text28>
          <Text12>
            The initial amount of items to render.
            {'\n'}
            {'\n'}Pros: Define precise number of items that would cover the
            screen for every device. This can be a big performance boost for the
            initial render.
            {'\n'}
            {'\n'}Cons: Setting a low initialNumToRender may cause blank areas,
            especially if it's too small to cover the viewport on initial
            render.
          </Text12>

          <Text28>{'\n'}windowSize:</Text28>
          <Text12>
            The number passed here is a measurement unit where 1 is equivalent
            to your viewport height. The default value is 21 (10 viewports
            above, 10 below, and one in between).
            {'\n'}
            {'\n'}Pros: Bigger windowSize will result in less chance of seeing
            blank space while scrolling. On the other hand, smaller windowSize
            will result in fewer items mounted simultaneously, saving memory.
            {'\n'}
            {'\n'}Cons: For a bigger windowSize, you will have more memory
            consumption. For a lower windowSize, you will have a bigger chance
            of seeing blank areas.
          </Text12>

          <Text28>{'\n'}List items:</Text28>
          <Text12>
            Below are some tips about list item components. They are the core of
            your list, so they need to be fast.
          </Text12>

          <Text28>{'\n'}Use basic components:</Text28>
          <Text12>
            The more complex your components are, the slower they will render.
            Try to avoid a lot of logic and nesting in your list items. If you
            are reusing this list item component a lot in your app, create a
            component only for your big lists and make them with as little logic
            and nesting as possible.
          </Text12>

          <Text28>{'\n'}Use light components:</Text28>
          <Text12>
            The heavier your components are, the slower they render. Avoid heavy
            images (use a cropped version or thumbnail for list items, as small
            as possible). Talk to your design team, use as little effects and
            interactions and information as possible in your list. Show them in
            your item's detail.
          </Text12>

          <Text28>{'\n'}Use memo():</Text28>
          <Text12>
            React.memo() creates a memoized component that will be re-rendered
            only when the props passed to the component change. We can use this
            function to optimize the components in the FlatList.
          </Text12>
          <CopyAbleText
            content={`import React, {memo} from 'react';
              import {View, Text} from 'react-native';

              const MyListItem = memo(
                ({title}: {title: string}) => (
                  <View>
                    <Text>{title}</Text>
                  </View>
                ),
                (prevProps, nextProps) => {
                  return prevProps.title === nextProps.title;
                },
              );

              export default MyListItem;`}
          />

          <Text28>{'\n'}Use cached optimized images:</Text28>
          <Text12>
            You can use the community packages (such as react-native-fast-image
            from @DylanVann) for more performant images. Every image in your
            list is a new Image() instance. The faster it reaches the loaded
            hook, the faster your JavaScript thread will be free again.
            {'\n'}
            <OnWebsiteDocsLink
              name="react-native-fast-image"
              link="https://github.com/DylanVann/react-native-fast-image"
            />
            {'\n'}
            <OnWebsiteDocsLink
              name="@DylanVann"
              link="https://github.com/DylanVann"
            />
          </Text12>

          <Text28>{'\n'}Use getItemLayout:</Text28>
          <Text12>
            If all your list item components have the same height (or width, for
            a horizontal list), providing the getItemLayout prop removes the
            need for your FlatList to manage async layout calculations. This is
            a very desirable optimization technique. If your components have
            dynamic size and you really need performance, consider asking your
            design team if they may think of a redesign in order to perform
            better.
          </Text12>

          <Text28>{'\n'}Use keyExtractor or key:</Text28>
          <Text12>
            You can set the keyExtractor to your FlatList component. This prop
            is used for caching and as the React key to track item re-ordering.
            You can also use a key prop in your item component.
          </Text12>

          <Text28>{'\n'}Avoid anonymous function on renderItem:</Text28>
          <Text12>
            For functional components, move the renderItem function outside of
            the returned JSX. Also, ensure that it is wrapped in a useCallback
            hook to prevent it from being recreated each render. For class
            componenents, move the renderItem function outside of the render
            function, so it won't recreate itself each time the render function
            is called.
          </Text12>
          <CopyAbleText
            content={`const renderItem = useCallback(({item}) => (
              <View key={item.key}>
                 <Text>{item.title}</Text>
              </View>
            ), []);
           
           return (
             // ...
           
             <FlatList data={items} renderItem={renderItem} />;
             // ...
           );`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default OptimizingFlatlistConfiguration;
