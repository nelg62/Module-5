const userRoutes = require("./routes/userRoutes");
const express = require("express");
// const app = express()
// const port = [3000, 3009, 3007]
// index.js - updated version
// import the app

const swaggerUi = require("swagger-ui-express");
swaggerDocument = require("../swagger.json");

const app = require("./app");
const port = 3000;

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

const testRoutes = require("./routes/myTestRoutes");
const calculatorRoutes = require("./routes/calculatorRoutes");

const { getApiData } = require("../src/Middleware/api");

const {
  getWebsiteData,
} = require("../src/controllers/ControllerFakeEcomWebsite");

// parse requests of content-type - application/json
app.use(express.json());

app.use("/users", userRoutes);

app.use("/", express.static("public"));

// map the calculator routes to our app
app.use("/calculator", calculatorRoutes);

app.get("/renderData", getWebsiteData);

app.get("/api", getApiData);

// port.forEach((item) => {

// app.get('/', (req, res) => {
// res.send('Hello World!')
// })
// app.use('/mytest', testRoutes);

// app.listen(item, () => {
// console.log(`Example app listening
// at http://localhost:${item}`)
// })
// })

// start the app to listen on the right port
app.listen(port, () => {
  console.log(`Example app listening at
    http://localhost:${port}`);
});
// node .\index.js
// npm run start     --created of the above
