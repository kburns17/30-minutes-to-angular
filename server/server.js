let express = require('express');
let app = express();
let bodyParser = require('body-parser');

const PORT = 5000;

app.use(express.static('server/public'));


app.listen(PORT, () =>{
    console.log('server is running on PORT', PORT);
});