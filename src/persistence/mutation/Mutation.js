/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLMutation = {
  SAVE_USER_BASIC_DETAILS: gql`
        mutation MyMutation($AnnualSalary: Int!, $EmploymentType: String!, $Gender: String!, $PinCode: Int!, $DateOfBirth: DateTime!){
          UserBasicDetailsMutation {
            UpdateUserBasicDetails(AnnualSalary: $AnnualSalary, EmploymentType: $EmploymentType, Gender: $Gender, PinCode: $PinCode, DateOfBirth: $DateOfBirth)
          }
        }
  `,
  ADD_USER_CREDIT_CARD: gql`
      mutation MyMutation($BankCardId: Long!, $BankId: Long!, $CardNumber: Long!) {
        AddCustomerUserBankCardMutation {
          AddCustomerUserBankCard(BankCardId: $BankCardId, BankId: $BankId, CardNumber: $CardNumber)
        }
      }
  `,
  DELETE_USER_CARD: gql`
      mutation MyMutation($Id: Long!) {
        DeleteCustomerUserBankCardMutation {
          DeleteCustomerUserBankCard(Id: $Id)
        }
      }
  `,
  ADD_CARD_REVIEW: gql`
      mutation MyMutation($BankCardId: Long!, $Review: String!) {
        CardReviewMutation {
          CreateCardReview(BankCardId: $BankCardId, Review: $Review)
        }
      }
  `, EDIT_CARD_REVIEW: gql`
        mutation MyMutation($Id: Long!, $Review: String!) {
          CardReviewMutation {
            EditBankCardReview(Id: $Id, Review: $Review)
          }
        }
  `, ADD_USER_EXPENSE: gql`
        mutation MyMutation($Entertainment: Decimal!, $Groceries: Decimal!, $Others: Decimal!, $Shopping: Decimal!, $TotalCreditCardSpend: Decimal!, $Travel: Decimal!) {
          UserExpenseMutation {
            AddUserExpense(Entertainment: $Entertainment, Groceries: $Groceries, Others: $Others, Shopping: $Shopping, TotalCreditCardSpend: $TotalCreditCardSpend, Travel: $Travel) {
              Id
              Entertainment
              Groceries
              Others
              Shopping
              TotalCreditCardSpend
              TotalSpend
              Travel
            }
          }
        }
  `
};



