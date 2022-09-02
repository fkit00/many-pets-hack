// pool is going to be imported
//export our query 

import pg from 'pg'
import dotenv from "dotenv";
dotenv.config();

const connectionString = process.env.PGURL


const pool = new pg.Pool({
    connectionString,
})


export function query(text, params, callback){
    return pool.query(text, params, callback)
  }

/*   let res =  await query('SELECT NOW()')

 console.log(res)  */