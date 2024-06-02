import React, { useState } from 'react'
import GradientBtn from '../Gradient Btn/GradientBtn'
import youtubeIcon from '../../../public/Icons/youtube.png'
import facebookIcon from '../../../public/Icons/facebook.png'
import instagramIcon from '../../../public/Icons/instagram.png'

export default function HomePageFooter() {
  const [styleSucess, setStyleSucess] = useState(null)
  const [textSucess, setTextSucess] = useState(null)
  const reset = () => {
    setTimeout(() => {
      setStyleSucess(null)
      setTextSucess(null)
    }, 5000);
  }

  const  handelSubmit = async (e) => {
    // e.preventdefault()
    const name = document.querySelector('#name');
    const email = document.querySelector('#email');
    const phone = document.querySelector('#phone');
    const subject = document.querySelector('#subject');
    const message = document.querySelector('#message');
    
    if (name == "" || email == "" || phone == "" || subject == "" || message == "") {
      window.alert('enter the details first');
      return
    } else {
      const details = {
        Name: name.value,
        Email: email.value,
        PhoneNo: phone.value,
        Subject: subject.value,
        Message: message.value,
      }
      const response = await fetch("https://devauction.onrender.com/contactus", {
        method: "POST",
        body: JSON.stringify(details),
        headers: {
          "Content-type": "application/json; charset=UTF-8"
        }
      });
      // console.log(response)
      if(response.ok){
        window.alert('Thank You for contacting us!');
        setStyleSucess('bg-green-600 py-2 px-3 mt-3 font-semibold text-2xl')
        setTextSucess(`Email Sent!`)
        reset()
      }else{
        setStyleSucess('bg-red-600 py-2 px-3 mt-3 font-semibold text-2xl')
        setTextSucess(`Email not Sent!`)
        reset()
      }
      
      name.value = "";
      email.value = "";
      phone.value = "";
      subject.value = "";
      message.value = "";
    }
  }
  return (
    <>
      <section className='bg-black text-white py-10'>
        <div className='text-center py-4'>
          <h4 className='text-4xl font-bold mb-5'>Contact Us</h4>
          <p className='text-sm text-slate-300'> Have questions? Get in touch with our support team.</p>


          <form action="#" className='w-[80%] max-w-[450px] mx-auto pt-10'>
            <input
              className='bg-white bg-opacity-20 border-slate-400 border-2 w-full rounded-md px-2 py-1'
              type="text"
              placeholder='Name'
              name="Name"
              id="name" />
            <input
              className='bg-white bg-opacity-20 mt-7 border-slate-400 border-2 w-full rounded-md px-2 py-1'
              type="email"
              placeholder='Email'
              name="email"
              id="email" />
            <input
              type="tel"
              className='bg-white bg-opacity-20 border-slate-400 border-2 w-[48%] mt-8 rounded-md px-2 py-1'
              placeholder='Phone'
              name="phone"
              id="phone" />
            <input
              type="text"
              className='bg-white bg-opacity-20 border-slate-400 ml-[4%] mb-8 border-2 w-[48%] mt-8 rounded-md px-2 py-1'
              name="subject"
              placeholder='Subject'
              id="subject" />
            <textarea
              name="message"
              placeholder='Message'
              className='bg-white bg-opacity-20 mb-9 border-slate-400 border-2 w-full rounded-md px-2 py-1'
              id="message"></textarea>

            <GradientBtn type="button" placeholder='Submit' onClick={() => {handelSubmit()}} />
            {/* <input type="button" value="Submit" onClick={(e) => handelSubmit(e)} /> */}

          </form>
          <div className={styleSucess}>
            {textSucess}
          </div>
        </div>
        <div>
          <h4 className='text-6xl text-center font-bold mb-5'>DevAuction</h4>
          <ul className='flex text-lg justify-between max-w-[550px] mx-auto'>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>Home</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>How it Works</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>Features</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>About Us</span></li>
            <li><span className='hover:underline hover:text-slate-500 cursor-pointer'>Contact Us</span></li>
          </ul>
          <hr className='mt-10 ' />
          <div className='flex justify-between items-center lg:px-10'>
            <div>&copy; 2024, DevAuction All Rights Reserved</div>
            <div className='flex justify-between items-center gap-3 '>
              <a href="#" target='_blank'><img width={40} src={youtubeIcon} alt="" /></a>
              <a href="#" target='_blank'><img width={30} src={facebookIcon} alt="" /></a>
              <a href="#" target='_blank'><img width={40} src={instagramIcon} alt="" /></a>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
