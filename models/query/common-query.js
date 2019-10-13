var express = require('express');
var router = express.Router();
var pg = require('pg');

var connectionString = 'postgres://' + 'buser' + ':' + 'bugger30' + '@localhost/bulletin';
var client = new pg.Client(connectionString);
client.connect();


pg.query(..., function(err, result) {
    //NOTE: error handling not present
    var json = JSON.stringify(result.rows);
    res.writeHead(200, {'content-type':'application/json', 'content-length':Buffer.byteLength(json)});
    res.end(json);
  });