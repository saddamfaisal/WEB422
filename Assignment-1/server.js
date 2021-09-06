/*********************************************************************************
* WEB422 – Assignment 1
* I declare that this assignment is my own work in accordance with Seneca Academic Policy.
* No part of this assignment has been copied manually or electronically from any other source
* (including web sites) or distributed to other students.
*
* Name:Saddam Faisal   Student ID: 118406198 Date: 21/01/2021
* Heroku Link: https://git.heroku.com/secure-stream-28572.git
*
********************************************************************************/
var express =  require ('express');
var RestaurantDB = require('./modules/restaurantDB.js')
var password = process.env.PASSWORD
const db = new RestaurantDB("mongodb+srv://saddam:"+password+"@cluster0.gyvfh.mongodb.net/sample_restaurants?retryWrites=true&w=majority");
const HTTP_PORT = process.env.PORT || 8080;

var app = express();
const cors = require('cors');
const bodyParser = require("body-parser");
////setting the cors 

app.use(cors());
app.use(bodyParser.json());

app.post('/api/restaurants',(req,res)=>{
    db.addNewRestaurant(req.body).then((msg)=>{
        res.status(201).json({message:msg});
    }).catch((err)=>{
        res.status(500).json({message:err});
    })
})
app.get('/api/restaurants/',(req,res)=>{
    const page  = req.query.page;
    const perPage = req.query.perPage;
    const borough = req.query.borough;
    db.getAllRestaurants(page, perPage, borough).then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{
        res.status(500).json({message:err.message});
    });
})
app.get('/api/restaurants/:id',(req,res)=>{
    db.getRestaurantById(req.params.id).then((data)=>{
        res.status(200).json(data);
    }).catch((err)=>{res.status(500).json(err)});
})
app.put('/api/restaurants/:id',(req,res)=>{
    db.updateRestaurantById(req.body,req.params.id).then((msg)=>{
        res.status(201).json({message:msg});
    }).catch((err)=>{res.status(500).json({message:err})});
})
app.delete('/api/restaurants/:id',(req,res)=>{
    db.deleteRestaurantById(req.params.id).then((msg)=>{
        res.status(204).json({message:msg});
    }).catch((err)=>{res.status(500).json({message:err})});
})
db.initialize().then(()=>{
    app.listen(HTTP_PORT, ()=>{
    console.log(`server listening on: ${HTTP_PORT}`);
    });
    }).catch((err)=>{
    console.log(err);
    });