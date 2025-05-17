const express = require('express')
const app = express()
const port = 3000
require('dotenv').config(); 
const cors = require('cors');
app.use(cors());

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri =  `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.zignzkk.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});
async function run() {
  try {
  
    await client.connect();
   
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
     const db = client.db("Ecomarce"); // your database
    const collection = db.collection("products_by_category"); // your collection
    const category=db.collection("product_category");
    // API route to fetch all products by category
    app.get('/products', async (req, res) => {
      try {
        const products = await collection.find().toArray();
        res.json(products);
      } catch (err) {
        console.error("Error fetching data:", err);
        res.status(500).send("Internal Server Error");
      }
    });
    app.get('/category',async(req,res)=>{
      try{
        const pcategory=await category.find().toArray();
        res.json(pcategory);
      }catch(err){
        console.error("Error fetching data:", err);
        res.status(500).send("Internal Server Error");
      }
    })
  } finally {
    
    // await client.close();
  }
}
run().catch(console.dir);
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
