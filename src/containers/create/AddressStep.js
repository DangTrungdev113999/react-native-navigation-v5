import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Notification = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('result_step_screen');
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Address screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goDetail}>
          <Text color="white">Detail</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Notification;
