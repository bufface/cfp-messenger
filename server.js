var express = require("express")
var http = require("http")
var path = require("path")

var server = express()

server.use(express.static(path.join(__dirname, "")))

server.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

server.get("/rooms/:id", (req, res) => {
  res.sendFile(__dirname + "/room.html")
})

http.createServer(server).listen(8080, () => {
  console.log("Server listen on port 8080")
})