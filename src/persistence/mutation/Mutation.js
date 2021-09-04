/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLMutation = {
  SAVE_USER_BASIC_DETAILS: gql`
  mutation MyMutation($AnnualSalary: Int!, $EmploymentType: String!, $Gender: String!, $PinCode: Int!){
    UserBasicDetailsMutation {
      UpdateUserBasicDetails(AnnualSalary: $AnnualSalary, EmploymentType: $EmploymentType, Gender: $Gender, PinCode: $PinCode)
    }
  }
  `  ,
  ADD_USER_CREDIT_CARD: gql`
  mutation MyMutation($BankCardId: Long!, $BankId: Long!, $CardNumber: Long!) {
    AddCustomerUserBankCardMutation {
      AddCustomerUserBankCard(BankCardId: $BankCardId, BankId: $BankId, CardNumber: $CardNumber)
    }
  }
  `
  ,
  DELETE_USER_CARD: gql`
    mutation MyMutation($Id: Long!) {
      DeleteCustomerUserBankCardMutation {
        DeleteCustomerUserBankCard(Id: $Id)
      }
    }
  ` ,
  ADD_CARD_REVIEW: gql`
  mutation MyMutation($BankCardId: Long!, $Review: String!) {
    CardReviewMutation {
      CreateCardReview(BankCardId: $BankCardId, Review: $Review)
    }
  }
  ` ,EDIT_CARD_REVIEW: gql`
  mutation MyMutation($Id: Long!, $Review: String!) {
    CardReviewMutation {
      EditBankCardReview(Id: $Id, Review: $Review)
    }
  }
  `
};
