import mysql from 'mysql2';
import dotenv from 'dotenv';
dotenv.config();
const db = mysql.createConnection(process.env.DATABASE_URL);


db.connect((err) => {
    if (err) {
        console.error('Error connecting to database:', err);
        return;
    }
    console.log('Connected to MySQL database successfully!');
});
export default db;