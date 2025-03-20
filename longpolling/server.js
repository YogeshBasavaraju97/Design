const express = require('express');

const app = express();
let data = "initial data";
const updatedData = "updated data";
const waitingClintList = [];


app.get("/", (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.get("/getData", (req, res) => {
  if (data !== req.query.lastData) {
    res.json({ data });
  } else {
    waitingClintList.push(res);
  }

});
app.get('/updatedData', (req, res) => {
  data = req.query.data;
  while (waitingClintList.length > 0) {
    const clint = waitingClintList.pop();
    clint.send({ data });
  }
  res.send("success");
}
);


const port = process.env.PORT || 5555;
app.listen(port, () => { console.log(`server is running on ${port}`); });