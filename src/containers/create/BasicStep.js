import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const BasicStep = ({navigation}) => {
  const goDetail = () => {
    navigation.navigate('disbursement_step_screen');
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        BasicStep screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goDetail}>
          <Text color="white">Next</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default BasicStep;
