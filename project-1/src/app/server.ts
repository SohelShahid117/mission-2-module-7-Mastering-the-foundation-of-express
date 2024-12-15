//7-6 Installing express with typescript
import { Server } from "http";
import app from "./app";
const port = 3000;

let server: Server;

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`);
// });

async function bootstrap() {
  server = app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}
bootstrap()
