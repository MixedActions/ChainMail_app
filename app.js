//const Joi = require('joi');
const  express = require('express');
const app  = express();
 
app.use(express.json());
 
//Two main status updates for both the mailbox and phone application
const statusMain =
    [{
    "mailCompDoor": 0,
    "packageCompDoor": 0,
    "mailSense": 0,
    "packageSense": 0,
    "mailLock": 0,
    "packageLock": 0,
    "isDone":1,
    "Id":0
    },
    {
    "mailCompDoor": 0,
    "packageCompDoor": 0,
    "mailSense": 0,
    "packageSense": 0,
    "mailLock": 0,
    "packageLock": 0,
    "isDone":0,
    "Id":1
    }];
   
const statusApp =
   [{
    "mailOrPackage": 0,
    "unlockOrLock": 0,
    "both": 0,
    "ready": 0,
    "Id":0
    },
    {
    "mailOrPackage": 0,
    "unlockOrLock": 0,
    "both": 0,
    "ready": 0,
    "Id":1
    }];
 
// app.get('/', (req,res)=>{
//     res.send('Hello World!!!');
// });
 
app.get('/api/status/main', (req,res)=>{
    res.send(statusMain);
});
 
app.get('/api/status/app', (req,res)=>{
    res.send(statusApp);
});
 
app.get('/api/status/main/first', (req,res)=>{
    res.send(statusMain[0]);
});
 
app.get('/api/status/app/first', (req,res)=>{
    res.send(statusApp[0]);
});
 

app.put('/api/status/app/:Id', (req,res)=>{
    const app = statusApp.find(c=> c.Id === parseInt(req.params.Id));
    // const {unlockMail} = req.body.unlockMail;
    // const {unlockPackage} = req.body.unlockPackage;
    app.mailOrPackage = req.body.mailOrPackage;
    app.unlockOrLock = req.body.unlockOrLock;
    app.both = req.body.both;
    app.ready = req.body.ready;
 
    console.log('Updating...');
 
    res.json(app);
});
 
app.put('/api/status/main/:Id', (req,res)=>{
    const app = statusMain.find(c=> c.Id === parseInt(req.params.Id));
    // const {unlockMail} = req.body.unlockMail;
    // const {unlockPackage} = req.body.unlockPackage;
    app.mailCompDoor = req.body.mailCompDoor;
    app.packageCompDoor = req.body.packageCompDoor;
    app.mailSense = req.body.mailSense;
    app.packageSense = req.body.packageSense;
    app.mailLock = req.body.mailLock;
    app.packageLock = req.body.packageLock;
    app.isDone = req.body.isDone;
 
    console.log('Updating...');
 
    res.json(app);
});
 
app.post('/api/status/app', (req,res)=>{
    let newApp = {Id: req.body.Id,unlockMail: req.body.unlockMail, unlockPackage: req.body.unlockPackage};
 
    statusApp.push(newApp);
    res.json(newApp);
});
 
app.delete("/api/status/app", (req,res)=>{
 
});
 
// app.post('/api/status', (req,res)=>{
 

//     if(!req.body.name || req.body.length < 3){
//         res.status(400).send('Name is required and should be a minimum of 3 characters');
//         return;
//     }
 
//     const course = {
//         id: courses.length +1,
//         name: req.body.name
//     };
//     courses.push(course);
//     res.send(course);
// });
 
// app.get('/api/status/:id', (req,res)=>{
//     const course = courses.find(c => c.id === parseInt(req.params.id));
//     if(!course) res.status(404).send('The course with the given ID was not found');
//     res.send(course);
// });
 
const port = process.env.PORT;
app.listen(3000, ()=>{
    console.log(`Listening on port 3000...`);
});