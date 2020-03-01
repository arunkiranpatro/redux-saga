
const { buildSchema } = require('graphql');
const schema = buildSchema(`
    type Phone{
        CountryCode:String
        IsTouchStoneEnabled:String
        PhoneDetails:String
        PhoneNumber:String
        PhoneTypeLabel:String
        Status:String
    }
    type User{
        AccountNumber:String
        AvailBalance:String
        BirthYear:String
        FormattedDOB:String
        MaskedSSN:String
        MaskedTIN:String
        MerchantCategory:String
        PrimaryEmail:String
        AccountName:String
        CLV:String
        LastLogin:String
        LastTransactionAmount:String
        LastInteraction:String
        StepUpStatus:String
        PCR:String
        Opportunity:String
        TotalBalInPrimary:String
        ActivePhones:[Phone]
    }

    type Query {
        user(AccountNumber:String): User
    }

    schema {
        query:Query
    }
`);

module.exports = schema;
