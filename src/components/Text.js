import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {COLORS} from '../shared/theme';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

export const Text11 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text11, textStyle]} />;
};

export const Text12 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text12, textStyle]} />;
};

export const Text13 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text13, textStyle]} />;
};

export const Text14 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text14, textStyle]} />;
};
export const Text15 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text15, textStyle]} />;
};

export const Text16 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16, textStyle]} />;
};

export const Text17 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text16, textStyle]} />;
};

export const Text18 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text18, textStyle]} />;
};
export const Text20 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text20, textStyle]} />;
};

export const Text23 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text23, textStyle]} />;
};

export const Text24 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={[style.Text24, textStyle]} />;
};

export const Text28 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text28, ...textStyle}} />;
};

export const Text47 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text47, ...textStyle}} />;
};

export const Text60 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text60, ...textStyle}} />;
};

export const Text100 = ({textStyle = {}, ...rest}) => {
  return <Text {...rest} style={{...style.Text100, ...textStyle}} />;
};

const style = StyleSheet.create({
  Text11: {
    fontSize: 11,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
  },
  Text12: {
    fontSize: 12,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
    color: COLORS?.textPrimary,
    lineHeight: 22,
    marginTop: hp('1'),
  },
  Text13: {
    fontSize: 13,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
  },
  Text14: {
    fontSize: 14,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
  },
  Text15: {
    fontSize: 15,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
  },
  Text16: {
    fontSize: 16,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 700,
  },
  Text17: {
    fontSize: 17,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
  },
  Text18: {
    fontSize: 18,
    fontFamily: 'Montserrat-Regular',
    color: COLORS?.darkBlue,
    fontWeight: 'bold',
    marginTop: hp('1'),
  },
  Text20: {
    fontSize: 20,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 400,
    color: COLORS?.darkBlue,
    fontWeight: 'bold',
    marginTop: hp('1'),
  },
  Text23: {
    fontSize: 23,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 700,
  },
  Text24: {
    fontSize: 24,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 700,
    color: COLORS?.darkBlue,
  },
  Text28: {
    fontSize: 28,
    fontFamily: 'Montserrat-Regular',
    color: COLORS?.darkBlue,
    lineHeight: 35,
    fontWeight: 'bold',
  },
  Text47: {
    fontSize: 47,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 400,
  },
  Text60: {
    fontSize: 60,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 400,
  },
  Text100: {
    fontSize: 100,
    fontFamily: 'Montserrat-Regular',
    fontWeight: 600,
  },
});
