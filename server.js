let express = require("express");
let cors = require('cors');
let app = express();
let fs = require('fs');
let expressip = require('express-ip');
app.use(expressip().getIpInfoMiddleware);
app.use(cors());

app.get("/", (req, res) => {
    fs.readFile('index.html', 'utf-8', (err, data) => {
        if (err) throw err;
        data = data.replace('ipnr', req.headers['x-forwarded-for'] || req.ipInfo).replace('portnr', req.connection.remotePort);
        res.send(data);
    })
});

app.listen(8080, '0.0.0.0');