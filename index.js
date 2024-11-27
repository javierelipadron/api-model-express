// index.js
const express = require("express");
const bodyParser = require("body-parser");
const itemRoutes = require("./routes/itemRoutes");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const connectDB = require("./db/db");

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Swagger configuration
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "Items API",
      version: "1.0.0",
      description: "API for managing items",
    },
    servers: [
      {
        url: "http://localhost:3000",
      },
    ],
  },
  apis: ["./routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Rutas
app.use("/items", itemRoutes);

// Conexión a la base de datos
connectDB();

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
