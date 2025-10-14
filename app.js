const express = require('express');
const os = require('os');
const app = express();
const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send(`<h1>hello from ${process.env.HOSTNAME || os.hostname()}</h1>
    <p>Deployed by GitHub Actions to Proxmox via SSH.</p>`);
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
