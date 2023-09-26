import { drizzle } from 'drizzle-orm/mysql2';
import { migrate } from 'drizzle-orm/mysql2/migrator';
import mysql from 'mysql2/promise';
import { config } from './config';



// create the connection
const poolConnection = mysql.createPool({
  host: config.host,
  user: config.username,
  password: config.password,
  // database: config.,
  multipleStatements: true,
});

const db = drizzle(poolConnection);

// this will automatically run needed migrations on the database
async function main(){
  console.log("migrating started ....");
  await migrate(db, { migrationsFolder: './drizzle' });
  console.log("migrations finished ....");
}

main().catch(err=> {console.log(err); process.exit(0);});