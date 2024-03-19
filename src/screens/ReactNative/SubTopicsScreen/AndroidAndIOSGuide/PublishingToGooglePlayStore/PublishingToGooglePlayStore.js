import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

import styles from '../Styles';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';

const PublishingToGooglePlayStore = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Publishing to Google Play Store:</Text28>
          <Text12>
            Android requires that all apps be digitally signed with a
            certificate before they can be installed. In order to distribute
            your Android application via Google Play store it needs to be signed
            with a release key that then needs to be used for all future
            updates. Since 2017 it is possible for Google Play to manage signing
            releases automatically thanks to App Signing by Google Play
            functionality. However, before your application binary is uploaded
            to Google Play it needs to be signed with an upload key. The Signing
            Your Applications page on Android Developers documentation describes
            the topic in detail. This guide covers the process in brief, as well
            as lists the steps required to package the JavaScript bundle.
          </Text12>
          <Text28>Generating an upload key:</Text28>
          <Text12>You can generate a private signing key using keytool.</Text12>
          <Text28>Windows:</Text28>
          <Text12>
            On Windows keytool must be run from C:\Program
            Files\Java\jdkx.x.x_x\bin, as administrator.
          </Text12>
          <CopyAbleText
            content={`keytool -genkeypair -v -storetype PKCS12 -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`}
          />

          <Text12>
            This command prompts you for passwords for the keystore and key and
            for the Distinguished Name fields for your key. It then generates
            the keystore as a file called my-upload-key.keystore.
            {'\n'}
            {'\n'}
            The keystore contains a single key, valid for 10000 days. The alias
            is a name that you will use later when signing your app, so remember
            to take note of the alias.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>macOS:</Text28>
          <Text12>
            On macOS, if you're not sure where your JDK bin folder is, then
            perform the following command to find it:
          </Text12>
          <CopyAbleText content={`/usr/libexec/java_home`} />
          <Text12>
            It will output the directory of the JDK, which will look something
            like this:
          </Text12>
          <CopyAbleText
            content={`/Library/Java/JavaVirtualMachines/jdkX.X.X_XXX.jdk/Contents/Home`}
          />
          <Text12>
            Navigate to that directory by using the command cd /your/jdk/path
            and use the keytool command with sudo permission as shown below.
          </Text12>
          <CopyAbleText
            content={`sudo keytool -genkey -v -keystore my-upload-key.keystore -alias my-key-alias -keyalg RSA -keysize 2048 -validity 10000`}
          />
          <Text12>
            Setting up Gradle variables
            {'\n'}
            {'\n'}
            1. Place the my-upload-key.keystore file under the android/app
            directory in your project folder.
            {'\n'}
            {'\n'}
            2. Edit the file ~/.gradle/gradle.properties or
            android/gradle.properties, and add the following (replace ***** with
            the correct keystore password, alias and key password),
          </Text12>
          <CopyAbleText
            content={`MYAPP_UPLOAD_STORE_FILE=my-upload-key.keystore
            MYAPP_UPLOAD_KEY_ALIAS=my-key-alias
            MYAPP_UPLOAD_STORE_PASSWORD=*****
            MYAPP_UPLOAD_KEY_PASSWORD=*****`}
          />
          <Text12>
            These are going to be global Gradle variables, which we can later
            use in our Gradle config to sign our app.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Adding signing config to your app's Gradle config:
          </Text28>
          <Text12>
            The last configuration step that needs to be done is to setup
            release builds to be signed using upload key. Edit the file
            android/app/build.gradle in your project folder, and add the signing
            config,
          </Text12>
          <CopyAbleText
            content={`...
            android {
                ...
                defaultConfig { ... }
                signingConfigs {
                    release {
                        if (project.hasProperty('MYAPP_UPLOAD_STORE_FILE')) {
                            storeFile file(MYAPP_UPLOAD_STORE_FILE)
                            storePassword MYAPP_UPLOAD_STORE_PASSWORD
                            keyAlias MYAPP_UPLOAD_KEY_ALIAS
                            keyPassword MYAPP_UPLOAD_KEY_PASSWORD
                        }
                    }
                }
                buildTypes {
                    release {
                        ...
                        signingConfig signingConfigs.release
                    }
                }
            }
            ...`}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Generating the release AAB:
          </Text28>
          <Text12>Run the following command in a terminal:</Text12>
          <CopyAbleText
            content={`npx react-native build-android --mode=release`}
          />
          <Text12>
            This command uses Gradle's bundleRelease under the hood that bundles
            all the JavaScript needed to run your app into the AAB (Android App
            Bundle). If you need to change the way the JavaScript bundle and/or
            drawable resources are bundled (e.g. if you changed the default
            file/folder names or the general structure of the project), have a
            look at android/app/build.gradle to see how you can update it to
            reflect these changes.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Testing the release build of your app:
          </Text28>
          <Text12>
            Before uploading the release build to the Play Store, make sure you
            test it thoroughly. First uninstall any previous version of the app
            you already have installed. Install it on the device using the
            following command in the project root:
          </Text12>
          <CopyAbleTextWithButton
            content1={`npm run android -- --mode="release"`}
            content2={`yarn android --mode release`}
            buttonLabel1={`npm`}
            buttonLabel2={`Yarn`}
          />
          <Text12>
            Note that --mode release is only available if you've set up signing
            as described above.
            {'\n'}
            {'\n'}
            You can terminate any running bundler instances, since all your
            framework and JavaScript code is bundled in the APK's assets.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Publishing to other stores:
          </Text28>
          <Text12>
            By default, the generated APK has the native code for both x86,
            x86_64, ARMv7a and ARM64-v8a CPU architectures. This makes it easier
            to share APKs that run on almost all Android devices. However, this
            has the downside that there will be some unused native code on any
            device, leading to unnecessarily bigger APKs.
            {'\n'}
            {'\n'}
            You can create an APK for each CPU by adding the following line in
            your android/app/build.gradle file:
          </Text12>
          <CopyAbleText
            content={`android {

                splits {
                    abi {
                        reset()
                        enable true
                        universalApk false
                        include "armeabi-v7a", "arm64-v8a", "x86", "x86_64"
                    }
                }
            
            }`}
          />
          <Text12>
            Upload these files to markets which support device targeting, such
            as Amazon AppStore or F-Droid, and the users will automatically get
            the appropriate APK. If you want to upload to other markets, such as
            APKFiles, which do not support multiple APKs for a single app,
            change the universalApk false line to true to create the default
            universal APK with binaries for both CPUs.
            {'\n'}
            {'\n'}
            Please note that you will also have to configure distinct version
            codes, as suggested in this page from the official Android
            documentation.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Enabling Proguard to reduce the size of the APK (optional)
          </Text28>
          <Text12>
            Proguard is a tool that can slightly reduce the size of the APK. It
            does this by stripping parts of the React Native Java bytecode (and
            its dependencies) that your app is not using.
            {'\n'}
            {'\n'}
            To enable Proguard, edit android/app/build.gradle:
          </Text12>
          <CopyAbleText
            content={`/**
            * Run Proguard to shrink the Java bytecode in release builds.
            */
           def enableProguardInReleaseBuilds = true`}
          />
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Migrating old Android React Native apps to use App Signing by Google
            Play
          </Text28>
          <Text12>
            If you are migrating from previous version of React Native chances
            are your app does not use App Signing by Google Play feature. We
            recommend you enable that in order to take advantage from things
            like automatic app splitting. In order to migrate from the old way
            of signing you need to start by generating new upload key and then
            replacing release signing config in android/app/build.gradle to use
            the upload key instead of the release one (see section about adding
            signing config to gradle). Once that's done you should follow the
            instructions from Google Play Help website in order to send your
            original release key to Google Play.
          </Text12>
          <Text28 textStyle={{...styles?.txt28, marginTop: 15}}>
            Default Permissions:
          </Text28>
          <Text12>
            By default, INTERNET permission is added to your Android app as
            pretty much all apps use it. SYSTEM_ALERT_WINDOW permission is added
            to your Android APK in debug mode but it will be removed in
            production.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PublishingToGooglePlayStore;
