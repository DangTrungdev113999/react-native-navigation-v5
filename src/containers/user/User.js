import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const User = ({navigation}) => {
  const goToProfile = () => {
    navigation.navigate('profile_screen');
  };

  const goToLinking = () => {
    navigation.navigate('linking_screen');
  };

  const goToChangePass = () => {
    navigation.navigate('change_password_screen');
  };

  const signout = () => {
    navigation.navigate('auth_stack', {screen: 'welcome_screen'});
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        User screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goToProfile}>
          <Text color="white">Hồ sơ cá nhân</Text>
        </Button>
        <Button bg="primary" shadow m="0 0 30px" onPress={goToLinking}>
          <Text color="white">Liên kết mạng xã hội</Text>
        </Button>
        <Button bg="primary" shadow m="0 0 30px" onPress={goToChangePass}>
          <Text color="white">Đổi mật khẩu</Text>
        </Button>
        <Button bg="accent" shadow onPress={signout}>
          <Text color="white">Đăng xuất</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default User;
