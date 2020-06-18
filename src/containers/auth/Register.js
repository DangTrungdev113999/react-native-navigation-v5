import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Register = ({navigation}) => {
  const gotoVetification = () => {
    navigation.navigate('verification_screen');
  };
  const gotoTerm = () => {
    navigation.navigate('term_screen');
  };
  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Register screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={gotoVetification}>
          <Text color="white">Xác thực</Text>
        </Button>
        <Button bg="secondary" shadow onPress={gotoTerm}>
          <Text color="white">Diều khoản</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Register;
