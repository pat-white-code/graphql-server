import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

import { pool } from './db/db.js'

import { typeDefs } from './schema.js'
import getCards from './db/getCards.js'
import getUsers from './db/getUsers.js'
import getOwnedCards from './db/getOwnedCards.js'
import getUserById from './db/getUserById.js'
// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
// const typeDefs = `#graphql
//     # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

//     # This "Book" type defines the queryable fields for every book in our data source.
//     type Book {
//     title: String
//     author: String
//     }

//     # The "Query" type is special: it lists all of the available queries that
//     # clients can execute, along with the return type for each. In this
//     # case, the "books" query returns an array of zero or more Books (defined above).
//     type Query {
//         books: [Book]
//     }
// `;

const resolvers = {
    Query: {
        async cards() {
            const response = await getCards(pool)
            return response.rows
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