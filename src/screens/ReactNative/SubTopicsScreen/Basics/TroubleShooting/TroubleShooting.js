import {SafeAreaView, ScrollView, View} from 'react-native';

import {Text12, Text18, Text20, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';

const TroubleShooting = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Troubleshooting:</Text28>
          <Text12>
            These are some common issues you may run into while setting up React
            Native. If you encounter something that is not listed here, try
            searching for the issue in GitHub.
          </Text12>

          {/* PORT ALREADY IN USE */}

          <Text20>Port already in use: </Text20>
          <Text12>
            The Metro bundler runs on port 8081. If another process is already
            using that port, you can either terminate that process, or change
            the port that the bundler uses.
          </Text12>

          {/* TERMINATING A PROCESS */}
          <Text18>Terminating a process on port 8081 </Text18>
          <Text12>Run the following command</Text12>
          <CopyAbleText content={`sudo lsof -i :8081`} />
          <Text12>Then run the following to terminate the process:</Text12>
          <CopyAbleText content={`kill -9 <PID>`} />
          <Text12>
            On Windows you can find the process using port 8081 using Resource
            Monitor and stop it using Task Manager.
          </Text12>

          {/* USE PORT OTHER THAN 8081 */}
          <Text18>Using a port other than 8081 </Text18>
          <Text12>For NPM:</Text12>
          <CopyAbleText content={`npm start -- --port=8088`} />
          <Text12>For Yarn:</Text12>
          <CopyAbleText content={`yarn start --port 8088`} />
          <Text12>
            You will also need to update your applications to load the
            JavaScript bundle from the new port. If running on device from
            Xcode, you can do this by updating occurrences of 8081 to your
            chosen port in the ios/__App_Name__.xcodeproj/project.pbxproj file.
          </Text12>

          {/* NPM LOCKING ERROR */}
          <Text20>NPM locking error </Text20>
          <Text12>
            If you encounter an error such as npm WARN locking Error: EACCES
            while using the React Native CLI, try running the following:
          </Text12>
          <CopyAbleText
            content={`sudo chown -R $USER ~/.npm\n\nsudo chown -R $USER /usr/local/lib/node_modules`}
          />

          {/* Missing libraries for React */}
          <Text20>Missing libraries for React </Text20>
          <Text12>
            If you added React Native manually to your project, make sure you
            have included all the relevant dependencies that you are using, like
            RCTText.xcodeproj, RCTImage.xcodeproj. Next, the binaries built by
            these dependencies have to be linked to your app binary. Use the
            Linked Frameworks and Binaries section in the Xcode project
            settings. More detailed steps are here: Linking Libraries. If you
            are using CocoaPods, verify that you have added React along with the
            subspecs to the Podfile. For example, if you were using the Text ,
            Image and fetch APIs, you would need to add these in your Podfile:
          </Text12>
          <CopyAbleText
            content={`pod 'React', :path => '../node_modules/react-native', :subspecs => [
              'RCTText',
              'RCTImage',
              'RCTNetwork',
              'RCTWebSocket',
            ]`}
          />
          <Text12>
            Next, make sure you have run pod install and that a Pods/ directory
            has been created in your project with React installed. CocoaPods
            will instruct you to use the generated .xcworkspace file henceforth
            to be able to use these installed dependencies.
          </Text12>

          <Text18>
            React Native does not compile when being used as a CocoaPod
          </Text18>
          <Text12>
            There is a CocoaPods plugin called cocoapods-fix-react-native which
            handles any potential post-fixing of the source code due to
            differences when using a dependency manager.
          </Text12>

          <Text18>
            Argument list too long: recursive header expansion failed
          </Text18>
          <Text12>
            In the project's build settings, User Search Header Paths and Header
            Search Paths are two configs that specify where Xcode should look
            for #import header files specified in the code. For Pods, CocoaPods
            uses a default array of specific folders to look in. Verify that
            this particular config is not overwritten, and that none of the
            folders configured are too large. If one of the folders is a large
            folder, Xcode will attempt to recursively search the entire
            directory and throw above error at some point. To revert the User
            Search Header Paths and Header Search Paths build settings to their
            defaults set by CocoaPods - select the entry in the Build Settings
            panel, and hit delete. It will remove the custom override and return
            to the CocoaPod defaults.
          </Text12>

          {/* Shell Command Unresponsive Exception */}
          <Text20>Shell Command Unresponsive Exception</Text20>
          <Text12>
            If you encounter a ShellCommandUnresponsiveException exception such
            as:Execution failed for task ':app:installDebug'.
            com.android.builder.testing.api.DeviceException:
            com.android.ddmlib.ShellCommandUnresponsiveException.{'\n'}
            {'\n'}
            Try downgrading your Gradle version in android/build.gradl
          </Text12>

          {/* react-native init hangs */}
          <Text20>react-native init hangs</Text20>
          <Text12>
            If you run into issues where running npx react-native init hangs in
            your system, try running it again in verbose mode and referring to
            #2797 for common causes:
          </Text12>
          <CopyAbleText content={`npx react-native init --verbose`} />
          <Text12>
            When you're debugging a process or need to know a little more about
            the error being thrown, you may want to use the verbose option to
            output more logs and information to nail down your issue. Run the
            following command in your project's root directory. For Npm and Yarn
            Is:
          </Text12>
          <CopyAbleText
            content={`npm run android -- --verbose\n\nyarn android --verbose`}
          />

          {/* Unable to start react-native package manager (on Linux) */}
          <Text20>
            Unable to start react-native package manager (on Linux)
          </Text20>
          <Text18>Case 1: Error "code":"ENOSPC","errno":"ENOSPC"</Text18>
          <Text12>
            Issue caused by the number of directories inotify (used by watchman
            on Linux) can monitor. To solve it, run this command in your
            terminal window
          </Text12>
          <CopyAbleText
            content={`echo fs.inotify.max_user_watches=582222 | sudo tee -a /etc/sysctl.conf && sudo sysctl -p`}
          />
          <Text18>Error: spawnSync ./gradlew EACCES</Text18>
          <Text12>
            If you run into issue where executing npm run android or yarn
            android on macOS throws the above error, try to run sudo chmod +x
            android/gradlew command to make gradlew files into executable.
          </Text12>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TroubleShooting;
