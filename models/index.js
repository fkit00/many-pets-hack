import { query } from '../db/index.js'


export async function getRefByID(id){
    const res = await query(`SELECT * FROM pets WHERE ref= $1;`, [id]);
    const petsArray = res.rows;
    console.log(res.rows)
    return petsArray
}

export async function postPet(data) {
    console.log(data.breeds)
   async function getPrice(data){
        let price = 120
        if (data.species == 'dog'){
        // ten per cent discount on these three breeds 
        
         if(data.breeds =='Labrador'||data.breeds =='Chihuahua'||data.breeds =='Husky'){
        price= price*0.9
         }
        
         // fifteen per cent increase for these areas 
        
         if (data.city == 'London'||data.city == 'Portsmouth'||data.city== 'Leeds'){
        price = price*1.15
         }
         if(data.age==1){
            price= price*1.05
        }
        if(data.age==2){
            price= price*1.10
        }
        if(data.age==3){
            price= price*1.15
        }
        if(data.age==4){
            price= price*1.20
        }
        if(data.age==5){
            price= price*1.25
        }
        if(data.age==6){
            price= price*1.35
        }
        if(data.age==7){
            price= price*1.45
        }
        if(data.age==8){
            price= price*1.55
        }
        if(data.age==9){
            price= price*1.65
        }
        
        if(data.age==10||data.age>10){
            price= price*1.75
        } 
        
      
        
            return Math.ceil(price)
        }
        
        if (data.species == 'cat'){
        
            if(data.breeds =='Persian'||data.breeds =='Sphynx'||data.breeds =='Bengal'){
                price= price*0.9
                 }
                
                 // fifteen per cent increase for these areas 
                
                 if (data.city == 'London'||data.city == 'Portsmouth'||data.city == 'Leeds'){
                price = price*1.15
                 }
                 if(data.age==1){
                    price= price*1.05
                }
                if(data.age==2){
                    price= price*1.10
                }
                if(data.age==3){
                    price= price*1.15
                }
                if(data.age==4){
                    price= price*1.20
                }
                if(data.age==5){
                    price= price*1.25
                }
                if(data.age==6){
                    price= price*1.35
                }
                if(data.age==7){
                    price= price*1.45
                }
                if(data.age==8){
                    price= price*1.55
                }
                if(data.age==9){
                    price= price*1.65
                }
                
                if(data.age==10||data.age>10){
                    price= price*1.75
                } 
                
              
                
            return Math.ceil(price)
        }
        
        //it's an object in an array 
    // if the array lenght is more than one 
    // 
    
    
    
    }
    let cost= await getPrice(data)
    const res = await query(
        `INSERT INTO pets(species,breeds,city,age, cost, ref) VALUES ($1,$2, $3,$4,$5,$6) RETURNING *;`,
         [data.species, data.breeds, data.city, data.age, cost, data.ref]
         );
    console.log(`this is ${res}`)
    return res.rows;
  };

  export async function policies(){
    const res= await query(`SELECT COUNT(*)FROM pets`)
    return res.rows

}


