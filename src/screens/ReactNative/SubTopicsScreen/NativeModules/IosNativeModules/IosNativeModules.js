import {Image, SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {Paths} from '../../../../../assets/images';

const IosNativeModules = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28 >iOS Native Modules:</Text28>
          <Text12 >
            Welcome to Native Modules for iOS. Please start by reading the
            Native Modules Intro for an intro to what native modules are.
          </Text12>

          <Text28 >
            Create a Calendar Native Module:
          </Text28>
          <Text12 >
            In the following guide you will create a native module,
            CalendarModule, that will allow you to access Apple's calendar APIs
            from JavaScript. By the end you will be able to call
            CalendarModule.createCalendarEvent('Dinner Party', 'My House'); from
            JavaScript, invoking a native method that creates a calendar event.
          </Text12>
          <Text28 >Setup:</Text28>
          <Text12 >
            To get started, open up the iOS project within your React Native
            application in Xcode. You can find your iOS project here within a
            React Native app:
          </Text12>
          <Image
            style={{width: 320, height: 250}}
            source={Paths?.IosNaiveModules?.IosSetup}
          />
          <Text12 >
            We recommend using Xcode to write your native code. Xcode is built
            for iOS development, and using it will help you to quickly resolve
            smaller errors like code syntax.
          </Text12>
          <Text28 >
            Create Custom Native Module Files:
          </Text28>
          <Text12 >
            The first step is to create our main custom native module header and
            implementation files. Create a new file called RCTCalendarModule.h
          </Text12>
          <Image
            style={{width: 320, height: 250}}
            source={Paths?.IosNaiveModules?.CustomIosNativeModules}
          />
          <Text12 >
            and add the following to it:
          </Text12>
          <CopyAbleText
            content={`//  RCTCalendarModule.h
            #import <React/RCTBridgeModule.h>
            @interface RCTCalendarModule : NSObject <RCTBridgeModule>
            @end
            `}
          />

          <Text12 >
            You can use any name that fits the native module you are building.
            Name the class RCTCalendarModule since you are creating a calendar
            native module. Since ObjC does not have language-level support for
            namespaces like Java or C++, convention is to prepend the class name
            with a substring. This could be an abbreviation of your application
            name or your infra name. RCT, in this example, refers to React.
            {'\n'}
            {'\n'}
            As you can see below, the CalendarModule class implements the
            RCTBridgeModule protocol. A native module is an Objective-C class
            that implements the RCTBridgeModule protocol.
            {'\n'}
            {'\n'}
            Next up, let’s start implementing the native module. Create the
            corresponding implementation file, RCTCalendarModule.m, in the same
            folder and include the following content:
          </Text12>

          <CopyAbleText
            content={`// RCTCalendarModule.m
            #import "RCTCalendarModule.h"
            
            @implementation RCTCalendarModule
            
            // To export a module named RCTCalendarModule
            RCT_EXPORT_MODULE();
            
            @end
            `}
          />
          <Text28 >Module Name:</Text28>
          <Text12 >
            For now, your RCTCalendarModule.m native module only includes a
            RCT_EXPORT_MODULE macro, which exports and registers the native
            module class with React Native. The RCT_EXPORT_MODULE macro also
            takes an optional argument that specifies the name that the module
            will be accessible as in your JavaScript code.
            {'\n'}
            {'\n'}
            This argument is not a string literal. In the example below
            RCT_EXPORT_MODULE(CalendarModuleFoo) is passed, not
            RCT_EXPORT_MODULE("CalendarModuleFoo").
          </Text12>
          <CopyAbleText
            content={`// To export a module named CalendarModuleFoo
            RCT_EXPORT_MODULE(CalendarModuleFoo);
            `}
          />
          <Text12 >
            The native module can then be accessed in JS like this:
          </Text12>
          <CopyAbleText
            content={`const {CalendarModuleFoo} = ReactNative.NativeModules;
            `}
          />
          <Text12 >
            If you do not specify a name, the JavaScript module name will match
            the Objective-C class name, with any "RCT" or "RK" prefixes removed.
            {'\n'}
            {'\n'}
            Let's follow the example below and call RCT_EXPORT_MODULE without
            any arguments. As a result, the module will be exposed to React
            Native using the name CalendarModule, since that is the Objective-C
            class name, with RCT removed.
          </Text12>
          <CopyAbleText
            content={`// Without passing in a name this will export the native module name as the Objective-C class name with “RCT” removed
            RCT_EXPORT_MODULE();
            `}
          />
          <Text12 >
            The native module can then be accessed in JS like this:
          </Text12>
          <CopyAbleText
            content={`const {CalendarModule} = ReactNative.NativeModules;
            `}
          />
          <Text28>Export a Native Method to JavaScript</Text28>
          <Text12 >
            React Native will not expose any methods in a native module to
            JavaScript unless explicitly told to. This can be done using the
            RCT_EXPORT_METHOD macro. Methods written in the RCT_EXPORT_METHOD
            macro are asynchronous and the return type is therefore always void.
            In order to pass a result from a RCT_EXPORT_METHOD method to
            JavaScript you can use callbacks or emit events (covered below).
            Let’s go ahead and set up a native method for our CalendarModule
            native module using the RCT_EXPORT_METHOD macro. Call it
            createCalendarEvent() and for now have it take in name and location
            arguments as strings. Argument type options will be covered shortly.
          </Text12>
          <CopyAbleText
            content={`RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
            {
            }
            `}
          />
          <Text12 >
            Before you build out the createCalendarEvent() method’s
            functionality, add a console log in the method so you can confirm it
            has been invoked from JavaScript in your React Native application.
            Use the RCTLog APIs from React. Let’s import that header at the top
            of your file and then add the log call.
          </Text12>
          <CopyAbleText
            content={`
            #import <React/RCTLog.h>
                    RCT_EXPORT_METHOD(createCalendarEvent:(NSString *)name location:(NSString *)location)
                    {
                    RCTLogInfo(@"Pretending to create an event %@ at %@", name, location);
                    }
            `}
          />
          <Text28>Synchronous Methods</Text28>
          <Text12 >
            You can use the RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD to create a
            synchronous native method.
          </Text12>
          <CopyAbleText
            content={`
            RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD(getName)
            {
            return [[UIDevice currentDevice] name];
            }
            `}
          />
          <Text12 >
            The return type of this method must be of object type (id) and
            should be serializable to JSON. This means that the hook can only
            return nil or JSON values (e.g. NSNumber, NSString, NSArray,
            NSDictionary).
            {'\n'}
            {'\n'}
            At the moment, we do not recommend using synchronous methods, since
            calling methods synchronously can have strong performance penalties
            and introduce threading-related bugs to your native modules.
            Additionally, please note that if you choose to use
            RCT_EXPORT_BLOCKING_SYNCHRONOUS_METHOD, your app can no longer use
            the Google Chrome debugger. This is because synchronous methods
            require the JS VM to share memory with the app. For the Google
            Chrome debugger, React Native runs inside the JS VM in Google
            Chrome, and communicates asynchronously with the mobile devices via
            WebSockets.
          </Text12>
          <Text28>Test What You Have Built</Text28>
          <Text12 >
            At this point you have set up the basic scaffolding for your native
            module in iOS. Test that out by accessing the native module and
            invoking it’s exported method in JavaScript.
            {'\n'}
            {'\n'}
            Find a place in your application where you would like to add a call
            to the native module’s createCalendarEvent() method. Below is an
            example of a component, NewModuleButton you can add in your app. You
            can invoke the native module inside NewModuleButton's onPress()
            function.
          </Text12>
          <CopyAbleText
            content={`import React from 'react';
            import {NativeModules, Button} from 'react-native';
            
            const NewModuleButton = () => {
              const onPress = () => {
                console.log('We will invoke the native module here!');
              };
            
              return (
                <Button
                  title="Click to invoke your native module!"
                  color="#841584"
                  onPress={onPress}
                />
              );
            };
            
            export default NewModuleButton;`}
          />

          <Text12 >
            In order to access your native module from JavaScript you need to
            first import NativeModules from React Native:
          </Text12>
          <CopyAbleText
            content={`import {NativeModules} from 'react-native';`}
          />

          <Text12 >
            You can then access the CalendarModule native module off of
            NativeModules.
          </Text12>
          <CopyAbleText content={`const {CalendarModule} = NativeModules;`} />
          <Text12 >
            Now that you have the CalendarModule native module available, you
            can invoke your native method createCalendarEvent(). Below it is
            added to the onPress() method in NewModuleButton:
          </Text12>
          <CopyAbleText
            content={`const onPress = () => {
                CalendarModule.createCalendarEvent('testName', 'testLocation');
              };`}
          />
          <Text12 >
            The final step is to rebuild the React Native app so that you can
            have the latest native code (with your new native module!)
            available. In your command line, where the react native application
            is located, run the following :
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm run ios`}
            content2={`yarn ios`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />
          <Text28 >Building as You Iterate</Text28>
          <Text12 >
            As you work through these guides and iterate on your native module,
            you will need to do a native rebuild of your application to access
            your most recent changes from JavaScript. This is because the code
            that you are writing sits within the native part of your
            application. While React Native’s metro bundler can watch for
            changes in JavaScript and rebuild JS bundle on the fly for you, it
            will not do so for native code. So if you want to test your latest
            native changes you need to rebuild by using the above command.
          </Text12>
          <Text28 >Recap✨</Text28>
          <Text12 >
            You should now be able to invoke your createCalendarEvent() method
            on your native module in JavaScript. Since you are using RCTLog in
            the function, you can confirm your native method is being invoked by
            enabling debug mode in your app and looking at the JS console in
            Chrome or the mobile app debugger Flipper. You should see your
            RCTLogInfo(@"Pretending to create an event %@ at %@", name,
            location); message each time you invoke the native module method.
          </Text12>
          <Image
            style={{width: 300, height: 100}}
            source={Paths?.IosNaiveModules?.IosRecap}
          />
          <Text12 >
            At this point you have created an iOS native module and invoked a
            method on it from JavaScript in your React Native application. You
            can read on to learn more about things like what argument types your
            native module method takes and how to setup callbacks and promises
            within your native module.
          </Text12>
          <Text28 >
            Beyond a Calendar Native Module:{'\n'}
          </Text28>
          <Text28 >
            Better Native Module Export:
          </Text28>

          <Text12>
            Importing your native module by pulling it off of NativeModules like
            above is a bit clunky.
            {'\n'}
            {'\n'}
            To save consumers of your native module from needing to do that each
            time they want to access your native module, you can create a
            JavaScript wrapper for the module. Create a new JavaScript file
            named NativeCalendarModule.js with the following content:
          </Text12>
          <CopyAbleText
            content={`/**
            * This exposes the native CalendarModule module as a JS module. This has a
            * function 'createCalendarEvent' which takes the following parameters:
            
            * 1. String name: A string representing the name of the event
            * 2. String location: A string representing the location of the event
            */
            import {NativeModules} from 'react-native';
            const {CalendarModule} = NativeModules;
            export default CalendarModule;`}
          />
          <Text12>
            This JavaScript file also becomes a good location for you to add any
            JavaScript side functionality. For example, if you use a type system
            like TypeScript you can add type annotations for your native module
            here. While React Native does not yet support Native to JS type
            safety, with these type annotations, all your JS code will be type
            safe. These annotations will also make it easier for you to switch
            to type-safe native modules down the line. Below is an example of
            adding type safety to the Calendar Module:
          </Text12>
          <CopyAbleText
            content={`/**
            * This exposes the native CalendarModule module as a JS module. This has a
            * function 'createCalendarEvent' which takes the following parameters:
            *
            * 1. String name: A string representing the name of the event
            * 2. String location: A string representing the location of the event
            */
           import {NativeModules} from 'react-native';
           const {CalendarModule} = NativeModules;
           interface CalendarInterface {
             createCalendarEvent(name: string, location: string): void;
           }
           export default CalendarModule as CalendarInterface;`}
          />
          <Text12>
            In your other JavaScript files you can access the native module and
            invoke its method like this:
          </Text12>
          <CopyAbleText
            content={`import NativeCalendarModule from './NativeCalendarModule';
            NativeCalendarModule.createCalendarEvent('foo', 'bar');`}
          />
          <Text28>Argument Types</Text28>
          <Text12>
            When a native module method is invoked in JavaScript, React Native
            converts the arguments from JS objects to their Objective-C/Swift
            object analogues. So for example, if your Objective-C Native Module
            method accepts a NSNumber, in JS you need to call the method with a
            number. React Native will handle the conversion for you. Below is a
            list of the argument types supported for native module methods and
            the JavaScript equivalents they map to.
            {'\n'}
            {'\n'}
            For iOS, you can also write native module methods with any argument
            type that is supported by the RCTConvert class (see RCTConvert for
            details about what is supported). The RCTConvert helper functions
            all accept a JSON value as input and map it to a native Objective-C
            type or class.
          </Text12>

          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IosNativeModules;
