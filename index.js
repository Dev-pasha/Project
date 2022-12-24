const app = require('./app');
// const mongoose = require('mongoose');
const db = require('./backend/config/database');






db.connectDatabase();
const port = process.env.PORT;
app.listen(port, () => {
  console.log(`\nServer is up on port ${port}`);
});

//  mongoose.connect('mongodb+srv://abdullah321:socialHub9900@cluster0.vkas4hv.mongodb.net/?retryWrites=true&w=majority', ).then(con => {
//   console.log(`MongoDB Database connected with HOST: ${con.connection.host}`);
// }
// ).catch(err => {
//   console.log(err);
// }
// );