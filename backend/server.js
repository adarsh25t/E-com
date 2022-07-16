const app = require('./app');
const dotenv = require('dotenv');

// port path
dotenv.config({path:'../backend/config/config.env'})
const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    console.log(`server start ${PORT}`);
})