const express = require('express');
const cors = require('cors'); // to allow React frontend to call API
const app = express();

app.use(cors()); // enable CORS

// Default route
app.get('/', (req, res) => {
    res.send('hi all this is test');
});

// ✅ GET user details
app.get('/api/users', (req, res) => {
    const users = [
        { id: 1, name: "Ramesh", email: "ramesh@test.com" },
        { id: 2, name: "Suresh", email: "suresh@test.com" },
        { id: 3, name: "Kumar", email: "kumar@test.com" }
    ];
    res.json(users);
});

const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});