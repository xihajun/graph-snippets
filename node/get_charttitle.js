var http = require("https");

var options = {
  "method": "GET",
  "hostname": "graph.microsoft.com",
  "port": null,
  "path": "/v1.0/me/drive/items/%7Bid%7D/workbook/worksheets(%3Cid%7Cname%3E)/charts(%3Cname%3E)/title",
  "headers": {}
};

var req = http.request(options, function (res) {
  var chunks = [];

  res.on("data", function (chunk) {
    chunks.push(chunk);
  });

  res.on("end", function () {
    var body = Buffer.concat(chunks);
    console.log(body.toString());
  });
});

req.end();
