import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://shubhamupadhyay365:z1iIqsJmObQyqekm@cluster0.e6pml.mongodb.net/food-del').then(()=>console.log("DB Connected"));
}