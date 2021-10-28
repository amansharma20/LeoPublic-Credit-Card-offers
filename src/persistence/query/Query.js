/* eslint-disable prettier/prettier */
import { gql } from '@apollo/client';

export const GQLQuery = {
  GET_BANKS: gql`
    query {
      BankQuery {
        GetBanks {
          Id
          LogoStoragePath
          Name
        }
      }
    }
  `,
  GET_USER_BANK_CARDS: gql`
  query MyQuery {
    BankCardQuery {
      GetCustomerUserBankCard {
        BankCard {
          AddOnCards
          AdditionalQualificationRequirements
          AnnualFees
          BankId
          BirthdayBenefits
          CardFocusSegment
          CardLevel
          CardMaterial
          CardName
          CardProgram
          CardReplacementFee
          CashWithdrawalCharges
          CoBrandedFlag
          CreditLimit
          CoBrandedPartner
          CurrentlyIssuing
          DedicatedRewardsCatalogueAvailability
          Dining
          Entertainment
          ForWhom
          ForexMarkUpInPercent
          FuelBenefits
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
          Rating
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
          TravelBenefits
          WelcomeBenefits
          Bank {
            Id
            Name
            LogoStoragePath
          }
        }
        CardNumber
        Id
        IsReviewGiven
      }
    }
  }
  `,
  GET_USER_BANK_CARD_REVIEW: gql`
    query MyQuery($BankCardId: Long!) {
      BankCardReviewQuery {
        GetBankCardReviewsByBankCardId(BankCardId: $BankCardId) {
          CustomerUser {
            FirstName
            Id
            LastName
            ProfilePictureStoragePath
          }
          Id
          Rating
          Review
          UpdatedDateTimeUtc
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
    Bank {
      Id
      Name
      LogoStoragePath
    }
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
          BestSuitedFor
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
          Bank {
            Id
            Name
            LogoStoragePath
          }
     }
     }
    }
    `,
  GET_BEST_OFFERS: gql`
  query MyQuery {
    BankCardOfferQuery {
    GetBankCardOffers {
        Bank {
        Id
        Name
        }
        BankCard {
        CardName
        }
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
`, GET_LATEST_CARD_OFFERS: gql`
query MyQuery {
  BankCardOfferQuery {
    GetBankCardOfferByDate {
          Bank {
          Id
          Name
          LogoStoragePath
          }
          BankCard {
          CardName
          }
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
`, GET_ALL_CARD_OFFERS: gql`
      query MyQuery {
        BankCardOfferQuery {
        GetBankCardOffers {
            Bank {
            Id
            Name
            }
            BankCard {
            CardName
            }
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
`, GET_USER_PROFILE: gql`
query MyQuery {
  UserProfileQuery {
    GetUserProfile {
      AnnualSalary
      ApplicationUser {
        Email
        PhoneNumber
      }
      ApplicationUserId
      DateOfBirth
      EmploymentType
      FirstName
      Gender
      Id
      LastName
      PinCode
      ProfilePictureStoragePath
    }
  }
}
`,GET_CARD_BY_BANK_ID: gql`
        query MyQuery($BankId: Long!) {
        BankCardQuery {
          GetBankCardById(BankId: $BankId) {
            CardName
            Id
          }
        }
        }
`
,GET_USER_EXPENSE: gql`
query MyQuery {
  UserExpenseQuery {
    GetUserExpenses {
      Entertainment
      Groceries
      Id
      Others
      Shopping
      TotalCreditCardSpend
      TotalSpend
      Travel
    }
  }
}
`,
};


   
