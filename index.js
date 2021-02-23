const express = require('express');
const path = require('path');
const appRoot = require('app-root-path');

const app = express()
const port = 8000
app.use(express.static(path.join(appRoot.path, 'frontend')));
app.get('*', (req, res) => {
    res.sendFile(path.join(appRoot.path, 'frontend/index.html'));
});
// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})