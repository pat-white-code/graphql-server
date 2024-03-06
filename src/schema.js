export const typeDefs = `#graphql
    type Card {
        id: ID!,
        name: String
        multiverseid: Int
        rarity: String
        image_url: String
    }
    type User {
        id: Int!
        first_name: String
        last_name: String
        username: String!
    }
    type Query {
        cards: [Card]
        users: [User]
    }
`