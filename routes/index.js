import express from "express";
import { getRefByID, postPet } from '../models/index.js'
import fetch from 'node-fetch'
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
});

router.post("/", async function (req, res) {
    if(req.body !== undefined) {
    let breed = await getBreedApi(req.body.breeds);
    if (breed =true){
    console.log(req.body)
    const newPet = req.body;
    const result =  await postPet(newPet);
    res.json({ success: true, payload: result });
return   
    }}
    
});

export default router;

async function getBreedApi(breeds) {
    const response = await fetch("https://api.thedogapi.com/v1/breeds?x-api-key=%27api_key=live_OnD6vVgAKn4MCxx8zHVVq8PLuac65aPBD4N9HbKTDhY2lpD1ka1p5skCze3xXtIu%27");
    const data = await response.json();
    let breed = false;
    for(let i=0;i<data.length;i++){
        let breedVerification = data[i].name
        console.log(breedVerification)
        if(breedVerification.includes(breeds)){
            return true 
            
        }
    }
    if(breed == false){
      return false
    }
 }


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