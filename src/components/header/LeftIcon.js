import React from 'react';
import Icon from '../Icon';
import theme from '../../config/theme';

const RightIcon = ({navigation}) => {
  const goBack = () => navigation.goBack();
  return (
    <Icon
      type="ionicons"
      name="ios-arrow-round-back"
      size={40}
      color={theme.colors.black}
      onPress={goBack}
      m="0 0 0 20px"
    />
  );
};

export default RightIcon;
