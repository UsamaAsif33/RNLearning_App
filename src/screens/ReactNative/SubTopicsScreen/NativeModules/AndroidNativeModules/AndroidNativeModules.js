import {Image, SafeAreaView, ScrollView, View} from 'react-native';
import { heightPercentageToDP  as hp} from 'react-native-responsive-screen';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import {Paths} from '../../../../../assets/images';


const AndroidNativeModules = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28 >Android Native Modules:</Text28>
          <Text12 >
            Welcome to Native Modules for Android. Please start by reading the
            Native Modules Intro for an intro to what native modules are.
          </Text12>

          <Text28 >
            Create a Calendar Native Module:
          </Text28>
          <Text12 >
            In the following guide you will create a native module,
            CalendarModule, that will allow you to access Android’s calendar
            APIs from JavaScript. By the end, you will be able to call
            CalendarModule.createCalendarEvent('Dinner Party', 'My House'); from
            JavaScript, invoking a Java/Kotlin method that creates a calendar
            event.
          </Text12>
          <Text28 >Setup:</Text28>
          <Text12 >
            To get started, open up the Android project within your React Native
            application in Android Studio. You can find your Android project
            here within a React Native app:
          </Text12>
          <Image
            style={{width: 300, height: 250}}
            source={Paths?.AndroidNaiveModules?.SetupNativeModule}
            resizeMode='contain'
          />
          <Text12 >
            We recommend using Android Studio to write your native code. Android
            studio is an IDE built for Android development and using it will
            help you resolve minor issues like code syntax errors quickly.
            {'\n'}
            {'\n'}
            We also recommend enabling Gradle Daemon to speed up builds as you
            iterate on Java/Kotlin code
          </Text12>
          <Text28 >
            Create A Custom Native Module File:
          </Text28>
          <Text12 >
            The first step is to create the (CalendarModule.java or
            CalendarModule.kt) Java/Kotlin file inside
            android/app/src/main/java/com/your-app-name/ folder (the folder is
            the same for both Kotlin and Java). This Java/Kotlin file will
            contain your native module Java/Kotlin class.
          </Text12>
          <Image
            style={{width: 300, height: 250}}
            source={Paths?.AndroidNaiveModules?.CustomNative}
            resizeMode='contain'
          />
          <Text12 >
            Then add the following content:
          </Text12>
          <CopyAbleTextWithButton
            content1={`package com.your-apps-package-name; // replace your-apps-package-name with your app’s package name
            import com.facebook.react.bridge.NativeModule;
            import com.facebook.react.bridge.ReactApplicationContext;
            import com.facebook.react.bridge.ReactContext;
            import com.facebook.react.bridge.ReactContextBaseJavaModule;
            import com.facebook.react.bridge.ReactMethod;
            import java.util.Map;
            import java.util.HashMap;
            
            public class CalendarModule extends ReactContextBaseJavaModule {
               CalendarModule(ReactApplicationContext context) {
                   super(context);
               }
            }`}
            content2={`package com.your-apps-package-name; // replace your-apps-package-name with your app’s package name
            import com.facebook.react.bridge.NativeModule
            import com.facebook.react.bridge.ReactApplicationContext
            import com.facebook.react.bridge.ReactContext
            import com.facebook.react.bridge.ReactContextBaseJavaModule
            import com.facebook.react.bridge.ReactMethod
            
            class CalendarModule(reactContext: ReactApplicationContext) : ReactContextBaseJavaModule(reactContext) {...}`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12 >
            As you can see, your CalendarModule class extends the
            ReactContextBaseJavaModule class. For Android, Java/Kotlin native
            modules are written as classes that extend
            ReactContextBaseJavaModule and implement the functionality required
            by JavaScript.
          </Text12>
          <Text28 >Module Name:</Text28>
          <Text12 >
            All Java/Kotlin native modules in Android need to implement the
            getName() method. This method returns a string, which represents the
            name of the native module. The native module can then be accessed in
            JavaScript using its name. For example, in the below code snippet,
            getName() returns "CalendarModule".
          </Text12>

          <CopyAbleTextWithButton
            content1={`// add to CalendarModule.java
            @Override
            public String getName() {
               return "CalendarModule";
            }`}
            content2={`// add to CalendarModule.kt
            override fun getName() = "CalendarModule"`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />

          <Text12 >
            The native module can then be accessed in JS like this:
          </Text12>

          <CopyAbleText
            content={`const {CalendarModule} = ReactNative.NativeModules;`}
          />
          <Text28 >
            Export a Native Method to JavaScript:
          </Text28>
          <Text12 >
            Next you will need to add a method to your native module that will
            create calendar events and can be invoked in JavaScript. All native
            module methods meant to be invoked from JavaScript must be annotated
            with @ReactMethod.
            {'\n'}
            {'\n'}
            Set up a method createCalendarEvent() for CalendarModule that can be
            invoked in JS through CalendarModule.createCalendarEvent(). For now,
            the method will take in a name and location as strings. Argument
            type options will be covered shortly.
          </Text12>
          <CopyAbleTextWithButton
            content1={`@ReactMethod
            public void createCalendarEvent(String name, String location) {
            }`}
            content2={`@ReactMethod fun createCalendarEvent(name: String, location: String) {}`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12 >
            Add a debug log in the method to confirm it has been invoked when
            you call it from your application. Below is an example of how you
            can import and use the Log class from the Android util package:
          </Text12>

          <CopyAbleTextWithButton
            content1={`import android.util.Log;

            @ReactMethod
            public void createCalendarEvent(String name, String location) {
               Log.d("CalendarModule", "Create event called with name: " + name
               + " and location: " + location);
            }`}
            content2={`import android.util.Log

            @ReactMethod
            fun createCalendarEvent(name: String, location: String) {
                Log.d("CalendarModule", "Create event called with name: $name and location: $location")
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12 >
            Once you finish implementing the native module and hook it up in
            JavaScript, you can follow these steps to view the logs from your
            app.
          </Text12>
          <Text28 >Synchronous Methods:</Text28>
          <Text12 >
            You can pass isBlockingSynchronousMethod = true to a native method
            to mark it as a synchronous method.
          </Text12>
          <CopyAbleTextWithButton
            content1={`@ReactMethod(isBlockingSynchronousMethod = true)`}
            content2={`@ReactMethod(isBlockingSynchronousMethod = true)`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12 >
            At the moment, we do not recommend this, since calling methods
            synchronously can have strong performance penalties and introduce
            threading-related bugs to your native modules. Additionally, please
            note that if you choose to enable isBlockingSynchronousMethod, your
            app can no longer use the Google Chrome debugger. This is because
            synchronous methods require the JS VM to share memory with the app.
            For the Google Chrome debugger, React Native runs inside the JS VM
            in Google Chrome, and communicates asynchronously with the mobile
            devices via WebSockets.
          </Text12>
          <Text28 >
            Register the Module (Android Specific):
          </Text28>
          <Text12 >
            To integrate a native module with React Native:
            {'\n'}
            1. Write the module.
            {'\n'}
            2. Create a ReactPackage in Java/Kotlin.
            {'\n'}
            3. Register the module within the ReactPackage's
            createNativeModules() method.
            {'\n'}
            4. Ensure proper instantiation for Android.
            {'\n'}
            5. Place the package file in the specified directory.
            {'\n'}
            6. React Native will register the modules during initialization,
            making them accessible from JavaScript.
            {'\n'}
            {'\n'}
            Then add the following content:
          </Text12>
          <CopyAbleTextWithButton
            content1={`package com.your-app-name; // replace your-app-name with your app’s name
            import com.facebook.react.ReactPackage;
            import com.facebook.react.bridge.NativeModule;
            import com.facebook.react.bridge.ReactApplicationContext;
            import com.facebook.react.uimanager.ViewManager;
            
            import java.util.ArrayList;
            import java.util.Collections;
            import java.util.List;
            
            public class MyAppPackage implements ReactPackage {
            
               @Override
               public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
                   return Collections.emptyList();
               }
            
               @Override
               public List<NativeModule> createNativeModules(
                       ReactApplicationContext reactContext) {
                   List<NativeModule> modules = new ArrayList<>();
            
                   modules.add(new CalendarModule(reactContext));
            
                   return modules;
               }
            
            }`}
            content2={`package com.your-app-name // replace your-app-name with your app’s name

            import android.view.View
            import com.facebook.react.ReactPackage
            import com.facebook.react.bridge.NativeModule
            import com.facebook.react.bridge.ReactApplicationContext
            import com.facebook.react.uimanager.ReactShadowNode
            import com.facebook.react.uimanager.ViewManager
            
            class MyAppPackage : ReactPackage {
            
                override fun createViewManagers(
                    reactContext: ReactApplicationContext
                ): MutableList<ViewManager<View, ReactShadowNode<*>>> = mutableListOf()
            
                override fun createNativeModules(
                    reactContext: ReactApplicationContext
                ): MutableList<NativeModule> = listOf(CalendarModule(reactContext)).toMutableList()
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12 >
            This file imports the native module you created, CalendarModule. It
            then instantiates CalendarModule within the createNativeModules()
            function and returns it as a list of NativeModules to register. If
            you add more native modules down the line, you can also instantiate
            them and add them to the list returned here.
            {'\n'}
            {'\n'}
            To register the CalendarModule package, you must add MyAppPackage to
            the list of packages returned in ReactNativeHost's getPackages()
            method. Open up your MainApplication.java or MainApplication.kt
            file, which can be found in the following path:
            android/app/src/main/java/com/your-app-name/.
            {'\n'}
            {'\n'}
            Locate ReactNativeHost’s getPackages() method and add your package
            to the packages list getPackages() returns:
          </Text12>
          <CopyAbleTextWithButton
            content1={`@Override
            protected List<ReactPackage> getPackages() {
              @SuppressWarnings("UnnecessaryLocalVariable")
              List<ReactPackage> packages = new PackageList(this).getPackages();
              // below MyAppPackage is added to the list of packages returned
              packages.add(new MyAppPackage());
              return packages;
            }`}
            content2={`override fun getPackages(): List<ReactPackage> =
            PackageList(this).packages.apply {
                // Packages that cannot be autolinked yet can be added manually here, for example:
                // packages.add(new MyReactNativePackage());
                add(MyAppPackage())
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
          <Text12 >
            You have now successfully registered your native module for Android!
          </Text12>
          <Text28 >Test What You Have Built:</Text28>
          <Text12 >
            At this point, you have set up the basic scaffolding for your native
            module in Android. Test that out by accessing the native module and
            invoking its exported method in JavaScript.
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
            is located, run the following:
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm run android`}
            content2={`yarn android`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />
          <Text28>Building as You Iterate</Text28>
          <Text12>
            As you work through these guides and iterate on your native module,
            you will need to do a native rebuild of your application to access
            your most recent changes from JavaScript. This is because the code
            that you are writing sits within the native part of your
            application. While React Native’s metro bundler can watch for
            changes in JavaScript and rebuild on the fly for you, it will not do
            so for native code. So if you want to test your latest native
            changes you need to rebuild by using the above command.
          </Text12>
          <Text28>Recap✨</Text28>
          <Text12>
            You should now be able to invoke your createCalendarEvent() method
            on your native module in the app. In our example this occurs by
            pressing the NewModuleButton. You can confirm this by viewing the
            log you set up in your createCalendarEvent() method. You can follow
            these steps to view ADB logs in your app. You should then be able to
            search for your Log.d message (in our example “Create event called
            with name: testName and location: testLocation”) and see your
            message logged each time you invoke your native module method.
          </Text12>
          <Image
            style={{width: 300, height: 150}}
            source={Paths?.AndroidNaiveModules?.Recap}
            resizeMode='contain'
          />
          <Text12>
            At this point you have created an Android native module and invoked
            its native method from JavaScript in your React Native application.
            You can read on to learn more about things like argument types
            available to a native module method and how to setup callbacks and
            promises{'\n'}
          </Text12>
          <Text28>Beyond a Calendar Native Module{'\n'}</Text28>
          <Text28>Better Native Module Export</Text28>
          <Text12>
            Importing your native module by pulling it off of NativeModules like
            above is a bit clunky.
            {'\n'}
            {'\n'}
            To save consumers of your native module from needing to do that each
            time they want to access your native module, you can create a
            JavaScript wrapper for the module. Create a new JavaScript file
            named CalendarModule.js with the following content:
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
            safety, all your JS code will be type safe. Doing so will also make
            it easier for you to switch to type-safe native modules down the
            line. Below is an example of adding type safety to the
            CalendarModule:
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
            content={`import CalendarModule from './CalendarModule';
            CalendarModule.createCalendarEvent('foo', 'bar');`}
          />
          <Text28>Promises</Text28>
          <Text12>
            Native modules can also fulfill a Promise, which can simplify your
            JavaScript, especially when using ES2016's async/await syntax. When
            the last parameter of a native module Java/Kotlin method is a
            Promise, its corresponding JS method will return a JS Promise
            object.
            {'\n'}
            {'\n'}
            Refactoring the above code to use a promise instead of callbacks looks like this:
          </Text12>
          <CopyAbleTextWithButton
            content1={`import com.facebook.react.bridge.Promise;

            @ReactMethod
            public void createCalendarEvent(String name, String location, Promise promise) {
                try {
                    Integer eventId = ...
                    promise.resolve(eventId);
                } catch(Exception e) {
                    promise.reject("Create Event Error", e);
                }
            }`}
            content2={`import com.facebook.react.bridge.Promise

            @ReactMethod
            fun createCalendarEvent(name: String, location: String, promise: Promise) {
                try {
                    val eventId = ...
                    promise.resolve(eventId)
                } catch (e: Throwable) {
                    promise.reject("Create Event Error", e)
                }
            }`}
            buttonLabel1={`Java`}
            buttonLabel2={`Kotlin`}
          />
            <Image
            style={{width: 300, height: 580,marginTop:hp('3')}}
            source={Paths?.AndroidNaiveModules?.Promises}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default AndroidNativeModules;
