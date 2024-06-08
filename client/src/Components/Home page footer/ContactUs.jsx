import React, { useState } from "react";
import GradientBtn from "../Buttons/GradientBtn";

function ContactUs() {
  const [styleSucess, setStyleSucess] = useState(null);
  const [textSucess, setTextSucess] = useState(null);
  const [check, setCheck] = useState(false);
  const reset = () => {
    setTimeout(() => {
      setStyleSucess(null);
      setTextSucess(null);
    }, 5000);
  };

  const handelSubmit = async (e) => {
    // e.preventdefault()
    const firstName = document.querySelector("#firstName");
    const lastName = document.querySelector("#lastName");
    const email = document.querySelector("#email");
    const phone = document.querySelector("#phone");
    const message = document.querySelector("#message");
    // console.log(checkbox.value)
    if (!check) {
      alert("please accept T&C first");
      return;
    }
    if (
      firstName == "" ||
      lastName == "" ||
      email == "" ||
      phone == "" ||
      message == ""
    ) {
      window.alert("enter the details first");
      return;
    } else {
      let fullName = firstName.value + " " + lastName.value;
      const details = {
        Name: fullName,
        Email: email.value,
        PhoneNo: phone.value,
        Message: message.value,
      };
      const response = await fetch(
        "https://devauction.onrender.com/contactus",
        {
          method: "POST",
          body: JSON.stringify(details),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        window.alert("Thank You for contacting us!");
        setStyleSucess("bg-green-600 py-2 px-3 mt-3 font-semibold text-2xl");
        setTextSucess(`Email Sent!`);
        reset();
      } else {
        setStyleSucess("bg-red-600 py-2 px-3 mt-3 font-semibold text-2xl");
        setTextSucess(`Email not Sent!`);
        reset();
      }

      firstName.value = "";
      lastName.value = "";
      email.value = "";
      phone.value = "";
      message.value = "";
    }
  };
  return (
    <section id="contact us" className="text-white py-10">
      <div className="flex w-full justify-center flex-wrap gap-4 items-center text-white py-10 ">
        <div className="max-w-[40vw] bg-gradient-to-br rounded-xl from-[#0D7089] to-[#0a0e20] p-[2px] min-w-[300px]">
          <form
            action="#"
            className="w-full bg-[#050618] bg-opacity-90 rounded-[10.5px] mx-auto py-4 px-6"
          >
            <h4 className="text-4xl font-bold mb-5">Contact Form</h4>

            <div className="flex gap-2 w-full ">
              <div className='basis-[50%] '>
                <p className="leading-8">First Name</p>
                <input
                  className="outline-none bg-[#060e21]  border-[0.5px] border-[#2D2E3D] w-full rounded-xl px-2 py-1 h-10"
                  type="text"
                  name="Name"
                  autoComplete="off"
                  id="firstName"
                  style={{boxShadow: "inset 0 4px 22px 0 rgba(255,255,255,0.1)"}}
                />
              </div>
              <div className='basis-[50%]'>
                <p className="leading-8">Last Name</p>
                <input
                  className="outline-none bg-[#060e21] border-[0.5px] border-[#2D2E3D] w-full rounded-xl px-2 py-1 h-10"
                  type="text"
                  name="Name"
                  autoComplete="off"
                  id="lastName"
                  style={{boxShadow: "inset 0 4px 22px 0 rgba(255,255,255,0.1)"}}
                />
              </div>
            </div>

            <div className="flex gap-2 my-3">
              <div className='basis-[50%]'>
                <p className="leading-8">Phone</p>
                <input
                  type="tel"
                  className="outline-none w-full bg-[#060e21] border-[0.5px] border-[#2D2E3D] rounded-xl px-2 py-1 h-10"
                  name="phone"
                  autoComplete="off"
                  id="phone"
                  style={{boxShadow: "inset 0 4px 22px 0 rgba(255,255,255,0.1)"}}
                />
              </div>
              <div className='basis-[50%]'>
                <p className="leading-8">Email</p>
                <input
                  className="outline-none bg-[#060e21] border-[0.5px] border-[#2D2E3D] w-full rounded-xl px-2 py-1 h-10"
                  type="email"
                  name="email"
                  autoComplete="off"
                  id="email"
                  style={{boxShadow: "inset 0 4px 22px 0 rgba(255,255,255,0.1)"}}
                />
              </div>
            </div>

            <div className=''>
              <p className="leading-8">Message</p>
              <textarea
                name="message"
                rows={3}
                className="bg-[#060e21] outline-none border-[0.5px] border-[#2D2E3D] resize-none w-full rounded-xl px-2 py-1 h-20"
                id="message"
                style={{boxShadow: "inset 0 4px 22px 0 rgba(255,255,255,0.1)"}}
              ></textarea>
            </div>
            <input
              type="checkbox"
              id="checkbox"
              value={check}
              onChange={() => setCheck(!check)}
              className="mt-4"
            />
            <span className="text-sm ml-2 opacity-70">
              By sending this form I confirm that I have read and accept the{" "}
              <a
                className=" underline text-white opacity-100"
                href="#"
                target="_blank"
              >
                Privacy Policy
              </a>
            </span>
            <br />
            <br />
            <GradientBtn
              type="button"
              placeholder="Submit"
              onClick={() => {
                handelSubmit();
              }}
              className="sm:w-44"
            />
          </form>
        </div>
        <div id="star" className="w-[300px] ml-10 relative ">
          <h4 className="font-semibold mb-2">Stay Updated</h4>
          <p className="text-xs opacity-55">
            At DevAuction. Our Constant Pursuit Is To Build Engaging Community
            That Spared Joy. Don't Hesitate To Reach Out To Us With Your
            Thoughts And Messages - We Are All Ears!
          </p>
        </div>
      </div>

      <div className={styleSucess}>{textSucess}</div>
    </section>
  );
}

export default ContactUs;
