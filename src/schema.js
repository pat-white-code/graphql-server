export const typeDefs = `#graphql
    type Card {
        id: ID!,
        name: String
        multiverseid: Int
        rarity: String
        image_url: String
        ownedCards: [OwnedCard!]
    }
    type User {
        id: Int!
        first_name: String
        last_name: String
        username: String!
        ownedCards: [OwnedCard!]
    }
    type OwnedCard {
        id: Int!
        card_id: ID!
        user_id: Int!
        condition: String!
        card: Card!
        user: User!
    }
    type Query {
        cards: [Card]
        card(id: ID!): Card
        users: [User]
        user(id: Int!): User
        ownedCards: [OwnedCard]
        ownedCard(id: Int!): OwnedCard
    }
`