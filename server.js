var express = require('express');
var path = require('path');
var app = express();
var PORT = process.env.PORT || 3000;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const tables=[

];
const waitList=[

];

const IDs=[];




app.get("/tables", (req, res) => {
    res.end("tables");
});

app.get("/reservations", (req, res) => {
    res.end("reservations");
});

app.get("/api/tables", (req, res) => {
    res.json(tables);
});

app.get("/api/wait", (req, res) => {
    res.json(waitList);
});

app.get("/clearTables",(req,res)=>{
tables.length=0;
waitList.length=0;
IDs.length=0;
console.log("cleared");
res.end("tables cleared");
});

app.get("/*", (req, res) => {
    res.end("default");
});


app.listen(PORT, () => {
    console.log(`Listening on port:${PORT}`);
});

app.post("/reservations",(req,res)=>{
    let newTable = req.body;

    if(IDs.includes(newTable.id)){
        res.end("duplicate ID");
    }
    else{

        addTable(newTable);
        IDs.push(newTable.id);
        console.log(newTable);
    
        res.end("table created");
    }

});





function addTable(newTable){
    if(tables.length <5){
        tables.push(newTable);
    }
    else{
        waitList.push(newTable);
    }
}