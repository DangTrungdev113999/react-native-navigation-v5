import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Vetification = ({navigation}) => {
  const goToSetPass = () => {
    navigation.navigate('set_password_screen');
  };
  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Vetification screen
      </Text>
      <Block>
        <Button bg="accent" shadow onPress={goToSetPass}>
          <Text color="white">Set pass</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Vetification;
