import express from "express";
import conecta from "./config/dbConnect.js";
import routes from "./routes/index.js";

const conn = await conecta();

conn.on("error", (erro) => {
    console.error("deu merda", erro);
});

conn.once("open", () => {
    console.log("deu bom");    
});

const app = express();
routes(app);

export default app;
