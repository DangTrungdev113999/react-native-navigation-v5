import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Home = ({navigation}) => {
  const goToLoan = () => {
    navigation.navigate('manage_stack', {
      screen: 'loan_screen',
    });

    // navigation.reset({
    //   index: 0,
    //   routes: [{name: 'manage_stack'}],
    // });
  };

  const goToUser = () => {
    navigation.jumpTo('user_stack');
  };

  const createLoan = () => {
    navigation.navigate('create_loan_stack');
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Home screen
      </Text>
      <Block>
        <Button bg="primary" shadow m="0 0 30px" onPress={goToLoan}>
          <Text color="white">Chi tiết đơn vay</Text>
        </Button>
        <Button bg="primary" shadow m="0 0 30px" onPress={goToUser}>
          <Text color="white">Cá nhân</Text>
        </Button>
        <Button bg="accent" shadow onPress={createLoan}>
          <Text color="white">Tạo đơn</Text>
        </Button>
      </Block>
    </Body>
  );
};

export default Home;
