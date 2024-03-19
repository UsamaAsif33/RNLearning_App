import {ScrollView, View, Image, SafeAreaView} from 'react-native';

import {Text12, Text28} from '../../../../../components/Text';
import styles from '../Styles';
import Header from '../../../../../components/Header/Header';
import CopyAbleText from '../../../../../components/CopyAbleText/CopyAbleText';
import {Paths} from '../../../../../assets/images';

const HandlingTouches = () => {
  return (
    <SafeAreaView style={styles?.Container}>
      <Header />
      <ScrollView>
        <View style={styles?.Container1}>
          <Text28 textStyle={styles?.txt28}>Handling Touches:</Text28>
          <Text12 textStyle={styles?.txt12}>
            Users interact with mobile apps mainly through touch. They can use a
            combination of gestures, such as tapping on a button, scrolling a
            list, or zooming on a map. React Native provides components to
            handle all sorts of common gestures, as well as a comprehensive
            gesture responder system to allow for more advanced gesture
            recognition, but the one component you will most likely be
            interested in is the basic Button.
          </Text12>
          <Text28 textStyle={styles?.txt28}>
            {'\n'}Displaying a basic button:
          </Text28>
          <Text12 textStyle={styles?.txt12}>
            Button provides a basic button component that is rendered nicely on
            all platforms. The minimal example to display a button looks like
            this:
          </Text12>

          <CopyAbleText
            content={`<Button
            onPress={() => {
              console.log('You tapped the button!');
            }}
            title="Press Me"
          />`}
          />
          <Text12 textStyle={styles?.txt12}>
            This will render a blue label on iOS, and a blue rounded rectangle
            with light text on Android. Pressing the button will call the
            "onPress" function, which in this case displays an alert popup. If
            you like, you can specify a "color" prop to change the color of your
            button.
          </Text12>
          <Image
            source={Paths?.HandleTouches}
            style={styles?.imgStyle}
            resizeMode="contain"
          />

          <Text12 textStyle={styles?.txt12}>
            Go ahead and play around with the Button component using the example
            below. You can select which platform your app is previewed in by
            clicking on the toggle in the bottom right and then clicking on "Tap
            to Play" to preview the app.
          </Text12>

          <Text28 textStyle={styles?.txt28}>{'\n'}Button Basics:</Text28>
          <CopyAbleText
            content={`import React, {Component} from 'react';
            import {Alert, Button, StyleSheet, View} from 'react-native';
            
            export default class ButtonBasics extends Component {
              _onPressButton() {
                Alert.alert('You tapped the button!');
              }
            
              render() {
                return (
                  <View style={styles.container}>
                    <View style={styles.buttonContainer}>
                      <Button onPress={this._onPressButton} title="Press Me" />
                    </View>
                    <View style={styles.buttonContainer}>
                      <Button
                        onPress={this._onPressButton}
                        title="Press Me"
                        color="#841584"
                      />
                    </View>
                    <View style={styles.alternativeLayoutButtonContainer}>
                      <Button onPress={this._onPressButton} title="This looks great!" />
                      <Button onPress={this._onPressButton} title="OK!" color="#841584" />
                    </View>
                  </View>
                );
              }
            }
            
            const styles = StyleSheet.create({
              container: {
                flex: 1,
                justifyContent: 'center',
              },
              buttonContainer: {
                margin: 20,
              },
              alternativeLayoutButtonContainer: {
                margin: 20,
                flexDirection: 'row',
                justifyContent: 'space-between',
              },
            });`}
          />

          <Text28 textStyle={styles?.txt28}>{'\n'}Touchables:</Text28>
          <Text12 textStyle={styles?.txt12}>
            React Native offers several "Touchable" components for building
            custom buttons with tap gesture capabilities.
            {'\n'}
            {'\n'}🔷 Touchable components include TouchableHighlight,
            TouchableNativeFeedback, TouchableOpacity, and
            TouchableWithoutFeedback.
            {'\n'}🔷 TouchableHighlight darkens the background when pressed,
            suitable for buttons or links.
            {'\n'}🔷 TouchableNativeFeedback provides ink surface reaction
            ripples on Android.
            {'\n'}🔷 TouchableOpacity reduces opacity when pressed, allowing the
            background to be seen through.
            {'\n'}🔷 TouchableWithoutFeedback handles tap gestures without
            displaying any feedback.
          </Text12>

          <CopyAbleText
            content={`import React, {Component} from 'react';
            import {
              Alert,
              Platform,
              StyleSheet,
              Text,
              TouchableHighlight,
              TouchableOpacity,
              TouchableNativeFeedback,
              TouchableWithoutFeedback,
              View,
            } from 'react-native';
            
            export default class Touchables extends Component {
              _onPressButton() {
                Alert.alert('You tapped the button!');
              }
            
              _onLongPressButton() {
                Alert.alert('You long-pressed the button!');
              }
            
              render() {
                return (
                  <View style={styles.container}>
                    <TouchableHighlight onPress={this._onPressButton} underlayColor="white">
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableHighlight</Text>
                      </View>
                    </TouchableHighlight>
                    <TouchableOpacity onPress={this._onPressButton}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableOpacity</Text>
                      </View>
                    </TouchableOpacity>
                    <TouchableNativeFeedback
                      onPress={this._onPressButton}
                      background={
                        Platform.OS === 'android'
                          ? TouchableNativeFeedback.SelectableBackground()
                          : undefined
                      }>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>
                          TouchableNativeFeedback{' '}
                          {Platform.OS !== 'android' ? '(Android only)' : ''}
                        </Text>
                      </View>
                    </TouchableNativeFeedback>
                    <TouchableWithoutFeedback onPress={this._onPressButton}>
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableWithoutFeedback</Text>
                      </View>
                    </TouchableWithoutFeedback>
                    <TouchableHighlight
                      onPress={this._onPressButton}
                      onLongPress={this._onLongPressButton}
                      underlayColor="white">
                      <View style={styles.button}>
                        <Text style={styles.buttonText}>Touchable with Long Press</Text>
                      </View>
                    </TouchableHighlight>
                  </View>
                );
              }
            }
            
            const styles = StyleSheet.create({
              container: {
                paddingTop: 60,
                alignItems: 'center',
              },
              button: {
                marginBottom: 30,
                width: 260,
                alignItems: 'center',
                backgroundColor: '#2196F3',
              },
              buttonText: {
                textAlign: 'center',
                padding: 20,
                color: 'white',
              },
            });`}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HandlingTouches;
