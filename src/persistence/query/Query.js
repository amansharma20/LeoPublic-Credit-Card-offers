/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

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
  GET_EXPLORE_RECOMMENDED_CARDS: gql`
  query MyQuery {
    ExploreQuery {
    GetRecommended {
    AddOnCards
    AdditionalQualificationRequirements
    AnnualFees
    BankId
    CardFocusSegment
    CardLevel
    CardMaterial
    CardName
    CardProgram
    CardReplacementFee
    CashWithdrawalCharges
    CoBrandedFlag
    CoBrandedPartner
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
    IncomeSalariedAnnual
    IncomeSelfEmpAnnual
    Insurance
    InterestRate
    JoiningFees
    KeyHighlights
    LatePaymentFee
    LoungeAccess
    MilestoneBenefits
    MinSpendToWaiveAnnualFees
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
     }
     }
    }
  `,
  GET_EXPLORE_DISCOVER_CARDS: gql`
  query MyQuery {
    ExploreQuery {
    GetDiscover {
    AddOnCards
    AdditionalQualificationRequirements
    AnnualFees
    BankId
    CardFocusSegment
    CardLevel
    CardMaterial
    CardName
    CardProgram
    CardReplacementFee
    CashWithdrawalCharges
    CoBrandedFlag
    CoBrandedPartner
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
    IncomeSalariedAnnual
    IncomeSelfEmpAnnual
    Insurance
    InterestRate
    JoiningFees
    KeyHighlights
    LatePaymentFee
    LoungeAccess
    MilestoneBenefits
    MinSpendToWaiveAnnualFees
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
     }
     }
    }`,
  GET_BEST_OFFERS: gql`
    query MyQuery {
      BankCardOfferQuery {
        GetBankCardOffers {
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
  `, GET_BANK_CARD_OFFERS_BY_ID: gql`
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
`,GET_LATEST_CARD_OFFERS: gql`
query MyQuery {
  BankCardOfferQuery {
    GetBankCardOfferByDate {
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
`,GET_ALL_CARD_OFFERS: gql`
query MyQuery {
  BankCardOfferQuery {
    GetBankCardOffers {
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
`
};


