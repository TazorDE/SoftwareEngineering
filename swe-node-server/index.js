const express = require("express");
const app = express();
app.use(express.json());
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, PUT, OPTIONS"
    );
    next();
});

const fs = require('fs');

app.listen(3000, () => {
    console.log("Server running on port 3000");
});

//Products

//get all products
app.get('/api/v1/products', (req, res) => {
    let products = JSON.parse(fs.readFileSync('./database/products.json'));
    res.json(products);
});

//add new product - requires all product data w/o id
app.post('/api/v1/products', (req, res) => {
    let products = JSON.parse(fs.readFileSync('./database/products.json'));
    let highest_id = 0;
    products.forEach(element => {
        if (highest_id < element.id) {
            highest_id = element.id;
        }
    });

    let new_product = req.body;
    new_product.id = highest_id + 1;

    products.push(new_product);
    let data = JSON.stringify(products);
    fs.writeFileSync('database/products.json', data)

    res.sendStatus(200);
});

//update existing product - all product data + id
app.put('/api/v1/products', (req, res) => {
    let update_data = req.body;

    let products = JSON.parse(fs.readFileSync('./database/products.json'));
    let update_object;
    //find old item in array
    products.forEach(element => {
        if(element.id = update_data.id){
            update_object = element;
        }
    });
    //remove old item from array
    products = products.filter(item => item != update_object);

    //add new item to array
    products.push(update_data);

    let data = JSON.stringify(products);
    fs.writeFileSync('database/products.json', data)

    res.sendStatus(200)
});

//Suppliers

//get all suppliers
app.get('/api/v1/suppliers', (req, res) => {
    let suppliers = JSON.parse(fs.readFileSync('./database/suppliers.json'));
    res.json(suppliers);
});

//add new supplier - requires all supplier data w/o id
app.post('/api/v1/suppliers', (req, res) => {
    let suppliers = JSON.parse(fs.readFileSync('./database/suppliers.json'));
    let highest_id = 0;
    suppliers.forEach(element => {
        if (highest_id < element.id) {
            highest_id = element.id;
        }
    });

    let new_supplier = req.body;
    new_supplier.id = highest_id + 1;

    suppliers.push(new_supplier);
    let data = JSON.stringify(suppliers);
    fs.writeFileSync('database/suppliers.json', data)

    res.sendStatus(200);
});

//update existing supplier - all supplier data + id
app.put('/api/v1/suppliers', (req, res) => {
    let update_data = req.body;

    let suppliers = JSON.parse(fs.readFileSync('./database/suppliers.json'));
    let update_object;
    //find old item in array
    suppliers.forEach(element => {
        if(element.id = update_data.id){
            update_object = element;
        }
    });
    //remove old item from array
    suppliers = suppliers.filter(item => item != update_object);

    //add new item to array
    suppliers.push(update_data);

    let data = JSON.stringify(suppliers);
    fs.writeFileSync('database/suppliers.json', data)

    res.sendStatus(200)
});

//Producers

//get all producers
app.get('/api/v1/producers', (req, res) => {
    let producers = JSON.parse(fs.readFileSync('./database/producers.json'));
    res.json(producers);
});

//add new producer - requires all producer data w/o id
app.post('/api/v1/producers', (req, res) => {
    let producers = JSON.parse(fs.readFileSync('./database/producers.json'));
    let highest_id = 0;
    producers.forEach(element => {
        if (highest_id < element.id) {
            highest_id = element.id;
        }
    });

    let new_producer = req.body;
    new_producer.id = highest_id + 1;

    producers.push(new_producer);
    let data = JSON.stringify(producers);
    fs.writeFileSync('database/producers.json', data)

    res.sendStatus(200);
});

//update existing producer - all producer data + id
app.put('/api/v1/producers', (req, res) => {
    let update_data = req.body;

    let producers = JSON.parse(fs.readFileSync('./database/producers.json'));
    let update_object;
    //find old item in array
    producers.forEach(element => {
        if(element.id = update_data.id){
            update_object = element;
        }
    });
    //remove old item from array
    producers = producers.filter(item => item != update_object);

    //add new item to array
    producers.push(update_data);

    let data = JSON.stringify(producers);
    fs.writeFileSync('database/producers.json', data)

    res.sendStatus(200)
});
