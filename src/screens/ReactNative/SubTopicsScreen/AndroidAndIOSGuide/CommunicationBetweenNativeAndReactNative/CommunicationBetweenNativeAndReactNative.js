import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

import styles from '../Styles';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const CommunicationBetweenNativeAndReactNative = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Communication between native and React Native:</Text28>
          <Text12>
            In Integrating with Existing Apps guide and Native UI Components
            guide we learn how to embed React Native in a native component and
            vice versa. When we mix native and React Native components, we'll
            eventually find a need to communicate between these two worlds. Some
            ways to achieve that have been already mentioned in other guides.
            This article summarizes available techniques.
          </Text12>
          <Text28>Introduction:</Text28>
          <Text12>
            React Native is inspired by React, so the basic idea of the
            information flow is similar. The flow in React is one-directional.
            We maintain a hierarchy of components, in which each component
            depends only on its parent and its own internal state. We do this
            with properties: data is passed from a parent to its children in a
            top-down manner. If an ancestor component relies on the state of its
            descendant, one should pass down a callback to be used by the
            descendant to update the ancestor.
            {'\n'}
            {'\n'}
            The same concept applies to React Native. As long as we are building
            our application purely within the framework, we can drive our app
            with properties and callbacks. But, when we mix React Native and
            native components, we need some specific, cross-language mechanisms
            that would allow us to pass information between them.
          </Text12>
          <Text28>Properties:</Text28>
          <Text12>
            Properties are the most straightforward way of cross-component
            communication. So we need a way to pass properties both from native
            to React Native, and from React Native to native.
          </Text12>
          <Text28>Passing properties from native to React Native:</Text28>
          <Text12>
            You can pass properties down to the React Native app by providing a
            custom implementation of ReactActivityDelegate in your main
            activity. This implementation should override getLaunchOptions to
            return a Bundle with the desired properties.
          </Text12>
          <CopyAbleTextWithButton
            content1={`public class MainActivity extends ReactActivity {
                @Override
                protected ReactActivityDelegate createReactActivityDelegate() {
                  return new ReactActivityDelegate(this, getMainComponentName()) {
                    @Override
                    protected Bundle getLaunchOptions() {
                      Bundle initialProperties = new Bundle();
                      ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(
                              "https://dummyimage.com/600x400/ffffff/000000.png",
                              "https://dummyimage.com/600x400/000000/ffffff.png"
                      ));
                      initialProperties.putStringArrayList("images", imageList);
                      return initialProperties;
                    }
                  };
                }
              }`}
            content2={`class MainActivity : ReactActivity() {
                override fun createReactActivityDelegate(): ReactActivityDelegate {
                    return object : ReactActivityDelegate(this, mainComponentName) {
                        override fun getLaunchOptions(): Bundle {
                            val imageList = arrayListOf("https://dummyimage.com/600x400/ffffff/000000.png", "https://dummyimage.com/600x400/000000/ffffff.png")
                            val initialProperties = Bundle().apply { putStringArrayList("images", imageList) }
                            return initialProperties
                        }
                    }
                }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />

          <CopyAbleText
            content={`import React from 'react';
            import {View, Image} from 'react-native';
            
            export default class ImageBrowserApp extends React.Component {
              renderImage(imgURI) {
                return <Image source={{uri: imgURI}} />;
              }
              render() {
                return <View>{this.props.images.map(this.renderImage)}</View>;
              }
            }`}
          />
          <Text12>
            ReactRootView provides a read-write property appProperties. After
            appProperties is set, the React Native app is re-rendered with new
            properties. The update is only performed when the new updated
            properties differ from the previous ones.
          </Text12>
          <CopyAbleTextWithButton
            content1={`Bundle updatedProps = mReactRootView.getAppProperties();
            ArrayList<String> imageList = new ArrayList<String>(Arrays.asList(
                    "https://dummyimage.com/600x400/ff0000/000000.png",
                    "https://dummyimage.com/600x400/ffffff/ff0000.png"
            ));
            updatedProps.putStringArrayList("images", imageList);
            
            mReactRootView.setAppProperties(updatedProps);`}
            content2={`var updatedProps: Bundle = reactRootView.getAppProperties()
            var imageList = arrayListOf("https://dummyimage.com/600x400/ff0000/000000.png", "https://dummyimage.com/600x400/ffffff/ff0000.png")`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12>
            It is fine to update properties anytime. However, updates have to be
            performed on the main thread. You use the getter on any thread.
            {'\n'}
            {'\n'}
            There is no way to update only a few properties at a time. We
            suggest that you build it into your own wrapper instead.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Passing properties from React Native to native:
          </Text28>
          <Text12>
            The problem exposing properties of native components is covered in
            detail in this article. In short, properties that are to be
            reflected in JavaScript needs to be exposed as setter method
            annotated with @ReactProp, then use them in React Native as if the
            component was an ordinary React Native component.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Limits of properties:
          </Text28>
          <Text12>
            The main drawback of cross-language properties is that they do not
            support callbacks, which would allow us to handle bottom-up data
            bindings. Imagine you have a small RN view that you want to be
            removed from the native parent view as a result of a JS action.
            There is no way to do that with props, as the information would need
            to go bottom-up.
            {'\n'}
            {'\n'}
            Although we have a flavor of cross-language callbacks (described
            here), these callbacks are not always the thing we need. The main
            problem is that they are not intended to be passed as properties.
            Rather, this mechanism allows us to trigger a native action from JS,
            and handle the result of that action in JS.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Other ways of cross-language interaction (events and native modules)
          </Text28>
          <Text12>
            As stated in the previous chapter, using properties comes with some
            limitations. Sometimes properties are not enough to drive the logic
            of our app and we need a solution that gives more flexibility. This
            chapter covers other communication techniques available in React
            Native. They can be used for internal communication (between JS and
            native layers in RN) as well as for external communication (between
            RN and the 'pure native' part of your app).
            {'\n'}
            {'\n'}
            React Native enables you to perform cross-language function calls.
            You can execute custom native code from JS and vice versa.
            Unfortunately, depending on the side we are working on, we achieve
            the same goal in different ways. For native - we use events
            mechanism to schedule an execution of a handler function in JS,
            while for React Native we directly call methods exported by native
            modules.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Calling React Native functions from native (events):
          </Text28>
          <Text12>
            Events are described in detail in this article. Note that using
            events gives us no guarantees about execution time, as the event is
            handled on a separate thread.
            {'\n'}
            {'\n'}
            Events are powerful, because they allow us to change React Native
            components without needing a reference to them. However, there are
            some pitfalls that you can fall into while using them:
            {'\n'}
            {'\n'}
            🔷 As events can be sent from anywhere, they can introduce
            spaghetti-style dependencies into your project. 🔷 Events share
            namespace, which means that you may encounter some name collisions.
            Collisions will not be detected statically, which makes them hard to
            debug. 🔷 If you use several instances of the same React Native
            component and you want to distinguish them from the perspective of
            your event, you'll likely need to introduce identifiers and pass
            them along with events (you can use the native view's reactTag as an
            identifier).
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Calling native functions from React Native (native modules):
          </Text28>
          <Text12>
            Native modules are Java/Kotlin classes that are available in JS.
            Typically one instance of each module is created per JS bridge. They
            can export arbitrary functions and constants to React Native. They
            have been covered in detail in this article.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommunicationBetweenNativeAndReactNative;
