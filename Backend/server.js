import app from './app.js'
import dotenv from 'dotenv';

dotenv.config();

app.get('/', (req, res) => {
    res.send("hello world")
})

app.listen(process.env.PORT, function () {
    console.log("Server is running on PORT", process.env.PORT);
})