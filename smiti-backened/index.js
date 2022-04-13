
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const registration = require('./src/models/RegistrationData');
const therapist = require('./src/models/TherapistModel');
const parent = require('./src/models/ParentModel');
const Questionaire = require('./src/models/Questionaire');
const UserInfo = require('./src/models/RegistrationData1');
//searching db

//object init
const app = express();
const jwt = require('jsonwebtoken');
const bcrpt = require('bcrypt');
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(express.static('./public'));
app.use(function (req, res, next) {
    res.locals.session = req.session;
    next();
});

//register routing

app.post("/api/signup", async (req, res) => {
    console.log(req.body);
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)
    try {
        registration.find({ email: req.body.email }, (err, data) => {
            if (data.length == 0) {
                console.log("inside");
                let user = new UserInfo({
                    user: req.body.name,
                    email: req.body.email,
                    usertype: req.body.usertype,
                    address: req.body.address,
                    phone: req.body.phone,
                    password: bcrpt.hashSync(req.body.password, 10)
                })
                console.log(user);
                registration.create(user, (err, data) => {
                    if (err) {
                        console.log(err);

                    }
                    else {
                        console.log("Inserted");
                        //giving response to front end

                        res.json({ success: true, user_id: data._id })
                    }
                })


            }
            else {
                console.log("user exist");
                res.json({ status: 'email id already exists' })
            }
        })
    }
    catch (error) {
        res.json({ status: 'error' })

    }
})
app.post('/api/therapist-signup', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    console.log(req.body);

    let formValues = req.body.formValues;
    let u_id = req.body.user_id


    let obj = {
        user_id: u_id,
        qualification: formValues.qualification,
        specilization: formValues.specialization,
        experience: " ",
        certificate: " ",
        Recommendationletter: " ",
        approved: false
    }
    console.log(obj);

    // experience: req.body.experience,
    // certificate: req.body.certificate,
    // Recommendationletter: req.body.Recommendationletter
    therapist.create(obj, (err, data) => {
        if (data) {

            console.log("inserted");
        }
        else {
            console.log(err);
        }
    })
}
)

// speechquiz
app.post('/api/Speechquiz', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    console.log(req.body);

    let formValues = req.body.formValues;
    let u_id = req.body.user_id
    let obj = {
        user_id: u_id,
        q1: formValues.q1,
        q2: formValues.q2,
        q3: formValues.q3,
        q4: formValues.q4,
        q5: formValues.q5,
        q6: formValues.q6,
        approved: false
    }
    console.log(obj);
    speechquiz.create(obj, (err, data) => {
        if (data) {

            console.log("inserted");
        }
        else {
            console.log(err);
        }
    })
}
)


//physicalquiz
app.post('/api/Physicalquiz', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    console.log(req.body);

    let formValues = req.body.formValues;
    let u_id = req.body.user_id


    let obj = {
        user_id: u_id,
        q1: formValues.q1,
        q2: formValues.q2,
        q3: formValues.q3,
        q4: formValues.q4,
        approved: false
    }
    console.log(obj);
    physicalquiz.create(obj, (err, data) => {
        if (data) {

            console.log("inserted");
        }
        else {
            console.log(err);
        }
    })
}
)

// Behaviouralquiz
app.post('/api/Behaviouralquiz', async (req, res) => {

    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    console.log(req.body);

    let formValues = req.body.formValues;
    let u_id = req.body.user_id


    let obj = {
        user_id: u_id,
        q1: formValues.q1,
        q2: formValues.q2,
        q3: formValues.q3,
        q4: formValues.q4,
        q5: formValues.q5,
        q6: formValues.q6,
        approved: false
    }
    console.log(obj);
    behaviouralquiz.create(obj, (err, data) => {
        if (data) {

            console.log("inserted");
        }
        else {
            console.log(err);
        }
    })
}
)
// Basic Approval Pending Trainers List Fetch Route
app.get('/api/pending', (req, res) => {
    const filter = { approved: false };
    therapist.find(filter)
        .then(function (users) {
            if(users){
                res.json(users)
            }
            else{
res.json({users:[]})
            }
        });

});
// Approval pending trainer indivual details
app.get('/api/pending/:user_id', (req, res) => {
    const _id = mongoose.Types.ObjectId(req.params._id);
    therapist.findOne({ user_id: _id })
        .then(function (user) {
            if(user){
                res.json(user)
            }
            else{
res.json({user:[]})
            }
           
        });

});

