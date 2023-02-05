
const express = require('express')
const axios = require("axios")
const path = require("path")
const app = express()
const port = 3000

app.get('/', (req, res) => {
    console.log(path.join(__dirname, 'public'))
    return res.sendFile('public/index.html', { root: __dirname });
})


app.get('/searchword', (req, res) => {
    // res.send('Hello World!')
    console.log(req.query)

    var options = {
        method: 'GET',
        url: 'https://dictionary-by-api-ninjas.p.rapidapi.com/v1/dictionary',
        params: { word: req.query.word },
        headers: {
            'X-RapidAPI-Key': '661fb95808mshb4ebf73592fe6cep17af9bjsn21b82b1d072f',
            'X-RapidAPI-Host': 'dictionary-by-api-ninjas.p.rapidapi.com'
        }
    };
    
    axios.request(options).then(function (response) {
      res.json(response.data)
    }).catch(function (error) {
      console.error(error);
    });
    
    /*let response = {}
    response.data =
    {
        "definition": "1. A body of law, sanctioned by legislation, in which the rules of law to be specifically applied by the courts are set forth in systematic form; a compilation of laws by public authority; a digest. Note: The collection of laws made by the order of Justinian is sometimes called, by way of eminence. \"The Code\" Wharton. 2. Any system of rules or regulations relating to one subject; as, the medical code, a system of rules for the regulation of the professional conduct of physicians; the naval code, a system of rules for making communications at sea means of signals. Code civil or Code Napoleon, a code enacted in France in 1803 and 1804, embodying the law of rights of persons and of property generally. Abbot.",
        "word": "code",
        "valid": true
      }*/
    

})


app.listen(port, () => {
    console.log(`Example app listening on port ${port} - http://localhost:3000`)
})