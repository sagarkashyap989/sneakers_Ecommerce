const express = require('express');
const connectDB = require('./config/db')
const cors = require('cors')
const app = express()
 
app.use(cors())



connectDB();



//middleware init

app.use(express.json({extended: false}));


app.get('/', (req,res) => res.send('API Running.....'));

//define routes

app.use("/api/user", require('./routes/api/users'))
app.use("/api/auth", require('./routes/api/auth'))
app.use('/api/profile', require('./routes/api/profile'))
app.use('/api/product', require('./routes/api/product'))
app.use('/api/cart', require('./routes/api/cart'))




const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server started on port ${PORT}`))