import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import postsRoutes from './posts/routes/posts.routes.js';

const app = express();

app.use(express.json());
dotenv.config();

app.use('/posts',postsRoutes);

const CONNECTION_URL = process.env.MONGODB_URI;
const PORT = process.env.PORT;
const opts = {
    useNewUrlParser:true,
    useUnifiedTopology:true,
    useFindAndModify:false,
};

mongoose.connect(CONNECTION_URL,opts)
    .then(() => {
        app.listen(PORT,() => console.log(`Server running on port : ${PORT}`));
        console.log('Connected to MongoDB Database!');
    })
    .catch((error)=>console.log(error.message));