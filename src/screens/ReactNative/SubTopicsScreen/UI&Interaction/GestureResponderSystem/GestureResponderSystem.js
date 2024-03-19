import {View, ScrollView, SafeAreaView} from 'react-native';
import React from 'react';

import {Text12, Text20, Text28} from '../../../../../components/Text';
import Header from '../../../../../components/Header/Header';
import styles from '../../WorkFlow/Styles';
import {OnWebsiteDocsLink} from '../../../../../components/WebSiteNavigatorCom/WebsiteNavigator';

const GestureResponderSystem = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28>Gesture Responder System</Text28>
          <Text12>
            The gesture responder system manages touch interactions in your app,
            determining actions like scrolling, sliding, or tapping, which can
            change during a touch and involve multiple simultaneous touches.
            Best practices for touch interactions include providing feedback to
            users, allowing actions to be canceled mid-touch, and making
            components tappable using the Touchable family of components like
            TouchableHighlight. A view becomes the touch responder by
            implementing methods like onStartShouldSetResponder and
            onMoveShouldSetResponder, which determine if the view wants to
            respond to touch events. If it becomes the responder, it handles
            events like onResponderGrant, onResponderMove, onResponderRelease,
            and more. Events like onStartShouldSetResponder and
            onMoveShouldSetResponder are called in a bubbling pattern, where the
            deepest component is called first. However, a parent can ensure it
            becomes the responder by using the capture phase with handlers like
            onStartShouldSetResponderCapture and
            onMoveShouldSetResponderCapture.
          </Text12>

          <Text20>PanResponder</Text20>
          <Text12>For higher-level gesture interpretation, check out</Text12>
          <OnWebsiteDocsLink
            name={'PanResponder'}
            link={'https://reactnative.dev/docs/panresponder'}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default GestureResponderSystem;
