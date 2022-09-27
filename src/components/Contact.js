import React from 'react'
import { BsFacebook, BsFillTelephoneForwardFill, BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs"
import { SiMinutemailer } from "react-icons/si"
export default function Contact() {
  return (
    <div>
      <div className="container" name="contact">
        <h1 className='fw-bold text-center text-warning display-4 mt-5'>Contact</h1>
        <div className="row">
            <div className="col">
            <div className='text-center mt-5 d-flex gap-2 flex-column'>
            <p><BsFillTelephoneForwardFill className='text-primary'  size={35}/>  <span className='text-light'>+91 730506446</span></p> <br />
            <p><SiMinutemailer className='text-info' size={35} /> <span className='text-light'>gobikrishna005@gmail.com</span> </p>
            <h1 className='text-danger'>Social</h1>
            <div className='text-center mb-5 d-flex gap-3 justify-content-center'>
                
                <a target="_blank" href='https://linkedin.com/in/gobi-krishna-ab50b811a' className='btn btn-primary'><BsLinkedin size={35}/></a>
                <a target="_blank" href='https://github.com/gobikris' className='btn btn-secondary '><BsGithub size={35} /></a>
                <a target="_blank" href='https://www.instagram.com/gobikrishna_srinivas/' className='btn btn-danger'><BsInstagram size={35} /></a>
                <a target="_blank" href='https://www.facebook.com/gobikrishna022/' className='btn btn-primary'><BsFacebook size={35} /></a>
                
                </div>
            </div>
            </div>
            
        </div>
      </div>
    </div>
  );
}
