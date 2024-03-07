import { pool } from './db.js'

const getOwnedCardsByCardId = async (cardId) => {
    const client = await pool.connect()

    const query = `
        SELECT *
        FROM owned_cards
        WHERE card_id = $1
        ;
    `

    const values = [cardId]

    try {
        debugger
        const dbResponse = await client.query(query, values)
        const ownedCards = dbResponse.rows
        return ownedCards
    } catch (error) {
        throw new Error()
    }
}

export default getOwnedCardsByCardId