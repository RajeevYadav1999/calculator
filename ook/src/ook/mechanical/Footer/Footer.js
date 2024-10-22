import React from 'react'
import { AiFillMail } from "react-icons/ai";
import { GoLocation } from "react-icons/go"
import { IoIosCall } from "react-icons/io";
import Navlogo from "../images/vig (1).png"
import { BsInstagram, BsFacebook, BsLinkedin, BsTwitter } from 'react-icons/bs'
export default function Footer() {

    return (
        <>
            <footer>
                <div className='footer-section-one'>
                    <br></br>
                    <img src={Navlogo} alt='' />
                    <br></br>
                    <br></br>
                    <p>OOK THE Ocean Of Knowlegde.<br />Here u can know about technologies.<br /><br /> Go Ahead explore more</p>
                    <br></br>
                    <br></br>
                </div>
                <div className='footer-section-two'>
                    <ul>
                        <li><a>MAE</a></li>
                        <li><a>ASE</a></li>
                        <li><a>CSE</a></li>
                        <li><a>Animation</a></li>
                    </ul>
                </div>
                <div className='footer-section-three'>
                    <li><a><BsInstagram />  Instagram</a></li>
                    <li><a><BsFacebook />  Fackbook</a></li>
                    <li><a><BsTwitter />  Twitter</a></li>
                    <li><a><BsLinkedin />  linkdin</a></li>
                </div>
                <div className='footer-section-four'>
                    <div className='contact-us'>
                        <li className='contact-us'>CONTACT US</li>
                        <li><a><AiFillMail /></a> ook@gmail.com</li>
                        <li><a><IoIosCall /></a> +91 70068 56070</li>
                        <li><a><GoLocation /></a> mohail chandigarh</li>
                    </div>
                </div>
            </footer>
        </>
    )
}