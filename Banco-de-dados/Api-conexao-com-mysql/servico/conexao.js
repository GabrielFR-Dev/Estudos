import mysql from 'mysql/promise';
import env from 'dotenv';


env.config();

const pool = mysql.createaPool({
    host: process.env.CS_HOST,
    user: process.env.CS_USER,
    password: process.env.CS_PASSWORD,
    database: process.env.CS_DATABASE
})

export default pool;








