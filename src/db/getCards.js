// import { Pool } from "pg"

const getCards = async (pool) => {
    const client = await pool.connect()

    const query = `SELECT * FROM cards`

    try {
        const dbResponse = await client.query(query)
        return dbResponse
    } catch (error) {
        throw new Error()
    }
}

export default getCards