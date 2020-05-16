import { Animated, Easing } from 'react-native'

import CourseMaterial from './screens/CourseMaterial'
import Home from './screens/Home'
import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AppNavigator = createStackNavigator({
  Home: {
    screen: Home,
  },
  CourseMaterial: {
    screen: CourseMaterial
  }
}, {
  initialRouteName: "Home",
  headerMode: 'none',
  navigationOptions: {
    headerVisible: false,
  },
  transitionConfig: () => ({
    transitionSpec: {
      duration: 0,
      timing: Animated.timing,
      easing: Easing.step0,
    },
  }),
});
export default createAppContainer(AppNavigator);