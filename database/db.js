import mongoose from "mongoose";

export async  function DbConnection(){

    
try {
    
await mongoose.connect(process.env.MONG0DB_URI)
console.log('Database connected succesfully');

} catch (error) {
    
console.error('Error while connecting database',error.message);

}

}


