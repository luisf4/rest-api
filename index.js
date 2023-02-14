
// Set the express to the variable app
const app = require('express')();

// Set the port
const PORT = 8080;

// Starts the server
app.listen(
    PORT,
    () => console.log('ON on port {http://localhost:8080}')
)


// GET 
app.get('/tshirt', (req, res) =>{
    res.status(200).send({
        tshirt : "Red",
        size: "large"
    })
});

// POST
app.post('/tshirt/:id',(req, res) => {

    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({message: "We need a logo!"})
    }

    res.send({
        tshirt: "Your ${logo} and ID of ${id}",
    });
});