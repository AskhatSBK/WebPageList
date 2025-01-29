const express=require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

//middleware
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static('public'));

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//MongoDB connection
mongoose.connect('mongodb://127.0.0.1:27017/assigment3',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(()=>{
    console.log('Connected to MongoDB');
}).catch((err)=>{
    console.error('Error connecting to MongoDB:',err);
});


const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    gender: Boolean,
});

const User = mongoose.model('User',userSchema);
// Create user
app.get('/add',async(req,res)=> {
    res.render('add');
});
// Return to main page after creating new user
app.post('/users',async(req,res)=> {
    try {
        const {name,age,gender}=req.body;
        const newUser = new User({name,gender,age})
        await newUser.save();
        res.redirect('/')
    } catch(err){
        res.status(500).send('Error creating user')
    }
});
//First render page for display all data
app.get('/',async(req,res)=> {
    try{
        const users = await User.find();
        res.render('index',{users});
    } catch(err){
        res.status(500).send('Error fetching users')
    }
});

app.get('/edit/:id', async (req, res) => {
    const user = await User.findById(req.params.id);
    res.render('edit', { user });
});

// Update user parameters (need to correct)
app.post('/edit/:id',async(req,res)=>{
        try{
            const {id} = req.params;
            const {name,gender,age} = req.body;
            await User.findByIdAndUpdate(id, {name,gender,age});
            console.log(`User ${id} updated successfully`);
            res.redirect('/');
        } catch(err){
            res.status(500).send('Error deleting user')
        }
});
// Delete user by resending it on deleting page and auto update general page (didnt finish)
app.post('/delete/:id',async(req,res)=>{
    try{
        const {id} = req.params;
        await User.findByIdAndDelete(id)
        console.log(`User ${id} delete successfully`);
        res.redirect('/');
    }catch(err){
        res.status(500).send('Error deleting user')
    }
});

//initialize port and short messege
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`http://localhost:${PORT}`);
});