import mongoose from "mongoose";

//mongoose.connect("mongodb+srv://alura:123@alura.wpvlt.mongodb.net/alura-node");
mongoose.connect("mongodb+srv://alura:123@alura.wpvlt.mongodb.net/alura-node");


let db = mongoose.connection;

export default db;
