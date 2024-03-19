import {ScrollView, View, TouchableOpacity, SafeAreaView} from 'react-native';
import {useState} from 'react';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {BtnListTv} from '../../../../../assets/data/StaticData';
import {COLORS} from '../../../../../shared/theme';

const BundlingForTvDevices = () => {
  const [isSelected, setIsSelected] = useState('Android');
  const onBtnPress = name => {
    setIsSelected(name);
  };
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Building For TV Devices</Text28>
          <Text12>
            TV devices support has been implemented with the intention of making
            existing React Native applications work on Apple TV and Android TV,
            with few or no changes needed in the JavaScript code for the
            applications.
          </Text12>
          <View style={styles?.Container1}>
            <View style={{flexDirection: 'row'}}>
              {BtnListTv?.map(item => {
                return (
                  <TouchableOpacity
                    onPress={() => onBtnPress(item?.name)}
                    key={item?.key}
                    style={[
                      styles?.btnStyle,
                      {
                        backgroundColor:
                          isSelected == item?.name
                            ? COLORS?.primary
                            : COLORS?.lightPrimary,
                      },
                    ]}>
                    <Text12>{item?.name}</Text12>
                  </TouchableOpacity>
                );
              })}
            </View>
            {isSelected == 'tvOS' ? (
              <>
                <Text28>Build changes</Text28>
                <Text12>
                  {'\n'}🔷 Native layer: React Native Xcode projects all now
                  have Apple TV build targets, with names ending in the string
                  '-tvOS'.
                  {'\n'}
                  {'\n'}🔷 React-native init: New React Native projects created
                  with react-native init will have Apple TV target automatically
                  created in their XCode projects.
                  {'\n'}
                  {'\n'}🔷 JavaScript layer: Support for Apple TV has been added
                  to Platform.ios.js. You can check whether code is running on
                  AppleTV by doing.
                </Text12>
                <CopyAbleText
                  content={`const Platform = require('Platform');
                  const running_on_tv = Platform.isTV;
                  
                  // If you want to be more specific and only detect devices running tvOS
                  // (but no Android TV devices) you can use:
                  const running_on_apple_tv = Platform.isTVOS;`}
                />
                <Text28>Code changes</Text28>
                <Text12>
                  {'\n'}🔷 General support for tvOS: Apple TV specific changes
                  in native code are all wrapped by the TARGET_OS_TV define.
                  These include changes to suppress APIs that are not supported
                  on tvOS (e.g. web views, sliders, switches, status bar, etc.),
                  and changes to support user input from the TV remote or
                  keyboard.
                  {'\n'}
                  {'\n'}🔷 Common codebase: Since tvOS and iOS share most
                  Objective-C and JavaScript code in common, most documentation
                  for iOS applies equally to tvOS.
                  {'\n'}
                  {'\n'}🔷 Access to touchable controls: When running on Apple
                  TV, the native view class is RCTTVView, which has additional
                  methods to make use of the tvOS focus engine. The Touchable
                  mixin has code added to detect focus changes and use existing
                  methods to style the components properly and initiate the
                  proper actions when the view is selected using the TV remote,
                  so TouchableWithoutFeedback, TouchableHighlight and
                  TouchableOpacity will work as expected. In particular:
                  {'\n'}
                  {'\n'}🔹 onFocus will be executed when the touchable view goes
                  into focus.
                  {'\n'}
                  {'\n'}🔹 onBlur will be executed when the touchable view goes
                  out of focus.
                  {'\n'}
                  {'\n'}🔹 onPress will be executed when the touchable view is
                  actually selected by pressing the "select" button on the TV
                  remote.
                  {'\n'}
                  {'\n'}🔷 TV remote/keyboard input: A new native class,
                  RCTTVRemoteHandler, sets up gesture recognizers for TV remote
                  events. When TV remote events occur, this class fires
                  notifications that are picked up by
                  RCTTVNavigationEventEmitter (a subclass of RCTEventEmitter),
                  that fires a JS event. This event will be picked up by
                  instances of the TVEventHandler JavaScript object. Application
                  code that needs to implement custom handling of TV remote
                  events can create an instance of TVEventHandler and listen for
                  these events, as in the following code:
                </Text12>
                <CopyAbleText
                  content={`const TVEventHandler = require('TVEventHandler');

                  class Game2048 extends React.Component {
                    _tvEventHandler: any;
                  
                    _enableTVEventHandler() {
                      this._tvEventHandler = new TVEventHandler();
                      this._tvEventHandler.enable(this, function (cmp, evt) {
                        if (evt && evt.eventType === 'right') {
                          cmp.setState({board: cmp.state.board.move(2)});
                        } else if (evt && evt.eventType === 'up') {
                          cmp.setState({board: cmp.state.board.move(1)});
                        } else if (evt && evt.eventType === 'left') {
                          cmp.setState({board: cmp.state.board.move(0)});
                        } else if (evt && evt.eventType === 'down') {
                          cmp.setState({board: cmp.state.board.move(3)});
                        } else if (evt && evt.eventType === 'playPause') {
                          cmp.restartGame();
                        }
                      });
                    }
                  
                    _disableTVEventHandler() {
                      if (this._tvEventHandler) {
                        this._tvEventHandler.disable();
                        delete this._tvEventHandler;
                      }
                    }
                  
                    componentDidMount() {
                      this._enableTVEventHandler();
                    }
                  
                    componentWillUnmount() {
                      this._disableTVEventHandler();
                    }
                  }`}
                />
                  <Text12>
                  {'\n'}🔷 Dev Menu support: On the simulator, cmd-D will bring up the Dev Menu, similar to iOS. To bring it up on a real Apple TV device, make a long press on the play/pause button on the remote. (Please do not shake the Apple TV device, that will not work :) )
                  {'\n'}
                  {'\n'}🔷 TV remote animations: RCTTVView native code implements Apple-recommended parallax animations to help guide the eye as the user navigates through views. The animations can be disabled or adjusted with new optional view properties.
                  {'\n'}
                  {'\n'}🔷 Back navigation with the TV remote menu button: The BackHandler component, originally written to support the Android back button, now also supports back navigation on the Apple TV using the menu button on the TV remote.
                  {'\n'}
                  {'\n'}🔷 TabBarIOS behavior: The TabBarIOS component wraps the native UITabBar API, which works differently on Apple TV. To avoid jittery re-rendering of the tab bar in tvOS (see this issue), the selected tab bar item can only be set from JavaScript on initial render, and is controlled after that by the user through native code.
                  {'\n'}
                  {'\n'}🔷 Known issues:
                  {'\n'}
                  {'\n'}🔹ListView scrolling. The issue can be worked around by setting removeClippedSubviews to false in ListView and similar components. For more discussion of this issue, see this PR.
                </Text12>
              </>
            ) : (
              <>
              <Text28>Build changes</Text28>
                <Text12>
                Native layer: To run React Native project on Android TV make sure to make the following changes to AndroidManifest.xml
                </Text12>
                <CopyAbleText
                  content={`  <!-- Add custom banner image to display as Android TV launcher icon -->
                  <application
                   ...
                   android:banner="@drawable/tv_banner"
                   >
                     ...
                     <intent-filter>
                       ...
                       <!-- Needed to properly create a launch intent when running on Android TV -->
                       <category android:name="android.intent.category.LEANBACK_LAUNCHER"/>
                     </intent-filter>
                     ...
                   </application>`}
                />
                <Text12>
                JavaScript layer: Support for Android TV has been added to Platform.android.js. You can check whether code is running on Android TV by doing
                </Text12>
                <CopyAbleText
                  content={`const Platform = require('Platform');
                  const running_on_android_tv = Platform.isTV;`}
                />
                <Text28>Code changes</Text28>
                <Text12>
                  🔷 Access to touchable controls: When running on Android TV the Android framework will automatically apply a directional navigation scheme based on relative position of focusable elements in your views. The Touchable mixin has code added to detect focus changes and use existing methods to style the components properly and initiate the proper actions when the view is selected using the TV remote, so TouchableWithoutFeedback, TouchableHighlight, TouchableOpacity and TouchableNativeFeedback will work as expected. In particular:
                  {'\n'}
                  {'\n'}
                  🔹 onFocus will be executed when the touchable view goes into focus
                  {'\n'}
                  {'\n'}
                  🔹 onBlur will be executed when the touchable view goes out of focus
                  {'\n'}
                  {'\n'}
                  🔹 onPress will be executed when the touchable view is actually selected by pressing the "select" button on the TV remote.
                  {'\n'}
                  {'\n'}
                🔷 TV remote/keyboard input: A new native class, ReactAndroidTVRootViewHelper, sets up key events handlers for TV remote events. When TV remote events occur, this class fires a JS event. This event will be picked up by instances of the TVEventHandler JavaScript object. Application code that needs to implement custom handling of TV remote events can create an instance of TVEventHandler and listen for these events, as in the following code:
                </Text12>
                <CopyAbleText
                  content={`const TVEventHandler = require('TVEventHandler');

                  class Game2048 extends React.Component {
                    _tvEventHandler: any;
                  
                    _enableTVEventHandler() {
                      this._tvEventHandler = new TVEventHandler();
                      this._tvEventHandler.enable(this, function (cmp, evt) {
                        if (evt && evt.eventType === 'right') {
                          cmp.setState({board: cmp.state.board.move(2)});
                        } else if (evt && evt.eventType === 'up') {
                          cmp.setState({board: cmp.state.board.move(1)});
                        } else if (evt && evt.eventType === 'left') {
                          cmp.setState({board: cmp.state.board.move(0)});
                        } else if (evt && evt.eventType === 'down') {
                          cmp.setState({board: cmp.state.board.move(3)});
                        } else if (evt && evt.eventType === 'playPause') {
                          cmp.restartGame();
                        }
                      });
                    }
                  
                    _disableTVEventHandler() {
                      if (this._tvEventHandler) {
                        this._tvEventHandler.disable();
                        delete this._tvEventHandler;
                      }
                    }
                  
                    componentDidMount() {
                      this._enableTVEventHandler();
                    }
                  
                    componentWillUnmount() {
                      this._disableTVEventHandler();
                    }
                  }`}
                />
                <Text12>
                  🔷 Dev Menu support: On the emulator, cmd-M will bring up the Dev Menu, similar to Android. To bring it up on a real Android TV device, press the menu button or long press the fast-forward button on the remote. (Please do not shake the Android TV device, that will not work :) )
                  {'\n'}
                  {'\n'}
                  🔷 Known issues:
                  {'\n'}
                  {'\n'}
                  🔹 TextInput components do not work for now (i.e. they cannot receive focus automatically, see this comment).
                  {'\n'}
                  {'\n'}
                  🔹 It is however possible to use a ref to manually trigger inputRef.current.focus().
                  {'\n'}
                  {'\n'}
                 🔹 You can wrap your input inside a TouchableWithoutFeedback component and trigger focus in the onFocus event of that touchable. This enables opening the keyboard via the arrow keys.
                 {'\n'}
                  {'\n'}
                  🔹 The keyboard might reset its state after each keypress (this might only happen inside the Android TV emulator).
                  {'\n'}
                  {'\n'}
                  🔹The content of Modal components cannot receive focus, see this issue for details.
                </Text12>
              </>
            )}
          </View>
          
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BundlingForTvDevices;
