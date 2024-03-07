const getUserById = async (pool, userId) => {
    const client = await pool.connect()

    const query = `SELECT * FROM users
    WHERE id = $1;
    `

    const values = [userId]

    try {
        const dbResponse = await client.query(query, values)
        const user = dbResponse.rows[0]
        return user
    } catch (error) {
        throw new Error()
    }
}

export default getUserById