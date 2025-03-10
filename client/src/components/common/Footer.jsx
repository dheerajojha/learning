import React from 'react'
import { FaTwitter, FaInstagram, FaLinkedinIn, FaPhone, FaVoicemail } from "react-icons/fa"
import { Link } from "react-router-dom"
const Footer = () => {
  return (
    <footer className='bg-tertiary text-white space-y-8'>
      <div className="grid-4 row">
        <div className="col">
        <ul className='space-y-4'>
            <li className='mb-3 font-semibold text-[20px]'>Company</li>
            <li>
              <Link to=''>Account</Link>
            </li>
            <li>
              <Link to=''>Team</Link>
            </li>
            <li>
              <Link to=''>Career</Link>
            </li>
            <li>
              <Link to=''>Partner</Link>
            </li>
          </ul>
        </div>

        <div className="col">
        <ul className='space-y-4'>
          <li className='mb-3 font-semibold text-[20px]'>Industry</li>
            <li>
              <Link to=''>Account</Link>
            </li>
            <li>
              <Link to=''>Team</Link>
            </li>
            <li>
              <Link to=''>Career</Link>
            </li>
            <li>
              <Link to=''>Partner</Link>
            </li>
          </ul>
        </div>

        <div className="col">
        <ul className='space-y-4'>
          <li className='mb-3 font-semibold text-[20px]'>Resolution</li>
            <li>
              <Link to=''>Account</Link>
            </li>
            <li>
              <Link to=''>Team</Link>
            </li>
            <li>
              <Link to=''>Career</Link>
            </li>
            <li>
              <Link to=''>Partner</Link>
            </li>
          </ul>
        </div>

        <div className="col">
          <ul className='space-y-4'>
          <li className='mb-3 font-semibold text-[20px]'>Logo here</li>
            <li>
              <Link to='' className='f-row'>
                <span className='i-container'>
                  <FaPhone /></span>
                <p>+9-9000290292</p>
              </Link>
            </li>

            <li>
              <Link to='' className='f-row'>
                <span className='i-container'><FaVoicemail /></span>
                <p>abcmail@gmail.com</p>
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <div className="row border-t-2 border-white grid-3 pt-8">
        <div className="col">
          <p>©1998 - 2024 NetCom Learning</p>
        </div>

        <div className="col">
          <Link to=''>Privacy Policy</Link>
          <Link to=''>Terms and Conditions</Link>
        </div>

        <div className="col">
          <div className="icons f-row">
            <p>Follow</p>
            <Link to=''><FaLinkedinIn /></Link>
            <Link to=''><FaTwitter /></Link>
            <Link to=''><FaInstagram /></Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer