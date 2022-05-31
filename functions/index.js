const functions = require("firebase-functions");
const express = require ("express")
const cors = require("cors")
const stripe = require ("stripe")("sk_test_51L1FLaLPOxTcY9J5mUn8aQZF7YDKi2J2wv10sJQ7sGGtuN2kgoim0iN17xAvbZdKCk7Z88qwuj1dy9PdY7yXXMPA00sAuK2MT8");

// -API

// -APP Config
const app = express()

// -Miidlewares
app.use(cors({origin:true}));
app.use(express.json());

// -API Routes
app.get("/", (req,res)=>res.status(200).send("Hello World"));
app.post("/payments/create",async (req, res) => {
    const total =req.query.total;

    console.log("Payment request received", total);

    const paymentIntent = await stripe.paymentIntents.create({ 
        amount: total,
        currency: "ZAR"});

        //IF OKAY CREATED
        res.status(201).send({clientSecret: paymentIntent.client_secret});
})


// -Listen Commands
exports.api= functions.https.onRequest(app);

