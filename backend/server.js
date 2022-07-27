const app = require('./app');
const dotenv = require('dotenv');
const connectDataBases = require('./config/database');


// port path
dotenv.config({path:'../backend/config/config.env'})
const PORT = process.env.PORT || 4000

app.listen(PORT,() => {
    connectDataBases()
    console.log(`server start ${PORT}`);
})