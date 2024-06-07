import React, { useState } from 'react'
import GradientBtn from '../Buttons/GradientBtn'


function ContactUs() {

    const [styleSucess, setStyleSucess] = useState(null)
    const [textSucess, setTextSucess] = useState(null)
    const [check, setCheck] = useState(false)
    const reset = () => {
        setTimeout(() => {
            setStyleSucess(null)
            setTextSucess(null)
        }, 5000);
    }

    const handelSubmit = async (e) => {
        // e.preventdefault()
        const firstName = document.querySelector('#firstName');
        const lastName = document.querySelector('#lastName');
        const email = document.querySelector('#email');
        const phone = document.querySelector('#phone');
        const message = document.querySelector('#message');
        // console.log(checkbox.value)
        if (!check) {
            alert('please accept T&C first')
            return
        }
        if (firstName == "" || lastName == "" || email == "" || phone == "" || message == "") {
            window.alert('enter the details first');
            return
        } else {
            let fullName = firstName.value + " " + lastName.value
            const details = {
                Name: fullName,
                Email: email.value,
                PhoneNo: phone.value,
                Message: message.value,
            }
            const response = await fetch("https://devauction.onrender.com/contactus", {
                method: "POST",
                body: JSON.stringify(details),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            console.log(response)
            if (response.ok) {
                window.alert('Thank You for contacting us!');
                setStyleSucess('bg-green-600 py-2 px-3 mt-3 font-semibold text-2xl')
                setTextSucess(`Email Sent!`)
                reset()
            } else {
                setStyleSucess('bg-red-600 py-2 px-3 mt-3 font-semibold text-2xl')
                setTextSucess(`Email not Sent!`)
                reset()
            }

            firstName.value = "";
            lastName.value = "";
            email.value = "";
            phone.value = "";
            message.value = "";
        }
    }
    return (
      <section className='bg-[#080a1c] text-white py-10'>
    
            <div className='flex w-full justify-center flex-wrap gap-4  items-center bg-[#080a1c] text-white py-10 '>

                <div className='max-w-[40vw]  bg-gradient-to-br rounded-xl from-[#0EBBD9] to-[#0a0e20] p-[2px]  min-w-[300px]'>
                    <form action="#" className='w-[100%]  bg-[#0a0b1d] bg-opacity-90 rounded-2xl mx-auto py-4 px-6'>
                        <h4 className='text-4xl font-bold mb-5'>Contact Form</h4>

                        <div className='flex gap-2 w-full '>
                            <div className='basis-[50%] after:content-[""] after:w-[100%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-white after:to-[#0a0b1d]  after:h-[2px] after:block '>
                                <p>First Name</p>
                                <input
                                    className='bg-white outline-none focus:bg-opacity-5 focus:bg-white bg-opacity-5 border-slate-800 border-2 w-full rounded-md px-2 py-1'
                                    type="text"
                                    name="Name"
                                    autocomplete="off"
                                    id="firstName" />
                            </div>
                            <div className='basis-[50%] after:content-[""] after:w-[100%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-white after:to-[#0a0b1d]  after:h-[2px] after:block' >
                                <p>Last Name</p>
                                <input
                                    className='bg-white outline-none bg-opacity-5 border-slate-800 border-2 w-full rounded-md px-2 py-1'
                                    type="text"
                                    name="Name"
                                    autocomplete="off"
                                    id="lastName" />
                            </div>
                        </div>

                        <div className='flex gap-2 my-3'>
                            <div className='basis-[50%] after:content-[""] after:w-[100%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-white after:to-[#0a0b1d]  after:h-[2px] after:block'>
                                <p >Phone</p>
                                <input
                                    type="tel"
                                    className='bg-white outline-none w-full bg-opacity-5 border-slate-800 border-2 rounded-md px-2 py-1'
                                    name="phone"
                                    autocomplete="off"
                                    id="phone" />
                            </div>
                            <div className='basis-[50%] after:content-[""] after:w-[100%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-white after:to-[#0a0b1d]  after:h-[2px] after:block'>
                                <p >Email</p>
                                <input
                                    className='bg-white outline-none bg-opacity-5 border-slate-800 border-2 w-full rounded-md px-2 py-1'
                                    type="email"
                                    name="email"
                                    autocomplete="off"
                                    id="email" />
                            </div>
                        </div>

                        <div className='after:content-[""] after:w-[100%] after:bg-gradient-to-r after:from-[#0a0b1d] after:via-white after:to-[#0a0b1d] after:mt-[-6px]  after:h-[2px] after:block'>
                            <p>Message</p>
                            <textarea
                                name="message"
                                placeholder='Message'
                                rows={3}
                                className='bg-white outline-none bg-opacity-5 border-slate-800 border-2 resize-none w-full rounded-md px-2 py-1'
                                id="message"></textarea>
                        </div>
                        <input type="checkbox" id='checkbox' value={check} onChange={() => setCheck(!check)} className='mt-4' />
                        <span className='text-sm ml-2 opacity-70'>By sending this form I confirm that I have read and accept the <a className=" underline text-white opacity-100" href="#" target='_blank'>Privacy Policy</a></span>
                        <br />
                        <br />
                        <GradientBtn type="button" placeholder='Submit' onClick={() => {handelSubmit()}} />
                        {/* <input type="button" value="Submit" onClick={(e) => handelSubmit(e)} /> */}

                    </form>
                </div>

                <div id='star' className='w-[300px] ml-10 relative '>
                    <h4 className='font-semibold mb-2'>Stay Updated</h4>
                    <p className='text-xs opacity-55'>At DevAuction. Our Constant Pursuit Is To Build Engaging Community That Spared Joy. Don't Hesitate To Reach Out To Us With Your Thoughts And Messages - We Are All Ears!</p>
                </div>
            </div>

            <div className={styleSucess}>
                {textSucess}
            </div>
            </section>
       
    )
}

export default ContactUs