import React from 'react';
import {Body, Text, Button, Block} from '~/components';

const Home = ({navigation}) => {
  const goToLoan = () => {
    navigation.openDrawer();
  };
  const createLoan = () => {
    navigation.navigate('drawer', {screen: 'guide_screen'});
  };

  // const signout = () => {
  //   navigation.navigate('auth_stack');
  // };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Home screen
      </Text>
      <Block>
        {/* <Button bg="primary" shadow m="0 0 30px" onPress={signout}>
          <Text color="white">Đăng xuất</Text>
        </Button> */}
        <Button bg="primary" shadow m="0 0 30px" onPress={goToLoan}>
          <Text color="white">Chi tiết đơn vay</Text>
        </Button>
        <Button bg="primary" shadow m="0 0 30px" onPress={createLoan}>
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
