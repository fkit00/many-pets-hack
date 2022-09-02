import { query } from "../index.js";

const sqlString =
  `DROP TABLE IF EXISTS pets;`;

async function dropPetsTable() {
    const res = await query(sqlString);
    console.log(res.command);
}

dropPetsTable();