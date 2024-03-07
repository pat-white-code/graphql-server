import { pool } from './db.js'

const getOwnedCardByUser = async (userId) => {
    const client = await pool.connect()

    const query = `SELECT * FROM owned_cards
    WHERE user_id = $1;
    `

    const values = [userId]

    try {
        const dbResponse = await client.query(query, values)
        const ownedCards = dbResponse.rows
        return ownedCards
    } catch (error) {
        throw new Error()
    }
}

export default getOwnedCardByUser