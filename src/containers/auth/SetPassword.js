import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Setpassword = ({navigation}) => {
  const gotoRegisterSuccess = () => {
    navigation.navigate('register_success_screen');
  };
  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Setpassword screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={gotoRegisterSuccess}>
          <Text color="white">Register success</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Setpassword;
