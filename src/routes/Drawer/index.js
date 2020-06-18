import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Tab from './Tab';
import FaqStack from './FaqStack';
import GuideStack from './GuideStack';
import IntroStack from './IntroStack';
import TermStack from './TermStack';

const {Navigator, Screen} = createDrawerNavigator();

export default () => {
  return (
    <Navigator>
      <Screen name="tab" component={Tab} />
      <Screen name="faq_stack" component={FaqStack} />
      <Screen name="guide_stack" component={GuideStack} />
      <Screen name="intro_stack" component={IntroStack} />
      <Screen name="term_stack" component={TermStack} />
    </Navigator>
  );
};
