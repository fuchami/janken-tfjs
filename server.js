let express = require("express");
let app = express()

app.use(express.static("./static"));

app.listen(process.env.PORT|| 8080, function(){
    console.log("serving ad 8080")
});