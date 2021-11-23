// Import dotenv
import dotenv  from "dotenv"
// Import express
import express from "express";
// Import cors
import cors from "cors";
// Import connection
import db from "./config/database.js";
// Import clientRouter
import clientRouter from "./routes/client.routes.js";
// Import adminRouter
import adminRouter from "./routes/admin.routes.js";

dotenv.config()

// Init express
const app = express();
// use express json
app.use(express.json());
//options for cors
const options = {
    dotfiles: 'ignore',
    etag: false,
    extensions: ['htm', 'html'],
    index: false,
    maxAge: '1d',
    redirect: false,
    setHeaders: function (res, path, stat) {
        res.set('Access-Control-Expose-Headers', 'X-Total-Count')
    }
}   
  
app.use(express.static('public', options))
// use cors
app.use(cors({
    origin: '*'
}));

const PORT = process.env.PORT

// Testing database connection 
try {
    await db.authenticate();
    console.log('Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', error);
}
 
// use router
app.use(clientRouter);
app.use('/admin', adminRouter);
 
// listen on port
app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));