import http from "http";
import app from "./app";
const server = http.createServer(app);


const PORT = process.env.PORT || 8080;

server.listen(PORT, () => {
  console.log(` === SERVER IS RUNNING ON PORT [${PORT}] === `);
});
