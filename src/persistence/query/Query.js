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
            }`,
    GET_USER_BANK_CARDS: gql`
    {
        BankCardQuery {
          GetCustomerUserBankCard {
            Id
            CardNumber
            BankCard {
              AdditionalQualificationRequirements
              AddOnCards
              AnnualFees
              BankId
              InterestRate
              JoiningFees
              KeyHighlights
              LatePaymentFee
              LoungeAccess
              MinSpendToWaiveAnnualFees
              MilestoneBenefits
              Network
              OverLimitCharge
              PriorityPassMembership
              RedemptionHandlingFee
              RewardBooster
              RewardBoosterSectors
              RewardPointIssuedPer100RsSpend
              RewardPointValue
              RewardRate
              SalariedEligibilityAgeMax
              SalariedEligibilityAgeMin
              SelfEligibilityAgeMax
              SelfEligibilityAgeMin
              CardFocusSegment
              CardLevel
              CardMaterial
              CardName
              CardProgram
              CardReplacementFee
              CashWithdrawalCharges
              CoBrandedPartner
              CoBrandedFlag
              CreditLimit
              CurrentlyIssuing
              DedicatedRewardsCatalogueAvailability
              Dining
              Entertainment
              ForWhom
              ForexMarkUpInPercent
              HotelBenefits
              Id
              ImageStoragePath
              IncomeSelfEmpAnnual
              IncomeSalariedAnnual
              Insurance
            }
          }
        }
      }
            `
};

