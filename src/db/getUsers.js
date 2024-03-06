const getUsers = async (pool) => {
    const client = await pool.connect()

    const query = `SELECT * FROM users`

    try {
        const dbResponse = await client.query(query)
        const rows = dbResponse.rows
        return rows
    } catch (error) {
        throw new Error()
    }
}

export default getUsers