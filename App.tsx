import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';
import {Platform, StatusBar, View} from 'react-native';
import Route from './src/navigation/route';
import { COLORS } from './src/shared/theme';


const App = () => {
  useEffect(() => {
    if (Platform.OS === 'android') {
      SplashScreen.hide();
    }
  }, []);

  return (
    <View style={{flex: 1}}>
      <StatusBar  backgroundColor={COLORS?.primary}/>
      <Route />
    </View>
  );
};

export default App;
