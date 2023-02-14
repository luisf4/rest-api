
// Set the express to the variable app
const app = require('express')();

// Set the port
const PORT = 8080;

app.listen(
    PORT,
    () => console.log('ON on port {http://localhost:8080}')
)



app.get('/tshirt', (req, res) =>{
    res.status(200).send({
        tshirt : "Red",
        size: "large"
    })
});

