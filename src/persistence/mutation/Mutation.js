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
};


