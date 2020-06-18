import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Notification = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('manage_stack');
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Result screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goDetail}>
          <Text color="white">Danh sách đơn vay</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Notification;
