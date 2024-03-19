import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import styles from '../Styles';

const IOSCommunicationBetweenNativeAndReactNative = () => {
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
            React Native, inspired by React, maintains a one-directional flow of
            information similar to React's hierarchy of components. Data is
            passed down from parent to children through properties, with each
            component relying only on its parent and internal state. When mixing
            React Native with native components, specific mechanisms are
            required to pass information between them.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Properties:
          </Text28>
          <Text12>
            Properties are the most straightforward way of cross-component
            communication. So we need a way to pass properties both from native
            to React Native, and from React Native to native.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Passing properties from native to React Native:
          </Text28>
          <Text12>
            RCTRootView is used to embed a React Native view within a native
            component, serving as a UIView that hosts the React Native app and
            facilitates communication between native and React Native sides.
            When initializing RCTRootView, arbitrary properties can be passed
            down to the React Native app using the initialProperties parameter,
            which is converted into a JSON object accessible by the top-level
            JavaScript component.
          </Text12>
          <CopyAbleText
            content={`
            NSArray *imageList = @[@"https://dummyimage.com/600x400/ffffff/000000.png",
            @"https://dummyimage.com/600x400/000000/ffffff.png"];

                NSDictionary *props = @{@"images" : imageList};

                RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                      moduleName:@"ImageBrowserApp"
                               initialProperties:props];
            `}
          />
          <CopyAbleText
            content={`
            import React from 'react';
            import {View, Image} from 'react-native';
            
            export default class ImageBrowserApp extends React.Component {
              renderImage(imgURI) {
                return <Image source={{uri: imgURI}} />;
              }
              render() {
                return <View>{this.props.images.map(this.renderImage)}</View>;
              }
            }
            `}
          />

          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>root:</Text28>
          <Text12>
            RCTRootView also provides a read-write property appProperties. After
            appProperties is set, the React Native app is re-rendered with new
            properties. The update is only performed when the new updated
            properties differ from the previous ones.
          </Text12>
          <CopyAbleText
            content={`
            NSArray *imageList = @[@"https://dummyimage.com/600x400/ff0000/000000.png",
                       @"https://dummyimage.com/600x400/ffffff/ff0000.png"];

                rootView.appProperties = @{@"images" : imageList};
            `}
          />

          <Text12>
            It is fine to update properties anytime. However, updates have to be
            performed on the main thread. You use the getter on any thread.There
            is no way to update only a few properties at a time. We suggest that
            you build it into your own wrapper instead.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Passing properties from React Native to native:
          </Text28>
          <Text12>
            The problem exposing properties of native components is covered in
            detail in this article. In short, export properties with
            RCT_CUSTOM_VIEW_PROPERTY macro in your custom native component, then
            use them in React Native as if the component was an ordinary React
            Native component.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Limits of properties:
          </Text28>
          <Text12>
            The main drawback of cross-language properties in React Native is
            the absence of support for callbacks, limiting bottom-up data
            bindings. While a mechanism for cross-language callbacks exists, it
            primarily facilitates triggering native actions from JavaScript and
            handling the results in JavaScript, rather than passing callbacks as
            properties. This may not fully meet the needs for managing data flow
            between native and React Native components.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Other ways of cross-language interaction (events and native
            modules):
          </Text28>
          <Text12>
            Communication techniques in React Native beyond using properties
            alone. It covers methods for internal and external communication
            between JavaScript and native layers in React Native, as well as
            with the 'pure native' part of the app. One such technique is
            cross-language function calls, where custom native code can be
            executed from JavaScript and vice versa. The implementation differs
            depending on whether working on the native or React Native side,
            utilizing either an events mechanism or directly calling methods
            exported by native modules.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Calling React Native functions from native (events):
          </Text28>
          <Text12>
            events in React Native, highlighting their utility and drawbacks.
            While events allow for changing React Native components without
            requiring a reference to them, they offer no guarantees about
            execution time as they are handled on a separate thread.
            {'\n'}
            Events can introduce spaghetti-style dependencies and namespace
            collisions, which are not statically detected, making debugging
            challenging. To distinguish between multiple instances of the same
            React Native component, identifiers are typically introduced and
            passed along with events, often using the native view's reactTag as
            an identifier.
            {'\n'}A common pattern when embedding native components in React
            Native involves making the native component's RCTViewManager a
            delegate for the views, sending events back to JavaScript via the
            bridge. This helps centralize related event calls in one place.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Calling native functions from React Native (native modules)
          </Text28>
          <Text12>
            native modules in React Native, which are Objective-C classes
            accessible in JavaScript and capable of exporting functions and
            constants. These modules are singletons, limiting their use in
            embedding scenarios. For example, updating a native parent view from
            a React Native component requires a complex solution involving
            exporting a function that takes identifiers of native views and
            maintaining a mapping from identifiers to native views. Despite this
            complexity, native modules are essential for exposing existing
            native libraries to JavaScript, as demonstrated by the Geolocation
            library.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Layout computation flow:
          </Text28>
          <Text12>
            When integrating native and React Native, we also need a way to
            consolidate two different layout systems. This section covers common
            layout problems and provides a brief description of mechanisms to
            address them.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Layout of a native component embedded in React Native
          </Text28>
          <Text12>
            This case is covered in this article. To summarize, since all our
            native react views are subclasses of UIView, most style and size
            attributes will work like you would expect out of the box.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Layout of a React Native component embedded in native:
          </Text28>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            React Native content with fixed size:
          </Text28>
          <Text12>
            The general scenario is when we have a React Native app with a fixed
            size, which is known to the native side. In particular, a
            full-screen React Native view falls into this case. If we want a
            smaller root view, we can explicitly set RCTRootView's frame.
            {'\n'}
            For instance, to make an RN app 200 (logical) pixels high, and the
            hosting view's width wide, we could do:
          </Text12>
          <CopyAbleText
            content={`- (void)viewDidLoad
            {
              [...]
              RCTRootView *rootView = [[RCTRootView alloc] initWithBridge:bridge
                                                               moduleName:appName
                                                        initialProperties:props];
              rootView.frame = CGRectMake(0, 0, self.view.width, 200);
              [self.view addSubview:rootView];
            }
            `}
          />
          <Text12>
            When working with a fixed-size root view in React Native, it's
            important to ensure that the content remains within its bounds.
            Flexbox layout is recommended to achieve this, as absolute
            positioning may cause overlap with native views and unexpected
            behavior, such as 'TouchableHighlight' not highlighting touches
            outside the root view's bounds. Dynamically updating the root view's
            size using its frame property is acceptable, as React Native will
            handle the content's layout accordingly.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            React Native content with flexible size:
          </Text28>
          <Text12>
            In some cases we'd like to render content of initially unknown size.
            Let's say the size will be defined dynamically in JS. We have two
            solutions to this problem.
            {'\n'}
            {'\n'}
            1. You can wrap your React Native view in a ScrollView component.
            This guarantees that your content will always be available and it
            won't overlap with native views.
            {'\n'}
            {'\n'}
            2.React Native allows you to determine, in JS, the size of the RN
            app and provide it to the owner of the hosting RCTRootView. The
            owner is then responsible for re-laying out the subviews and keeping
            the UI consistent. We achieve this with RCTRootView's flexibility
            modes.
            {'\n'}
            {'\n'}
            RCTRootView supports 4 different size flexibility modes:
          </Text12>
          <CopyAbleText
            content={`typedef NS_ENUM(NSInteger, RCTRootViewSizeFlexibility) {
                RCTRootViewSizeFlexibilityNone = 0,
                RCTRootViewSizeFlexibilityWidth,
                RCTRootViewSizeFlexibilityHeight,
                RCTRootViewSizeFlexibilityWidthAndHeight,
              };
            `}
          />
          <Text12>
            RCTRootViewSizeFlexibilityNone is the default value, which makes a
            root view's size fixed (but it still can be updated with setFrame:).
            The other three modes allow us to track React Native content's size
            updates. For instance, setting mode to
            RCTRootViewSizeFlexibilityHeight will cause React Native to measure
            the content's height and pass that information back to RCTRootView's
            delegate. An arbitrary action can be performed within the delegate,
            including setting the root view's frame, so the content fits. The
            delegate is called only when the size of the content has changed.
            {'\n'}
            {'\n'}
            Let's look at an example.
          </Text12>
          <CopyAbleText
            content={`- (instancetype)initWithFrame:(CGRect)frame
            {
              [...]
            
              _rootView = [[RCTRootView alloc] initWithBridge:bridge
              moduleName:@"FlexibilityExampleApp"
              initialProperties:@{}];
            
              _rootView.delegate = self;
              _rootView.sizeFlexibility = RCTRootViewSizeFlexibilityHeight;
              _rootView.frame = CGRectMake(0, 0, self.frame.size.width, 0);
            }
            
            #pragma mark - RCTRootViewDelegate
            - (void)rootViewDidChangeIntrinsicSize:(RCTRootView *)rootView
            {
              CGRect newFrame = rootView.frame;
              newFrame.size = rootView.intrinsicContentSize;
            
              rootView.frame = newFrame;
            }
            `}
          />
          <Text12>
            In the example, a FlexibleSizeExampleView contains a root view
            initialized with a delegate to handle size updates. The root view's
            size flexibility is set to RCTRootViewSizeFlexibilityHeight,
            indicating that the rootViewDidChangeIntrinsicSize: method will be
            called when the React Native content changes height. The root view's
            width, position, and height (which depends on RN content) are set.
            Dynamic changes to the root view's size flexibility are allowed,
            triggering layout recalculation and calling the delegate's
            rootViewDidChangeIntrinsicSize: method once content size is
            determined.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IOSCommunicationBetweenNativeAndReactNative;
