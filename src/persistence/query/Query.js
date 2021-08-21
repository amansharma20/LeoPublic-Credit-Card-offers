/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLQuery = {
    GET_BANKS: gql`
                query{
                        BankQuery{
                            GetBanks{
                                Name
                            }
                        }
                    }`
};

