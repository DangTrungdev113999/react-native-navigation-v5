import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import LoansScreen from '~/containers/manage/Loans';
import LoanScreen from '~/containers/manage/Loan';
import IdentifyInfoScreen from '~/containers/manage/IdentifyInfo';
import FinanceInfoScreen from '~/containers/manage/FinanceInfo';
import DisbursementInfoScreen from '~/containers/manage/DisbursementInfo';
import AddressInfoScreen from '~/containers/manage/AddressInfo';
import ContractInfoScreen from '~/containers/manage/ContractInfo';
import PaymentInstallmentScreen from '~/containers/manage/PaymentInstallment';
import PaymentFullRepaymentScreen from '~/containers/manage/PaymentFullRepayment';
import UpdateBasicScreen from '~/containers/manage/UpdateBasic';
import UpdateDisbursementScreen from '~/containers/manage/UpdateDisbursement';
import UpdateIdentityScreen from '~/containers/manage/UpdateIdentity';
import UpdateFinancialScreen from '~/containers/manage/UpdateFinancial';
import UpdateRelativesScreen from '~/containers/manage/UpdateRelatives';
import UpdateAddressScreen from '~/containers/manage/UpdateAddress';
import UpdateAgreementsScreen from '~/containers/manage/UpdateAgreements';

import LeftIcon from '~/components/header/LeftIcon';

const {Navigator, Screen} = createStackNavigator();

export default () => {
  return (
    <Navigator initialRouteName="loans_screen">
      <Screen
        name="loans_screen"
        component={LoansScreen}
        options={{title: 'Quản lý đơn vay'}}
      />
      <Screen
        name="loan_screen"
        component={LoanScreen}
        options={({navigation}) => ({
          title: 'Đơn #023473454',
          headerLeft: () => <LeftIcon navigation={navigation} />,
        })}
      />
      <Screen
        name="identify_info_screen"
        component={IdentifyInfoScreen}
        options={{
          title: 'Thông tin định danh',
        }}
      />
      <Screen
        name="finance_info_screen"
        component={FinanceInfoScreen}
        options={{
          title: 'Thủ tục, giấy tờ',
        }}
      />
      <Screen
        name="disbursement_info_screen"
        component={DisbursementInfoScreen}
        options={{
          title: 'Tài khoản giải ngân',
        }}
      />
      <Screen
        name="address_info_screen"
        component={AddressInfoScreen}
        options={{
          title: 'Địa chỉ nhận hồ sơ',
        }}
      />
      <Screen
        name="contract_info_screen"
        component={ContractInfoScreen}
        options={{
          title: 'Hợp đồng',
        }}
      />
      <Screen
        name="payment_installment_screen"
        component={PaymentInstallmentScreen}
        options={{
          title: 'Thanh toán',
        }}
      />
      <Screen
        name="payment_full_repayment_screen"
        component={PaymentFullRepaymentScreen}
        options={{
          title: 'Tất toán',
        }}
      />
      <Screen
        name="update_basic_screen"
        component={UpdateBasicScreen}
        options={{
          title: 'Chỉnh sửa cơ bản',
        }}
      />
      <Screen
        name="update_disbursement_screen"
        component={UpdateDisbursementScreen}
        options={{
          title: 'Chỉnh sửa tài khoản',
        }}
      />
      <Screen
        name="update_identity_screen"
        component={UpdateIdentityScreen}
        options={{
          title: 'Chỉnh sửa định danh',
        }}
      />
      <Screen
        name="update_financial_screen"
        component={UpdateFinancialScreen}
        options={{
          title: 'Chỉnh sửa giấy tờ',
        }}
      />
      <Screen
        name="update_relatives_screen"
        component={UpdateRelativesScreen}
        options={{
          title: 'Chỉnh sửa người thân',
        }}
      />
      <Screen
        name="update_address_screen"
        component={UpdateAddressScreen}
        options={{
          title: 'Chỉnh sửa địa chỉ',
        }}
      />
      <Screen
        name="update_agreements_screen"
        component={UpdateAgreementsScreen}
        options={{
          title: 'Xác nhận khoản vay',
        }}
      />
    </Navigator>
  );
};
