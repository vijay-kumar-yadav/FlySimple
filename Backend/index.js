const express = require('express');
const db = require('./config/dbConfig')
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.urlencoded());
app.use(express.json())

app.use('/api', require('./routes/index'));

app.listen(PORT, (e) => {
    if (e) { console.log("error in starting DB"); return; }

    console.log(`Server started at port ${PORT}`);

})