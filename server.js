import express from 'express';
import path from 'path';


const app = express();

app.use(express.json());

// ANOTHER WAY TO SEND STATIC ASSETS TO THE CLIENT:
// app.use(express.static(path.resolve() + '/public'));


// UNDER SUB_FOLDER -> "request_properties"
// localhost:3000/request_properties123?new=vals&name=jack

// Without :id, it throws an error - cannot get, if a URL parameter is passed

app.get('/request_properties:id', (req, res) => {

    //1. localhost:3000/?name=stu&age='infinite'
    console.log(req.query);

    //2. app.get('/:id', (req, res) => {
    // localhost:3000/123
    console.log(req.params)

    //3. Using body-parser, now integrated in express to parse the body content
    console.log(req.body)

    //4. contains data about the user-agent, cache control, ip, etc.
    console.log(req.headers)

    const res_data = {
        "name": "xyz",
        "age": "infinite"
    }

    res.send(res_data);
});


app.get('/request_properties', (req, res) => {

    console.log(req.query);
    console.log(req.params)
    console.log(req.body)
    console.log(req.headers)

    const res_data = {
        "name": "xyz",
        "age": "infinite"
    }

    res.send(res_data);
});


app.get('/404', (req, res) => {
    res.status(404).send('Request not found');
});

// Static Assets:
// Public files

app.get('/', (req,res) => {
    res.send(path.resolve() + '/public')
})

app.listen(3000);