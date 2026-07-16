const { createServer } = require("https");
const next = require("next");

const app = next({ dev: false });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  createServer((req, res) => {
    //HSTS header
    res.setHeader(
      "Strict-Transport-Security",
      "max-age=315360000;includeSubDomains"
    );
    handle(req, res);
  }).listen(3000, () => {
    console.log("Server running on port 3000");
  });
});