/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLMutation = {
  SAVE_USER_BASIC_DETAILS: gql`
  mutation MyMutation($AnnualSalary: Int!, $DateOfBirth: Date!, $EmploymentType: String!, $Gender: String!, $PinCode: Int!){
    UserBasicDetailsMutation {
      UpdateUserBasicDetails(AnnualSalary: $AnnualSalary, DateOfBirth: $DateOfBirth, EmploymentType: $EmploymentType, Gender: $Gender, PinCode: $PinCode)
    }
  }
  `  
  ,
  ADD_USER_CREDIT_CARD: gql`
  mutation MyMutation($BankCardId: Long!, $BankId: Long!, $CardNumber: Long!) {
    AddCustomerUserBankCardMutation {
      AddCustomerUserBankCard(BankCardId: $BankCardId, BankId: $BankId, CardNumber: $CardNumber)
    }
  }
  `
};



