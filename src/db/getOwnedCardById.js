import { pool } from './db.js'

const getOwnedCardById = async (id) => {
    const client = await pool.connect()

    const query = `SELECT * FROM owned_cards
    WHERE id = $1;
    `

    const values = [id]

    try {
        const dbResponse = await client.query(query, values)
        const ownedCard = dbResponse.rows[0]
        return ownedCard
    } catch (error) {
        throw new Error()
    }
}

export default getOwnedCardById