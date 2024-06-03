import Router from "express"
import Razorpay from "razorpay";
import crypto from "crypto"
const router = Router()

var instance = new Razorpay({
    key_id: "rzp_test_w1PnHafmCNsrDy",
    key_secret: "2eF70F5jV31adagetesPvu4a",
});

router.post("/",async (req,res)=>{
    const amount = req.body
    console.log(amount)
    console.log("Inside razorpay router")

    var options = {
        amount: amount, // in paise
        currency: "INR",
        receipt: "order_rcptid_11"
    };
        instance.orders.create(options, function(err,order) {
        console.log(order);
        res.json(order)
    });
})

router.post("/verify",async (req,res)=>{
    const secret = "1234567890"
    console.log(req.body)

    const shasum = crypto.createHmac("sha256", secret)
    shasum.update(JSON.stringify(req.body))
    const digest = shasum.digest('hex')

    console.log(req.headers["x-razorpay-signature"])

    if(digest === req.headers["x-razorpay-signature"])
    {
        console.log("Successfull payment")
        // logic to update in database
        res.json({status : "ok"})
    }
    else
    {
        console.log("Payment unsuccessful")
        res.status(500)
    }
})

export default router
