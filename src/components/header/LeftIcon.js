import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from '../Icon';
import theme from '../../config/theme';

const RightIcon = ({navigation}) => {
  const goBack = () => navigation.goBack(null);
  return (
    <TouchableOpacity onPress={goBack}>
      <Icon
        type="ionicons"
        name="ios-arrow-round-back"
        size={40}
        color={theme.colors.black}
        m="0 0 0 20px"
      />
    </TouchableOpacity>
  );
};

export default RightIcon;
