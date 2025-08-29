const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('hi all this is test')
    return;
})
app.listen(8080, () => {
    console.log('server started on port 8080')

})