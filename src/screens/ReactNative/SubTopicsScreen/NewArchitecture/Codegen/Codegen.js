import {SafeAreaView, ScrollView, View} from 'react-native';
import styles from '../Styles';
import {Text12, Text18, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const Codegen = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Codegen</Text28>
          <Text12>
            Codegen, a valuable tool in React Native, automates code generation
            to eliminate redundancy. It's invoked during builds and can be
            manually triggered to understand generated code for Turbo Native
            Modules and Fabric Native Components.
          </Text12>

          <Text18>Configuration and Invocation</Text18>
          <Text12>
            Before diving into the Codegen process, ensure you have a React
            Native app set up. Use the React Native CLI to create a project and
            add the necessary module as an NPM dependency. The Codegen is
            tightly integrated into the app build process and resides in the
            react-native NPM package.
          </Text12>

          <Text18>iOS: Running Codegen</Text18>
          <Text12>
            For iOS, the Codegen is triggered by React Native during app builds.
            You can manually run the generate-codegen-artifacts.js script to
            understand the generated code. This script searches for JS files
            following specific conventions and produces the required code. The
            generated code includes Turbo Native Modules and Fabric Native
            Components.To invoke the script, you can run this command from the
            root folder of your app:
          </Text12>
          <CopyAbleText
            content={`node node_modules/react-native/scripts/generate-codegen-artifacts.js \
    --path SampleApp/ \
    --outputPath <an/output/path> \ `}
          />

          {/* The Generated Code */}
          <Text18>The Generated Code</Text18>
          <Text12>
            If you run the Codegen in your app with an output path of codegen,
            for example, you obtain the following structure:
          </Text12>

          <CopyAbleText
            content={`codegen
└── build
    └── generated
        └── ios
            ├── MyTurboModuleSpecs
            │   ├── MyTurboModuleSpecs-generated.mm
            │   └── MyTurboModuleSpecs.h
            ├── FBReactNativeSpec
            │   ├── FBReactNativeSpec-generated.mm
            │   └── FBReactNativeSpec.h
            ├── RCTThirdPartyFabricComponentsProvider.h
            ├── RCTThirdPartyFabricComponentsProvider.mm
            └── react
                └── renderer
                    └── components
                        ├── MyFabricComponent
                        │   ├── ComponentDescriptors.h
                        │   ├── EventEmitters.cpp
                        │   ├── EventEmitters.h
                        │   ├── Props.cpp
                        │   ├── Props.h
                        │   ├── RCTComponentViewHelpers.h
                        │   ├── ShadowNodes.cpp
                        │   └── ShadowNodes.h
                        └── rncore
                            ├── ComponentDescriptors.h
                            ├── EventEmitters.cpp
                            ├── EventEmitters.h
                            ├── Props.cpp
                            ├── Props.h
                            ├── RCTComponentViewHelpers.h
                            ├── ShadowNodes.cpp
                            └── ShadowNodes.h`}
          />

          <Text12>
            The codegen folder sits at the root of the hierarchy, as expected.
            Nested into it, there are two more folders: build/generated. Then,
            there is an ios folder that contains: A custom folder for each
            TurboModule. The header (.h) and implementation (.mm) files for the
            RCTThirdPartyFabricComponentsProvider. A base
            react/renderer/components folder which contains a custom folder for
            each Fabric Native Component.
          </Text12>

          {/* Generated Code Structure (Android) */}
          <Text18>Generated Code Structure (Android)</Text18>
          <Text12>
            Android Codegen relies on a Gradle task to generate the required
            code. First, you need to configure the Android app to work with the
            New Architecture; otherwise, the Gradle task fails. Open the
            MyApp/android/gradle.properties file. Flip the newArchEnabled flag
            from false to true. After that, you can navigate into the
            SampleApp/android folder and run:
          </Text12>
          <CopyAbleText
            content={`./gradlew generateCodegenArtifactsFromSchema`}
          />
          <Text12>
            These tasks invoke the generateCodegenArtifactsFromSchema on all the
            the imported projects of the app (the app and all the node modules
            which are linked to it). It generates the code in the corresponding
            node_modules/dependency folder. So, for example, if you have a
            Fabric Native Component whose node module is called
            my-fabric-component, the generated code is located in the
            SampleApp/node_modules/my-fabric-component/android/build/generated/source/codegen
            path.
          </Text12>

          <Text18>The Generated Code</Text18>
          <Text12>
            Once the Gradle task completes, you can see different structures for
            a Turbo Native Module or for a Fabric Native Component. The
            following tab shows how they appear:
          </Text12>
          <CopyAbleTextWithButton
            content1={`codegen
            ├── java
            │   └── com
            │       └── MyTurbomodule
            │           └── MyTurbomodule.java
            ├── jni
            │   ├── Android.mk
            │   ├── CMakeLists.txt
            │   ├── MyTurbomodule-generated.cpp
            │   ├── MyTurbomodule.h
            │   └── react
            │       └── renderer
            │           └── components
            │               └── MyTurbomodule
            │                   ├── ComponentDescriptors.h
            │                   ├── EventEmitters.cpp
            │                   ├── EventEmitters.h
            │                   ├── Props.cpp
            │                   ├── Props.h
            │                   ├── ShadowNodes.cpp
            │                   └── ShadowNodes.h
            └── schema.json`}
            content2={`codegen
            ├── java
            │   └── com
            │       └── facebook
            │           └── react
            │               └── viewmanagers
            │                   ├── MyFabricComponentManagerDelegate.java
            │                   └── MyFabricComponentManagerInterface.java
            ├── jni
            │   ├── Android.mk
            │   ├── CMakeLists.txt
            │   ├── MyFabricComponent-generated.cpp
            │   ├── MyFabricComponent.h
            │   └── react
            │       └── renderer
            │           └── components
            │               └── MyFabricComponent
            │                   ├── ComponentDescriptors.h
            │                   ├── EventEmitters.cpp
            │                   ├── EventEmitters.h
            │                   ├── Props.cpp
            │                   ├── Props.h
            │                   ├── ShadowNodes.cpp
            │                   └── ShadowNodes.h
            └── schema.json`}
            buttonLabel1={`turbomodules`}
            buttonLabel2={`fabric-components`}
          />
          <Text12>
            Java can't interoperate seamlessly with C++ as Objective-C++ does.
            To work properly, Codegen creates some bridging between the Java and
            the C++ world in the jni folder, where the Java Native Interfaces
            are defined. Notice that both Turbo Native Modules and Fabric Native
            Components come with two build file descriptors: the Android.mk and
            the CMakeLists.txt. These are used by the Android app to actually
            build the external modules.
          </Text12>
          <Text18>Turbo Native Modules and Fabric Native Components</Text18>
          <Text12>
            Turbo Native Modules generate Java abstract classes and
            corresponding C++ files, following similar conventions as iOS.
            Fabric Native Components include Java interfaces and delegates,
            managed by the native manager, along with JNI C++ files for
            rendering components. In summary, the Codegen streamlines React
            Native development by automating code generation for Turbo Native
            Modules and Fabric Native Components, enhancing efficiency and
            reducing manual coding efforts.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Codegen;
