var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());




app.get("/tables", (req, res) => {
    res.end("tables");
});

app.get("/reservations", (req, res) => {
    res.end("reservations");
});

app.get("/api/tables", (req, res) => {
    res.end("api tables");
});

app.get("/api/wait", (req, res) => {
    res.end("api wait");
});

app.get("/*", (req, res) => {
    res.end("default");
});


app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});