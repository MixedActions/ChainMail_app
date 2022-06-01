const http = require('http');
const fs = require('fs');
const port = 1000;
const num1 = 0;

const server = http.createServer(function (req, res) {
    res.write('Hello Node')
    res.end()

    console.log('start.')


})

server.listen(port, function (error) {
    if (error) {
        console.log('Something went wrong', error)
    } else {
        console.log('Server is listening on port ' + port)
    }
})