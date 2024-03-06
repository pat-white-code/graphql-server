export const typeDefs = `#graphql
    type Card {
        id: ID,
        name: String
        multiverseid: Int
        rarity: String
        image_url: String
    }
    type Query {
        cards: [Card]
    }
`