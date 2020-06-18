import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Welcome = ({navigation}) => {
  const gotoRegister = () => {
    navigation.navigate('register_screen');
  };
  const gotoLogin = () => {
    navigation.navigate('login_screen');
  };
  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Welcome screen
      </Text>
      <Block>
        <Button gradient shadow m="0 0 30px" onPress={gotoRegister}>
          <Text color="white">Đăng ký</Text>
        </Button>
        <Button bg="accent" shadow onPress={gotoLogin}>
          <Text color="white">Đăng nhập</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Welcome;
