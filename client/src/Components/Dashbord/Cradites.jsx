import React, { useEffect } from 'react'
import craditSecImg from '../../../public/Icons/craditesSectionImg.png'
import craditeSecBg from '../../../public/Icons/craditeBG.png'
import GradientBtn from '../Buttons/GradientBtn'
import RazorpayButton from '../RazorpayButton/razorpaybutton'
import { useAuth0 } from "@auth0/auth0-react";
import { useState } from 'react'
import photo from "../../assets/AuctionroomImages/mdi_eye.png"



function Cradites({ trans , credits = 0  }) {

    const [Amount, setAmount] = useState('');
    const { user } = useAuth0();
    
    

    // const debits = trans.filter((ele) => {
    //     return ele.category === "debit";
    // });

    // const creds =  trans.filter( (ele) => {
    //     return  ele.category === "credit" 
    // });
    // console.log(debits);
    

    function loadRazorPay() {
        const script = document.createElement('script')
        script.src = "https://checkout.razorpay.com/v1/checkout.js"
        document.body.appendChild(script)
        script.onload = handleSubmit
    }

    async function handleSubmit() {
        const amount = (Amount * 100)
        console.log(Amount)
        try {
            const response = await fetch("https://devauction.onrender.com/payments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ amount: amount }),
            });

            const result = await response.json();
            //   console.log("Success:", result);

            if (response.ok) {
                var options = {
                    "key_id": "rzp_test_w1PnHafmCNsrDy",
                    "amount": `${result.amount}`,
                    "currency": "INR",
                    "name": "DevAuction",
                    "description": "Test Transaction",
                    "image": { photo },
                    "order_id": `${result.id}`,
                    "handler": function (response) {
                        alert("Payment successfull!")
                    },
                    "prefill": {
                        "name": `${user.name}`,
                        "email": `${user.email}`,
                        "contact": "9322679131"
                    },
                    "notes": {
                        "address": "DevAuction Corporate Office"
                    },
                    "theme": {
                        "color": "#3399cc"
                    }
                };
                console.log(options)

                var rzp1 = new Razorpay(options);
                await rzp1.open()


                rzp1.on('payment.failed', function (response) {
                    alert(response.error.code);
                    alert(response.error.description);
                    alert(response.error.source);
                    alert(response.error.step);
                    alert(response.error.reason);
                    alert(response.error.metadata.order_id);
                    alert(response.error.metadata.payment_id);
                });
            }

            //   console.log(responsePayment)


        } catch (error) {
            console.error("Error:", error);
        }
    }


    return (
        <>
            <section className='p-3' id="cradites">
                <div className=' mx-auto lg:w-[100%] border-[#223534] bg-[#050b1e] border-2 flex items-center justify-between rounded-xl'>
                    <div style={{ backgroundImage: 'url("../../../public/Icons/craditeBG.png")' }} className=' rounded-xl w-[100%] bg-cover bg-center'>
                        <h4 className='text-2xl font-semibold ml-5 my-3'>My Credits</h4>
                        <div className='flex gap-2 flex-wrap'>

                            <div className='bg-[#0567FC] ml-5 flex rounded-xl text-lg bg-opacity-30 px-3 py-2'>
                                ₹
                                <input
                                    value={Amount}
                                    type="number"
                                    placeholder='Amount'
                                    onChange={(e) => {
                                        setAmount(e.target.value)
                                    }}
                                    className='border-none w-[100%] text-lg pl-1 outline-none bg-transparent text-white placeholder:text-white'
                                    name=""
                                    id="" />
                            </div>
                            <GradientBtn placeholder="Withdraw" />
                            <GradientBtn placeholder="Deposite" onClick={loadRazorPay} />
                        </div>
                        <p className='text-[#0CA3E7] font-semibold mt-2 ml-5 mb-4'>Balance (₹ {credits})</p>
                    </div>
                    {/* <div className='h-[100%] hidden lg:block'>
                        <img src={craditSecImg} className='h-full object-cover rounded-xl' alt="" />
                    </div> */}
                </div>

                <div className='mt-5  lg:flex justify-between'>

                    <div className='border-2 border-[#223534]  mb-4 lg:mb-0 rounded-lg py-3 lg:basis-[49%]'>
                        <h4 className='text-2xl font-semibold ml-3 my-3'>Transaction history</h4>
                        <div>
                            <div className='bg-[#0567FC] flex rounded-xl text-lg bg-opacity-30 px-3 py-2 w-[90%] mx-auto'>
                                <span className="material-symbols-outlined">
                                    wallet
                                </span>
                                No Transaction history
                            </div>
                        </div>
                    </div>

                    <div className='border-2 border-[#223534] rounded-lg py-3 lg:basis-[49%]'>
                        <h4 className='text-2xl font-semibold ml-3 my-3'>Transaction history</h4>
                        <div>
                            <div className='bg-[#0567FC] flex rounded-xl text-lg bg-opacity-30 px-3 py-2 w-[90%] mx-auto'>
                                <span className="material-symbols-outlined">
                                    wallet
                                </span>
                                No Transaction history
                            </div>
                        </div>
                    </div>
                </div>

            </section>

        </>
    )
}

export default Cradites