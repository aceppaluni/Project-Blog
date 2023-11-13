// Creating Schema 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const blogSchema = new Schema({
    title: String,
    entry: String,
    
});
const Blog = mongoose.model('Blog', blogSchema)

// ROUTES // 
const express = require('express')
const router = express.Router();
const cors = require('cors')
const bodyParser = require('body-parser')

const app = express()

app.use(express.json())
app.use(cors())
app.use(bodyParser.json())
// const Blog = require() - from above

// For CRUD operations 
router.get('/', async (req, res) => {
    try {
        const blogs = await Blog.find();
        res.json(blogs)
    } catch (err) {
        console.error(err)
        res.status(500).json({ error: 'Server Error'})
    }
})

// CONNECT EXPRESS AND MONGODB
//const mongoose = require('mongoose')
mongoose.connect('mongodb://aceppaluni:QmmITdwWGXAI7U8B@ac-g5pzhzc-shard-00-00.csqifsm.mongodb.net:27017,ac-g5pzhzc-shard-00-01.csqifsm.mongodb.net:27017,ac-g5pzhzc-shard-00-02.csqifsm.mongodb.net:27017/?replicaSet=atlas-oqireh-shard-0&ssl=true&authSource=admin', {})

const port = 3000

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});