import React from 'react';
import {ScrollView} from 'react-native';
import {Body, Text, Button, Block} from '~/components';

const LoanDetail = ({navigation}) => {
  const goToIdentifyInfo = () => {
    navigation.navigate('identify_info_screen');
  };
  const goToFinancial = () => {
    navigation.navigate('finance_info_screen');
  };
  const goToDisbursement = () => {
    navigation.navigate('disbursement_info_screen');
  };
  const goToAddress = () => {
    navigation.navigate('address_info_screen');
  };
  const goToContact = () => {
    navigation.navigate('contract_info_screen');
  };
  const goToPaymentInstallment = () => {
    navigation.navigate('payment_installment_screen');
  };
  const goToFullReqayment = () => {
    navigation.navigate('payment_full_repayment_screen');
  };
  const goToUpdateBasic = () => {
    navigation.navigate('update_basic_screen');
  };
  const goToUpdateDisbursement = () => {
    navigation.navigate('update_disbursement_screen');
  };
  const goToUpdateidentify = () => {
    navigation.navigate('update_identity_screen');
  };
  const goToToUpdateFinancial = () => {
    navigation.navigate('update_financial_screen');
  };
  const goToUpdateRelatives = () => {
    navigation.navigate('update_relatives_screen');
  };
  const goToUpdateAddress = () => {
    navigation.navigate('update_address_screen');
  };
  const goToUpdateAgreement = () => {
    navigation.navigate('update_agreements_screen');
  };

  return (
    <Body flex={1} center middle>
      <Text h1 bold m="0 0 40px">
        Loan detail screen
      </Text>
      <ScrollView>
        <Block>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToIdentifyInfo}>
            <Text color="white">Thông tin định danh</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToDisbursement}>
            <Text color="white">Thủ tục, giấy tờ</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToFinancial}>
            <Text color="white">Tài khoản giải ngân</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToAddress}>
            <Text color="white">Địa chỉ nhận hồ sơ</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToContact}>
            <Text color="white">Hợp đồng</Text>
          </Button>
          <Button
            bg="primary"
            w="300px"
            shadow
            m="0 0 30px"
            onPress={goToFinancial}>
            <Text color="white">Video deo xác nhận khoản vay</Text>
          </Button>
          <Button
            bg="secondary"
            shadow
            m="0 0 30px"
            onPress={goToPaymentInstallment}>
            <Text color="white">Thanh toán</Text>
          </Button>
          <Button bg="black" shadow m="0 0 30px" onPress={goToFullReqayment}>
            <Text color="white">Tất toán</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToUpdateBasic}>
            <Text color="white">Thông tin cơ bản</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToUpdateidentify}>
            <Text color="white">cập nhật định danh</Text>
          </Button>
          <Button
            bg="primary"
            shadow
            m="0 0 30px"
            onPress={goToUpdateRelatives}>
            <Text color="white">cập nhật người thân</Text>
          </Button>
          <Button
            bg="primary"
            shadow
            m="0 0 30px"
            onPress={goToUpdateDisbursement}>
            <Text color="white">cập nhật giấy tờ</Text>
          </Button>
          <Button
            bg="primary"
            shadow
            m="0 0 30px"
            onPress={goToToUpdateFinancial}>
            <Text color="white">cập nhật Tài chính</Text>
          </Button>
          <Button bg="primary" shadow m="0 0 30px" onPress={goToUpdateAddress}>
            <Text color="white">cập nhật Địa chỉ</Text>
          </Button>
          <Button
            bg="primary"
            shadow
            m="0 0 30px"
            onPress={goToUpdateAgreement}>
            <Text color="white">cập nhật hồ sơ</Text>
          </Button>
        </Block>
      </ScrollView>
    </Body>
  );
};

export default LoanDetail;
