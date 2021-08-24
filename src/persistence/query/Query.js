/* eslint-disable prettier/prettier */
import {gql} from '@apollo/client';

export const GQLQuery = {
  GET_BANKS: gql`
    query {
      BankQuery {
        GetBanks {
          Name
        }
      }
    }
  `,
  GET_USER_BANK_CARDS: gql`
    query MyQuery {
      BankCardQuery {
        GetCustomerUserBankCard {
          CardNumber
          Id
          BankCard {
            AddOnCards
            AdditionalQualificationRequirements
            AnnualFees
            Bank {
              Id
              LogoStoragePath
              Name
            }
            BankId
            CardFocusSegment
            SelfEligibilityAgeMin
            SelfEligibilityAgeMax
            SalariedEligibilityAgeMax
            SalariedEligibilityAgeMin
            RewardRate
            RewardPointValue
            RewardPointIssuedPer100RsSpend
            RewardBoosterSectors
            RewardBooster
            RedemptionHandlingFee
            PriorityPassMembership
            OverLimitCharge
            Network
            MinSpendToWaiveAnnualFees
            MilestoneBenefits
            LatePaymentFee
            LoungeAccess
            KeyHighlights
            JoiningFees
            InterestRate
            IncomeSelfEmpAnnual
            Insurance
            IncomeSalariedAnnual
            ImageStoragePath
            Id
            HotelBenefits
            ForexMarkUpInPercent
            ForWhom
            Entertainment
            Dining
            DedicatedRewardsCatalogueAvailability
            CurrentlyIssuing
            CreditLimit
            CoBrandedPartner
            CoBrandedFlag
            CashWithdrawalCharges
            CardReplacementFee
            CardProgram
            CardName
            CardMaterial
            CardLevel
          }
        }
      }
    }
  `,
  GET_USER_BANK_CARD_REVIEW: gql`
    query MyQuery($BankCardId: Long!) {
      BankCardReviewQuery {
        GetBankCardReviewsByBankCardId(BankCardId: $BankCardId) {
          BankCardId
          CustomerUserId
          Id
          Rating
          Review
          Status
        }
      }
    }
  `,
  GET_USER_BANK_CARD_OFFER: gql`
  query MyQuery($CardId: Long!){
    BankCardOfferQuery {
      GetBankCardOfferById(CardId: $CardId) {
        BankCardId
        Eligibility
        ExpiryDate
        HowToRedeem
        Id
        LinkToOfferDetails
        LogoStoragePath
        OfferCode
        OfferDescription
        OfferTitle
        Platform
        TermsAndConditions
      }
    }
  }
  `,
};
