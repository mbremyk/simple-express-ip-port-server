let express = require("express");
let cors = require('cors');
let app = express();
let fs = require('fs');
app.use(cors());

app.get("/", (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) throw err;
        data = data.replace('ipnr', req.ip).replace('portnr', req.connection.remotePort);
        res.send(data);
    })
});

app.listen(8080);