// Trainer approval
app.post('/api/pending/:user_id/approve', (req, res) => {
    const usertype = req.body.usertype;
    const id = req.body.id;
    const name = req.body.name;
    const email = req.body.email;
    const _id = req.params._id;


    let from = `SMITI <mainproject73group@gmail.com>`
    console.log(id);
    let body = {
        from: from,
        to: `${email}`,
        subject: 'Approval',
        html: `<p>Dear <b>${name}</b>,<br> </br> <br> </br> We acknowledge the reciept of your T
    
        Application. <br> </br> We are happy to inform you that your application has been <b>APPROVED</b>.<br> </br>  <br> </br> Please note the below details:<br> </br> <br><b> ID:${id}<br> </br> Type of Employment:<span style="text-transform:uppercase"> ${type} </span></b><br> </br><br> </br><i> Wishing all the best. </i><br> </br> <br> </br>Thanks and Regards,<br> </br> <b>SMITI Autism center</b></p><br>`,
    }

    const transporter = mailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
        }
    })

    // verify connection configuration
    transporter.verify(function (error, success) {
        if (error) {
            console.log(error);
        } else {
            console.log("Server is ready to take our messages");
        }
    });

    transporter.sendMail(body, (err, result) => {
        if (err) {
            console.log(err);
            return false
        }
        console.log(result);
        console.log("email sent");
    })

    if (usertype === "Therapist") {
        const filter = { user_id: req.body._id };
        therapist.findOneAndUpdate(filter, { type: type, approved: 'true' }, { new: true })
            .then(function (users) {
                res.json(users)

            })
    }
    else {
        const filter = { user_id:req.body_id };
        parent.findOneAndUpdate(filter, { type: type, approved: 'true' }, { new: true })
            .then(function (users) {
                res.json(users)

            })
    }





    //     if{
    //         const filter = { _id: _id };
    // parent.findOneAndUpdate(filter, {type:type, approved:'true'}, { new: true })
    //     .then(function(users){
    //         res.json(users)

    //     }
    //     const filter = { _id: _id };
    // therapist.findOneAndUpdate(filter, {type:type, approved:'true'}, { new: true })
    //     .then(function(users){
    //         res.json(users)
    //     });



});
{/*
// Basic Approval Pending Trainers List Fetch Route
app.get('/api/pending', (req, res) => {
    const filter = { approved: false };
    Parent.find(filter)
    .then(function(users){
        res.json(users)
    });
    
});
// Approval pending trainer indivual details
app.get('/api/pending/:_id', (req, res) => {
    const _id = req.params._id;
    Parent.findOne({_id: _id})
    .then(function(users){
        res.json(users)
    });
    
});

// Trainer approval
app.post('/api/pending/:_id/approve', (req, res) => {
    const type = req.body.type;
    const id = req.body.id;
    const name=req.body.name;
    const email=req.body.email;
    const _id = req.params._id;
    let from = `SMITI <mainproject73group@gmail.com>`
    console.log(id);
    let body ={
        from: from,
        to: `${email}`,
        subject: 'Parent Approval',
        html: `<p>Dear <b>${name}</b>,<br> </br> <br> </br> We acknowledge the reciept of your Therapists Application. <br> </br> We are happy to inform you that your application has been <b>APPROVED</b>.<br> </br>  <br> </br> Please note the below details:<br> </br> <br><b> ID:${id}<br> </br> Type of Employment:<span style="text-transform:uppercase"> ${type} </span></b><br> </br><br> </br><i> Wishing all the best. </i><br> </br> <br> </br>Thanks and Regards,<br> </br> <b>SMITI Autism center</b></p><br>`,
    }
    
    const transporter =   mailer.createTransport({
        service: 'gmail',
        auth:{
            user: process.env.EMAIL_USER,
            pass : process.env.EMAIL_PASS
        }
    })
    
    // verify connection configuration
    transporter.verify(function(error, success) {
      if (error) {
        console.log(error);
      } else {
        console.log("Server is ready to take our messages");
      }
    });
    
    transporter.sendMail(body,(err, result) =>{
        if (err) {
            console.log(err);
            return false
        }
        console.log(result);
        console.log("email sent");
    })

    
    const filter = { _id: _id };
    Parent.findOneAndUpdate(filter, {type:type, approved:'true'}, { new: true })
    .then(function(users){
        res.json(users)
    });
    
}); */}



app.post('/api/parent-signup', async (req, res) => {
    console.log(req.body);


    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET', 'POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type')
    res.setHeader('Access-Control-Allow-Credentials', true)

    console.log(req.body);

    let obj1 = req.body;
    //let user = new UserInfo({
    //     user_id:req.body.user_id,
    // father:req.body.father,
    //mother:req.body.mother,
    //guardian: req.body.guardian,
    //attendedschool: req.body.attendedschool,

    parent.create(obj1, (err, data) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("Inserted");
        }
    })


})
app.post('/api/login', async (req, res) => {

    try {
        if (req.body.email == undefined || req.body.password == undefined || req.body.utype == undefined) {
            res.status(500).send({ error: "authentication failed" });
        }
        console.log(req.body)
        var userEmail = req.body.email
        var userPass = req.body.password
        var usertype = req.body.usertype
        //for approve check
        let result = registration.find({ email: userEmail }, (err, data) => {
            if (data.length > 0) {
                try {
                    const passwordValidator = bcrpt.compareSync(userPass, data[0].password)
                    console.log(passwordValidator)
                    if (passwordValidator) {
                        // token generation
                        jwt.sign({ email: data[0].email, id: data[0]._id },
                            'godblessu',
                            { expiresIn: '1d' },
                            (err, token) => {
                                if (err) {
                                    res.status(201).send({ status: 'error in token generation' })
                                }
                                else {
                                    let pwCheckFlag = false;
                                    if (usertype == "Therapists") {
                                        let approve = TherapistsInfo.find({ email: userEmail }, (err, data1) => {
                                            if (data1.length > 0) {
                                                pwCheckFlag = data1[0].approved;
                                                console.log("appr", pwCheckFlag)
                                                if (pwCheckFlag) {
                                                    console.log("authorized", pwCheckFlag)
                                                    res.send({ status: 'login success', token: token })
                                                    return;
                                                } else {
                                                    console.log("unauthorized", pwCheckFlag)
                                                    res.status(201).send({ status: 'unauthorised' })
                                                    return
                                                }
                                            }
                                        })
                                    } else {
                                        res.send({ status: 'login success', token: token })
                                        return;
                                    }
                                }
                            }
                        )
                    }
                    else {
                        res.status(201).send({ status: 'invalid password' })
                    }
                }
                catch (error) {
                    res.json({ status: 'error..failed' })
                }
            }
            else {
               0
            }
        })


        //end approve check
    }
    catch (error) {
        res.json({ status: 'error..authentication failed' })

    }
})

//listening to port

app.listen(5000, () => { console.log("listening on port 5000") });