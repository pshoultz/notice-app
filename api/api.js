const express = require('express')
const app = express()
const cors = require('cors');
const port = 3000

app.use(cors({
    origin: '*'
}));

app.get('/', (req, res) => {
    res.send({"message": "beep"}).status(200);
})

app.post('/qr', (req, res) => {

});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
