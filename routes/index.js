import express, { text } from "express";
export const router = express.Router();
import fetch from "node-fetch";

router.get("/", async function (req, res) {
    let price = 120
if (req.query.species == 'dog'){
// ten per cent discount on these three breeds 

 if(req.query.breeds =='labrador'||req.query.breeds =='Chihuahua'||req.query.breeds =='Husky'){
price= price*0.9
 }
 // fifteen per cent increase for these areas 

 if (req.query.city == 'London'||req.query.city == 'Portsmouth'||req.query.city == 'Leeds'){
price = price*1.15
 }
 if(req.query.age==1){
    price= price*1.05
}
if(req.query.age==2){
    price= price*1.10
}
if(req.query.age==3){
    price= price*1.15
}
if(req.query.age==4){
    price= price*1.20
}
if(req.query.age==5){
    price= price*1.25
}
if(req.query.age==6){
    price= price*1.35
}
if(req.query.age==7){
    price= price*1.45
}
if(req.query.age==8){
    price= price*1.55
}
if(req.query.age==9){
    price= price*1.65
}

if(req.query.age==10||req.query.age>10){
    price= price*1.75
} 

async function getBreedApi(breeds) {
    const response = await fetch("https://api.thedogapi.com/v1/breeds?x-api-key=%27api_key=live_OnD6vVgAKn4MCxx8zHVVq8PLuac65aPBD4N9HbKTDhY2lpD1ka1p5skCze3xXtIu%27");
    const data = await response.json();
    let breed = false;
    for(let i=0;i<data.length;i++){
        let breedVerification = data[i].name
        console.log(breedVerification)
        if(breedVerification.includes(breeds)){
            breed = true;
            res.json({
                success: true,
                payload:{
                    species:req.query.species,
                    breeds:req.query.breeds, 
                    city:req.query.city,
                    cost:price
                } 
            })        // return true
        } 
    } 
    if(breed == false){
        res.json({
            success: false,
            message: "Breed not found"
        })
    }
 }
getBreedApi(req.query.breeds);

    return
}

if (req.query.species == 'cat'){
    
    if(req.query.breeds =='Persian'||req.query.breeds =='Sphynx'||req.query.breeds =='Bengal'){
        price= price*0.9
         }
        
         // fifteen per cent increase for these areas 
        
         if (req.query.city == 'London'||req.query.city == 'Portsmouth'||req.query.city == 'Leeds'){
        price = price*1.15
         }
         if(req.query.age==1){
            price= price*1.05
        }
        if(req.query.age==2){
            price= price*1.10
        }
        if(req.query.age==3){
            price= price*1.15
        }
        if(req.query.age==4){
            price= price*1.20
        }
        if(req.query.age==5){
            price= price*1.25
        }
        if(req.query.age==6){
            price= price*1.35
        }
        if(req.query.age==7){
            price= price*1.45
        }
        if(req.query.age==8){
            price= price*1.55
        }
        if(req.query.age==9){
            price= price*1.65
        }
        
        if(req.query.age==10||req.query.age>10){
            price= price*1.75
        } 
        
        res.json({
                success: true,
                payload:{
                    species:req.query.species,
                    breeds:req.query.breeds, 
                    city:req.query.city,
                    cost:price
                } 
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