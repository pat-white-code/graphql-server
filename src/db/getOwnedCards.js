
const getOwnedCards = async (pool) => {
    const client = await pool.connect()

    const query = `SELECT * FROM owned_cards`

    try {
        const dbResponse = await client.query(query)
        const rows = dbResponse.rows
        return rows
    } catch (error) {
        throw new Error()
    }
}

export default getOwnedCards