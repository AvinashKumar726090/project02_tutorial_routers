const color = require('colors');
const express = require('express');
const adminRoutes = require('./routes/admin.js');
const shopRoutes = require('./routes/shop.js');
const app = express();

// Middleware to parse URL-encoded bodies
app.use(express.urlencoded({ extended: false }));


app.use(adminRoutes);
app.use(shopRoutes);
app.use((req,res,next)=>{
    res.status(404).send('<h1>Page not Found!</h1>')
})

app.listen(3001, () => {
    console.log('Server is running on port 3000');
});
