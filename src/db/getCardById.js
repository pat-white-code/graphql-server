const getCardById = async (pool, cardId) => {
    const client = await pool.connect()

    const query = `SELECT * FROM cards
    WHERE id = $1;
    `

    const values = [cardId]

    try {
        const dbResponse = await client.query(query, values)
        const card = dbResponse.rows[0]
        return card
    } catch (error) {
        throw new Error()
    }
}

export default getCardById