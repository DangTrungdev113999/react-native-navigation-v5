import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const RegisterSuccess = ({navigation}) => {
  const begin = () => {
    navigation.navigate('drawer');
  };
  const goToGuide = () => {
    navigation.navigate('drawer', {screen: 'guide_screen'});
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        RegisterSuccess screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={begin}>
          <Text color="white">Bắt đầu sử dụng</Text>
        </Button>
        <Button bg="gray" shadow onPress={goToGuide}>
          <Text color="white">Xem hướng dẫn vay</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default RegisterSuccess;
