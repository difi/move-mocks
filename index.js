const mocks = require('./mocks');
const restMocks = require('./RestMocks');
const soap = require('soap');
const express = require('express');
const fetch = require('node-fetch');
const bodyParser = require('body-parser');
const xmlparser = require('express-xml-bodyparser');
var multer  = require('multer')
var upload = multer()
const formidable = require('express-formidable');
var getRawBody = require('raw-body')
process.env.PORT = process.env.PORT || 8001;
let app = express();
var contentType = require('content-type')
// app.use(function (req, res, next) {
//     getRawBody(req, {
//         length: req.headers['content-length'],
//         limit: '1mb',
//         encoding: contentType.parse(req).parameters.charset
//     }, function (err, string) {
//         if (err) return next(err)
//       // console.log(string);
//         req.text = string
//         next()
//     })
// })

app.use(bodyParser.raw({ type: 'application/soap+xml;' }))


app.use(function(req, res, next) {



    //var regexp = /^(text\/xml|application\/([\w!#\$%&\*`\-\.\^~]+\+)?xml)$/i;

    var contentType = req.headers['content-type'] || ''
        , mime = contentType.split(';')[0];
        // console.log(contentType);
        // console.log(mime);

    // if (mime != 'application/soap+xml') {
    //     return next();
    // }

    var data = '';
    req.setEncoding('utf8');
    req.on('data', function(chunk) {

        // console.log("NEW CHUNK");
        //
        // console.log(chunk);
        // console.log("END OF CHUNK");
        data += chunk;
    });
    req.on('end', function() {
        req.rawBody = data;
        next();
    });
});


let restString = restMocks.map((item) => item.routes)
    .reduce((accumulator, current) => accumulator.concat(current))
    .map((item) => `${item.method} http://localhost:${process.env.PORT}${item.path}`);

let soapString = mocks
    .map((item) => `http://localhost:${process.env.PORT}${item.pathName}?wsdl`);

app.get('/', (req, res) => {
    res.send(`
            <html style="font-family: Comic Sans MS;">
                <body>
                    <h1>MOVE Mocks<h1>
                        <h3>REST Mocks:<h3>
                            <ul> ${ restString.map((url) => `<li>${url}</li>`).join('') }</ul>
                        <h3>SOAP Mocks:<h3>
                            <ul> ${ soapString.map((url) => `<li><a href="${url}">${url}</a></li>`).join('') }</ul>
                </body>
            </html>
`)
});

// Set up REST mocks:
restMocks.forEach((mock) => {
    mock.routes
        .forEach((item) => {
            if (item.method === 'GET'){
                app.get(item.path, item.responseFunction)
            } else if (item.method === 'POST') {
                app.post(item.path, item.responseFunction)
            }
    });
});

// Set up SOAP mocks:

// Fetch the WSDLs:
Promise.all(mocks.map((mock) => fetch(mock.wsdlUrl) ))
    .then((res) => {
        // Map the WSDL to the mock:
        Promise.all(res.map((res) => res.text()))
            .then((wsdls) => {
                wsdls.forEach((wsdl, idx) => {
                    mocks[idx].wsdl = wsdl;
                });

                // Set up the listeners:
                app.listen(process.env.PORT, () => {
                    mocks.forEach((mock) => {
                        soap.listen(app, mock.pathName, mock.service, mock.wsdl);
                    })
                });
        });
});

console.log(`Mocks running on http://localhost:${process.env.PORT}`);
console.log('REST mocks: \n');
console.log(restString.join('\n'));
console.log("\n");
console.log('SOAP mocks: \n');
console.log(soapString.join('\n'));





