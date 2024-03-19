import {SafeAreaView, ScrollView, TouchableOpacity, View} from 'react-native';

import Header from '../../../../../components/Header/Header';
import {
  Text12,
  Text18,
  Text24,
} from '../../../../../components/Text';
import styles from '../Styles';
import CopyAbleTextWithButton from '../../../../../components/CopyAbleTextWithButton/CopyAbleTextWithButton';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import { navigate } from '../../../../../navigation/rootNavigation';

const IntegratingWithAndroidFragment = () => {
  const onNativeModuleBtnPress = ()=>{
    navigate('AndroidNativeModules')
  }
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text24>Integration with an Android Fragment</Text24>
          <Text12>
            The guide explains how to integrate a full-screen React Native app
            into an existing Android app as an Activity. For using React Native
            components within Fragments, additional setup is needed. This setup
            allows native apps to incorporate React Native components alongside
            native fragments within an Activity. {'\n'}🔷🔷🔷  Add React Native
            to your app following the Integration with Existing Apps guide until
            the Code integration section. Proceed with Step 1 by creating an
            index.android.js file and Step 2 by adding your React Native code.
            {'\n'}🔷🔷🔷  Integrating your App with a React Native Fragment
            involves rendering your React Native component into a Fragment
            instead of a full-screen React Native Activity. This component, akin
            to an Android fragment, can contain child components and can be
            placed in a /fragments folder, with its child components in a
            /components folder. To achieve this, implement the ReactApplication
            interface in your main Application Java/Kotlin class. If starting
            from a new project in Android Studio, create a new class (e.g.,
            MyReactApplication.java or MyReactApplication.kt). If working with
            an existing class, locate it in your AndroidManifest.xml file under
            the {`<application />`} tag with the property android:name (e.g.,
            android:name=".MyReactApplication"). Implement the required methods
            in this class.Ensure your main Application class implements
            ReactApplication:
          </Text12>
          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`public class MyReactApplication extends Application implements ReactApplication {...}`}
            content2={`class MyReactApplication: Application(), ReactApplication {...}`}
          />
          <Text12>
            Override the required methods getUseDeveloperSupport, getPackages
            and getReactNativeHost:
          </Text12>
          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`public class MyReactApplication extends Application implements ReactApplication {
              @Override
              public void onCreate() {
                  super.onCreate();
                  SoLoader.init(this, false);
              }
          
              private final ReactNativeHost mReactNativeHost = new DefaultReactNativeHost(this) {
                  @Override
                  public boolean getUseDeveloperSupport() {
                      return BuildConfig.DEBUG;
                  }
          
                  protected List<ReactPackage> getPackages() {
                      List<ReactPackage> packages = new PackageList(this).getPackages();
                      // Packages that cannot be autolinked yet can be added manually here
                      return packages;
                  }
              };
          
              @Override
              public ReactNativeHost getReactNativeHost() {
                  return mReactNativeHost;
              }
          }`}
            content2={`class MyReactApplication : Application(), ReactApplication {
              override fun onCreate() {
                  super.onCreate()
                  SoLoader.init(this, false)
              }
              private val reactNativeHost =
                  object : DefaultReactNativeHost(this) {
                      override fun getUseDeveloperSupport() = BuildConfig.DEBUG
                      override fun getPackages(): List<ReactPackage> {
                          val packages = PackageList(this).getPackages().toMutableList()
                          // Packages that cannot be autolinked yet can be added manually here
                          return packages
                      }
                  }
              override fun getReactNativeHost(): ReactNativeHost = reactNativeHost
          }`}
          />
          <Text12>
            If you are using Android Studio, use Alt + Enter to add all missing
            imports in your class. Alternatively these are the required imports
            to include manually:
          </Text12>

          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`import android.app.Application;

            import com.facebook.react.PackageList;
            import com.facebook.react.ReactApplication;
            import com.facebook.react.ReactNativeHost;
            import com.facebook.react.ReactPackage;
            import com.facebook.react.defaults.DefaultReactNativeHost;
            import com.facebook.soloader.SoLoader;
            
            import java.util.List;`}
            content2={`import android.app.Application

            import com.facebook.react.PackageList
            import com.facebook.react.ReactApplication
            import com.facebook.react.ReactNativeHost
            import com.facebook.react.ReactPackage
            import com.facebook.react.defaults.DefaultReactNativeHost
            import com.facebook.soloader.SoLoader`}
          />
          <Text12>Perform a "Sync Project files with Gradle" operation.</Text12>
          <Text18>
            Step 3. Add a FrameLayout for the React Native Fragment
          </Text18>
          <Text12>
            You will now add your React Native Fragment to an Activity. For a
            new project this Activity will be MainActivity but it could be any
            Activity and more fragments can be added to additional Activities as
            you integrate more React Native components into your app. First add
            the React Native Fragment to your Activity's layout. For example
            main_activity.xml in the res/layouts folder. Add a {`<FrameLayout>`}{' '}
            with an id, width and height. This is the layout you will find and
            render your React Native Fragment into.
          </Text12>
          <CopyAbleText
            content={`<FrameLayout
    xmlns:android="http://schemas.android.com/apk/res/android"
    android:id="@+id/reactNativeFragment"
    android:layout_width="match_parent"
    android:layout_height="match_parent" />`}
          />

          <Text18>
            Step 4. Add a React Native Fragment to the FrameLayout
          </Text18>
          <Text12>
            To add your React Native Fragment to your layout you need to have an
            Activity. As mentioned in a new project this will be MainActivity.
            In this Activity add a button and an event listener. On button click
            you will render your React Native Fragment. Modify your Activity
            layout to add the button:
          </Text12>
          <CopyAbleText
            content={`<Button
    android:layout_margin="10dp"
    android:id="@+id/button"
    android:layout_width="match_parent"
    android:layout_height="wrap_content"
    android:text="Show react fragment" />`}
          />
          <Text12>
            Now in your Activity class (e.g. MainActivity.java or
            MainActivity.kt) you need to add an OnClickListener for the button,
            instantiate your ReactFragment and add it to the frame layout. Add
            the button field to the top of your Activity:
          </Text12>
          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`private Button mButton;`}
            content2={`private lateinit var button: Button`}
          />
          <Text12>Update your Activity's onCreate method as follows:</Text12>
          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`@Override
            protected void onCreate(Bundle savedInstanceState) {
                super.onCreate(savedInstanceState);
                setContentView(R.layout.main_activity);
            
                mButton = findViewById(R.id.button);
                mButton.setOnClickListener(new View.OnClickListener() {
                    public void onClick(View v) {
                        Fragment reactNativeFragment = new ReactFragment.Builder()
                                .setComponentName("HelloWorld")
                                .setLaunchOptions(getLaunchOptions("test message"))
                                .build();
            
                        getSupportFragmentManager()
                                .beginTransaction()
                                .add(R.id.reactNativeFragment, reactNativeFragment)
                                .commit();
            
                    }
                });
            }`}
            content2={`override fun onCreate(savedInstanceState: Bundle) {
              super.onCreate(savedInstanceState)
              setContentView(R.layout.main_activity)
              button = findViewById<Button>(R.id.button)
              button.setOnClickListener {
                  val reactNativeFragment = ReactFragment.Builder()
                          .setComponentName("HelloWorld")
                          .setLaunchOptions(getLaunchOptions("test message"))
                          .build()
                  getSupportFragmentManager()
                          .beginTransaction()
                          .add(R.id.reactNativeFragment, reactNativeFragment)
                          .commit()
              }
          }`}
          />
          <Text12>
            In the code above Fragment reactNativeFragment = new
            ReactFragment.Builder() creates the ReactFragment and
            getSupportFragmentManager().beginTransaction().add() adds the
            Fragment to the Frame Layout. If you are using a starter kit for
            React Native, replace the "HelloWorld" string with the one in your
            index.js or index.android.js file (it’s the first argument to the
            AppRegistry.registerComponent() method). Add the getLaunchOptions
            method which will allow you to pass props through to your component.
            This is optional and you can remove setLaunchOptions if you don't
            need to pass any props.
          </Text12>
          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`private Bundle getLaunchOptions(String message) {
              Bundle initialProperties = new Bundle();
              initialProperties.putString("message", message);
              return initialProperties;
          }`}
            content2={`private fun getLaunchOptions(message: String) = Bundle().apply {
              putString("message", message)
          }
          `}
          />
          <Text12>
            Add all missing imports in your Activity class. Be careful to use
            your package’s BuildConfig and not the one from the facebook
            package! Alternatively these are the required imports to include
            manually:
          </Text12>
          <CopyAbleTextWithButton
            buttonLabel1={`Java`}
            buttonLabel2={'Kotlin'}
            content1={`import android.app.Application;

            import com.facebook.react.ReactApplication;
            import com.facebook.react.ReactNativeHost;
            import com.facebook.react.ReactPackage;
            import com.facebook.react.shell.MainReactPackage;
            import com.facebook.soloader.SoLoader;`}
            content2={`import android.app.Application

            import com.facebook.react.ReactApplication
            import com.facebook.react.ReactNativeHost
            import com.facebook.react.ReactPackage
            import com.facebook.react.shell.MainReactPackage
            import com.facebook.soloader.SoLoader            
          `}
          />
          <Text18>Step 5. Test your integration</Text18>
          <Text12>Make sure you run yarn to install your react-native dependencies and run yarn native to start the metro bundler. Run your android app in Android Studio and it should load the JavaScript code from the development server and display it in your React Native Fragment in the Activity.</Text12>
          
          <Text18>Step 6. Additional setup - Native modules</Text18>
          <Text12>You may need to call out to existing Java/Kotlin code from your react component. Native modules allow you to call out to native code and run methods in your native app. Follow the setup here</Text12>
           <TouchableOpacity onPress={onNativeModuleBtnPress}>
            <Text12 textStyle={{fontWeight:'bold'}}> native-modules-android</Text12>
           </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default IntegratingWithAndroidFragment;
