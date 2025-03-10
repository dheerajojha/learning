import React, { useState } from 'react'
import { FaBook, FaBars, FaHome, FaPhone, FaSearch, FaTrain, FaFile, FaNapster } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-router-dom';

const MobileHeader = () => {
  const [activemenu, setactivemenu] = useState(false)
  return (
    <nav className='mobile-menu z-50 lg:hidden fixed bottom-0 left-0 w-full bg-graylight p-4'>
      <ul className='f-between'>
        <li><Link to='/' className='f-col'><FaHome />Home</Link></li>
        <li><Link to='course-catelog' className='f-col'><FaBook />Catelogue</Link></li>
        <li className='f-col'><FaPhone />Contact</li>
        <li className='f-col'><FaSearch />Search</li>
        <li className='f-col' onClick={() => setactivemenu(!activemenu)}>{activemenu ? <RxCross2 /> : <FaBars />}More
          {activemenu && <ul className='absolute z-10 space-y-4 h-screen w-full left-0 bottom-0 bg-white p-8'>
            <li className='text-[22px] text-tertiary font-bold f-row'><FaTrain />Training</li>
            <li><Link to=''>Skill by Vendor</Link></li>
            <li><Link to=''>Skill by Practive</Link></li>
            <li><Link to=''>Choose How You Learn</Link></li>
            <li className='text-[22px] text-tertiary font-bold f-row'><FaNapster />Solution</li>
            <li><Link to=''>Netcom Solution</Link></li>
            <li><Link to=''>Solution By Product</Link></li>
            <li><Link to=''>Solution By Industry</Link></li>
            <li><Link to=''>Solution Vendor </Link></li>
            <li className='text-[22px] text-tertiary font-bold f-row'><FaFile />Resource</li>
            <li><Link to=''>Skill by Vendor</Link></li>
            <li><Link to=''>Skill by Vendor</Link></li>
            <li><Link to=''>Skill by Vendor</Link></li>
            <li><Link to=''>Skill by Vendor</Link></li>
          </ul>}
        </li>
      </ul>
    </nav>
  )
}

export default MobileHeader