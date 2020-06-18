import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createStackNavigator} from '@react-navigation/stack';

import Tab from './Tab';
import FaqScreen from '~/containers/drawer/Faq';
import GuideScreen from '~/containers/drawer/Guide';
import IntroScreen from '~/containers/drawer/Intro';
import TermScreen from '~/containers/drawer/Term';

const {Navigator, Screen} = createDrawerNavigator();

function getHeaderTitle(route) {
  const routeName = route.state
    ? route.state.routes[route.state.index].name
    : route.params?.screen;

  switch (routeName) {
    case 'faq_screen':
      return 'Câu hỏi thường gặp';
    case 'guide_screen':
      return 'Hướng dẫn vay';
    case 'intro_screen':
      return 'Giới thiệu';
    case 'term_screen':
      return 'Điều khoản sử dụng';
  }
}

export default ({navigation, route}) => {
  React.useLayoutEffect(() => {
    navigation.setOptions({headerTitle: getHeaderTitle(route)});
  }, [navigation, route]);

  return (
    <Navigator>
      <Screen name="tab" component={Tab} />
      <Screen name="faq_screen" component={FaqScreen} />
      <Screen name="guide_screen" component={GuideScreen} />
      <Screen name="intro_screen" component={IntroScreen} />
      <Screen name="term_screen" component={TermScreen} />
    </Navigator>
  );
};
