import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Login = ({navigation}) => {
  const goToHome = () => {
    navigation.navigate('drawer');
  };
  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Login screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goToHome}>
          <Text color="white">Home Screen</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Login;
