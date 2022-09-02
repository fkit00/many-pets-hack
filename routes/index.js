import express from "express";
import { getRefByID } from '../models/index.js'

export const router = express.Router();


router.get("/", async function (req, res) {
    if (req.query.ref !== undefined){
const result = await getRefByID(req.query.ref)
res.json({
    success: true,
    payload: result
})
return
    }
})


export default router;


/* multiple queries coming in on the search string 
speices=
breed= 
postcode/city/county=
age= 

if (speices )
if (breed != the 3 picked out ) else
if (postcode != 3 picked out) else 


if (breed != rover`|| breed != lab)




*/