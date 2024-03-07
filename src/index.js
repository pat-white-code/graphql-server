import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { pool } from './db/db.js'

import { typeDefs } from './schema.js'
import getCards from './db/getCards.js'
import getUsers from './db/getUsers.js'
import getOwnedCards from './db/getOwnedCards.js'
import getUserById from './db/getUserById.js'
import getCardById from './db/getCardById.js'
import getOwnedCardById from './db/getOwnedCardById.js'

const resolvers = {
    Query: {
        async cards() {
            const response = await getCards(pool)
            return response.rows
        },
        async card(_, { id }) {
            return await getCardById(pool, id)
        },
        async user(_, args) {
            const userId = args.id
            return await getUserById(pool, userId)
        },
        async users() {
            return await getUsers(pool)
        },
        async ownedCards() {
            return await getOwnedCards(pool)
        },
        async ownedCard(_, { id }) {
            return await getOwnedCardById(id)
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers,
})

startStandaloneServer(server, {
    listen: { port: 4000 }
})

console.log('server ready at port', 4000 )