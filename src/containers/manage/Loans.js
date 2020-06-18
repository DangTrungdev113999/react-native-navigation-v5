import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Mamage = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('loan_screen');
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Mamage screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goDetail}>
          <Text color="white">Chi tiết đơn</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Mamage;
