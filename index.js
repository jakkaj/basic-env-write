const express = require('express')
const app = express()

// Constants
const PORT = 8001;
const HOST = '0.0.0.0';

app.get('/', (req, res) => {
    var echo = process.env.ECHOENV;
    
    if(!echo){
        echo = "Please set the ECHOENV environment variable";
    }

    for(var item in process.env){
        if(item.indexOf('npm') != -1){
            continue;
        }
        res.setHeader(`header_${item}`, process.env[item]);
    }

    res.send(echo);
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);