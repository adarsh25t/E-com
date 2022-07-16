const Mongoose = require('mongoose');

const connectDataBases = () => {
   Mongoose.connect(process.env.DB_URL)
   .then(() => {
        console.log("Databases Connection Successfully");
   }).catch((error) => {
        console.log(error);
   })
}
module.exports = connectDataBases;



// 3LxxkzX8BcYJ3BYr
//e_com_admin