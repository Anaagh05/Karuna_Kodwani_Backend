const app = require("./app");
require("dotenv").config({
  path: "./.env",
});

const PORT = process.env.PORT || 3030;

app.listen(PORT,()=>{
    console.log(`Server starts serving on port http://localhost:${PORT}`)
})
