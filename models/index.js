import { query } from '../db/index.js'


export async function getRefByID(id){
    const res = await query(`SELECT * FROM pets WHERE ref= $1;`, [id]);
    const petsArray = res.rows;
    return petsArray
}

export async function postPet(species, breeds, city, age, ref) {
    const data = await query(`INSERT INTO pets (species, breeds, city, age, ref) VALUES ($1, $2, $3, $4, $5) RETURNING *;`, [species, breeds, city, age, ref]);
    return data.rows;
  };

function getPrice(){
    let price = 120
    if (req.query.species == 'dog'){
    // ten per cent discount on these three breeds 
    
     if(req.query.breeds =='Labrador'||req.query.breeds =='Chihuahua'||req.query.breeds =='Husky'){
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
    




}

 
 