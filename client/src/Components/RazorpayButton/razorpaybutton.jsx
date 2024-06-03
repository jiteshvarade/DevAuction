import React from 'react'

function RazorpayButton() {

  function loadRazorPay()
  {
    const script = document.createElement('script')
    script.src = "https://checkout.razorpay.com/v1/checkout.js"
    document.body.appendChild(script)
    script.onload = handleSubmit
  }

  async function handleSubmit()
  {
    try {
      const response = await fetch("https://devauction.onrender.com/payments", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({amount : amount}),
      });
  
      const result = await response.json();
      console.log("Success:", result);

      if(response.ok)
      {
          var options = {
              "key_id" : "rzp_test_w1PnHafmCNsrDy", 
              "amount": `${result.amount}`, 
              "currency": "INR",
              "name": "Acme Corp",
              "description": "Test Transaction",
              "image": "https://example.com/your_logo",
              "order_id": `${result.id}`, 
              "handler": function (response){  
                  alert("Payment successfull!")
              },
              "prefill": {
                  "name": "Jitesh",
                  "email": "jiteshvarade1@gmail.com",
                  "contact": "9322679131"
              },
              "notes": {
                  "address": "Razorpay Corporate Office"
              },
              "theme": {
                  "color": "#3399cc"
              }
          };
          console.log(options)

          var rzp1 = new Razorpay(options);
          rzp1.open()

          rzp1.on('payment.failed', function (response){
                  alert(response.error.code);
                  alert(response.error.description);
                  alert(response.error.source);
                  alert(response.error.step);
                  alert(response.error.reason);
                  alert(response.error.metadata.order_id);
                  alert(response.error.metadata.payment_id);
          });
      }

      console.log(responsePayment)

    } catch (error) {
      console.error("Error:", error);
    }
  }

  return (
    <>
      <button onClick={loadRazorPay}>Buy Credits</button>
    </>
  )
}

export default RazorpayButton
