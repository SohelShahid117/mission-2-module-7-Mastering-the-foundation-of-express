//7-5 Stream and buffer, create your own server
const http = require("http");
// console.log(http)
const server = http.createServer();
// console.log(server)

const fs = require("fs");
const { buffer } = require("stream/consumers");

server.on("request", (req, res) => {
  // console.log(req)
  console.log("at req.url : ", req.url, " & req.method is : ", req.method);
  if (req.url === "read-file" && req.method === "GET");

//   let readableStream = fs.createReadStream("./text/read.txt");
//   let readableStream = fs.createReadStream(__dirname+ "./text/read.txt");
  let readableStream = fs.createReadStream(process.cwd()+ "/text/read.txt");
//   console.log(readableStream);
// res.end("hello world.u r a backend developer");

  readableStream.on("data",(buffer)=>{
    // console.log(data)
    res.write(buffer)
  })
  readableStream.on("end",()=>{
    res.end("hello world.u r a backend developer");
  })

//   res.end("hello world.u r a backend developer");
});

const port = 5000;
server.listen(port, () => {
  console.log(`my server is running at http://localhost:${port}`);
});
