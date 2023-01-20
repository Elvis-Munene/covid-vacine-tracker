import React from 'react'
import "./Footer.css"
import {FaFacebook} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {AiFillTwitterCircle} from 'react-icons/ai'
import {MdOutlineContactPage} from 'react-icons/md'

function Footer() {
  return (
    
         <div className='flex flex-col flex-wrap items-center justify-center bg-primary w-full'>
        <div className='bigcol'>
            <div className='col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>Talk to us</h1>
                <p className='text-md py-2 text-white'>+254 567 890</p>
                <p className='text-lg py-2 text-white'>
                <a href='mailto:someone@gmail.com'>Send Email</a>
                </p>
              
            </div>
            <div className='col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>About Us</h1>
                <a href='#' className='px-4 py-2 text-md text-white'><MdOutlineContactPage/>Contact</a>
                <a href='#' className='px-4 py-2 text-md text-white'>About Us</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Our Team</a>
            </div>
            <div className='col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>Quick Links</h1>
                <a href='#' className='px-4 py-2 text-md text-white'>Support</a>
                <a href='#' className='px-4 py-2 text-md text-white'>Stories</a>
            </div>
            <div className='col'>
                <h1 className='text-base md:text-lg lg:text-xl font-bold text-white'>Social Media</h1>
                <a href='#' className='px-4 py-2 text-lg text-white'><FaFacebook/>Facebook</a>
                <a href='#' className='px-4 py-2 text-lg text-white'><FiInstagram/>Instagram</a>
                <a href='#' className='px-4 py-2 text-lg text-white'><AiFillTwitterCircle/>Twitter</a>
            </div>
        </div>
        
        <p className='text-lg text-white text-center'><span className="pink-text">© 2022 covid-tracker</span> All rights reserved.</p>
        
    </div>
    
  )
  }
export default Footer