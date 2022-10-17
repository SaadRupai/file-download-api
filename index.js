let express = require('express');
let bodyParser = require('body-parser');
const { dirname } = require('path');

app = express();
const folderName = __dirname + '/files';

app.get('/download', (req, res) => {
    try {
        res.download(folderName + '/download.png', (err) => {
            if (err) {
                res.end("error: " + err);
            }
        })
    }
    catch (error) {
        res.end("couldn't connect");
    }
})

app.listen(8000, () => {
    console.log("server connection successful!");
});