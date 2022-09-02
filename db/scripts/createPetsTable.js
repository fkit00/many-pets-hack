/* - create table
    import query
    create SQL string (CREATE TABLE IF EXISTS)
    run query passing in SQL string
    Store inside res and print out res.command for confirmation */

import { query } from "../index.js";

const sqlString =
  `CREATE TABLE IF NOT EXISTS pets (pet_id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY, 
    species TEXT, breeds TEXT, city TEXT, age INT, cost INT, ref INT);`;

async function createPetsTable() {
    const res = await query(sqlString);
    console.log(res.command);
}

createPetsTable();