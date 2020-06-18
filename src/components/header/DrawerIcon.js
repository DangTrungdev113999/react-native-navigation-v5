import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import theme from '../../config/theme';

const RightIcon = ({navigation}) => {
  const openDrawer = () => navigation.openDrawer();
  return (
    <TouchableOpacity onPress={openDrawer}>
      <Icon
        type="antDesign"
        name="bars"
        size={28}
        color={theme.colors.black}
        m="0 0 0 10px"
      />
    </TouchableOpacity>
  );
};

export default RightIcon;
