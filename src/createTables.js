import { pool } from './db.js'

const imagesTable = `CREATE TABLE IF NOT EXISTS
    images(
        id SERIAL PRIMARY KEY,
        title VARCHAR(128) NOT NULL,
        cloudinary_id VARCHAR(128) NOT NULL,
        image_url VARCHAR(128) NOT NULL
    )`;

const cardsTable = `CREATE TABLE IF NOT EXISTS
cards(
    id UUID PRIMARY KEY,
    multiverseId INT,
    name VARCHAR(250) NOT NULL,
    rarity VARCHAR(50) NOT NULL,
    image_url VARCHAR(250) NOT NULL
);`;

const users = `
CREATE TABLE users (
	id SERIAL PRIMARY KEY,
    username VARCHAR(50) NOT NULL UNIQUE,
	first_name VARCHAR(50),
	last_name VARCHAR(50)
)
`

const ownedCards = `
CREATE TYPE card_condition AS ENUM (
    'NM',
    'LP',
    'MP',
    'HP',
    'D'
);

CREATE TABLE IF NOT EXISTS
    owned_cards(
        id int NOT NULL PRIMARY KEY NOT NULL
        card_id UUID references cards(id) NOT NULL
        user_id int references users(id) NOT NULL
        condition card_condition NOT NULL
    );
`

console.log('creating images table...')
pool.query(imagesTable)
    .then((res) => {
        console.log('createTables response', res)
    })
    .catch((err) => {
        console.log('aborting images table...')
        console.log(err)
        pool.end()
    })

pool.query(cardsTable)
    .then((res) => {
        console.log('cardsTable response', res)
        pool.end()
    })
    .catch((err) => {
        console.log('aborting cardsTable...')
        console.log(err)
        pool.end()
    })
