import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: "digitaldiner_user",
  host: "dpg-d01p292dbo4c738vtus0-a.oregon-postgres.render.com",
  database: "digitaldiner",
  password: "pZqbdBmtIjtBaZawYbQwMhrphZGY7eu3",
  port: 5432,
  connectionTimeoutMillis: 5000,
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
  // Attempt to reconnect
  setTimeout(() => {
    pool.connect();
  }, 5000);
});
// console.log('PG_PASSWORD:', process.env.PG_PASSWORD);

// Export pool
export { pool };
