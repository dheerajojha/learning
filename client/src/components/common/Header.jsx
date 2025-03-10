import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from "react-icons/ci";
import { FaAngleDown, FaAngleRight, FaBook, FaHamburger, FaHome, FaPhone, FaRegUserCircle, FaSearch } from "react-icons/fa";
const Header = () => {
  const [activeresource, setactiveresource] = useState(false)
  const [activesolution, setactivesolution] = useState(false)
  const [activetraining, setactivetraining] = useState(false)
  const [activecompany, setactivecompany] = useState(false)
  return (
    <header className='f-between p-4'>
      <div className="left">
        <Link to='/' ><img src='/logo.png' className='w-[200px] h-[40px] object-cover' alt="" /></Link>
      </div>

      <nav className='hidden lg:block'>
        {/* parent ul */}
        <ul className='flex space-x-6'>
          <li className='f-row hover:text-primary cursor-pointer'>Training
            <span className={activetraining && 'rotate-90'} onClick={() => setactivetraining(!activetraining)}><FaAngleRight /></span>
            {/* child ul */}
            {activetraining && <div className="submenu-container grid-3 absolute w-full z-10 h-full bg-white left-0 top-20 p-8 rounded-md">
              <div className="col">
                <ul className='space-y-4'>
                  <li className='font-semibold border-b pb-2'>Skill by vendor</li>
                  <li><Link>Microsoft</Link></li>
                  <li><Link>Ai</Link></li>
                  <li><Link>Cloud</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className='space-y-4'>
                  <li className='font-semibold border-b pb-2'>Skill by Practice</li>
                  <li><Link>Security</Link></li>
                  <li><Link>App</Link></li>
                  <li><Link>Json</Link></li>
                </ul>
              </div>
              <div className="col">
                <ul className='space-y-4'>
                  <li className='font-semibold border-b pb-2'>Choose How You Learn</li>
                  <li><Link>Virtual Learning</Link></li>
                  <li><Link>E-learning</Link></li>
                </ul>
              </div>
            </div>}

          </li>
          <li className='f-row hover:text-primary cursor-pointer'>
            Resources
            <span className={activeresource && 'rotate-90'} onClick={() => setactiveresource(!activeresource)}><FaAngleRight /></span>
            {/* child ul */}
            {activeresource && <ul className='c-ul absolute bg-white p-4 top-[80px] rounded-md'>
              <li><Link>Webinar</Link></li>
              <li><Link>Blog</Link></li>
              <li><Link>Assets</Link></li>
            </ul>}
          </li>
          <li className='f-row hover:text-primary cursor-pointer'>Solution
            <span className={activesolution && 'rotate-90'} onClick={() => setactivesolution(!activesolution)}><FaAngleRight /></span>
            {/* child ul */}
            {activesolution && <ul className='c-ul absolute bg-white p-4 top-[80px] rounded-md'>
              <li><Link>Webinar</Link></li>
              <li><Link>Blog</Link></li>
              <li><Link>Assets</Link></li>
            </ul>}
          </li>
          <li className='f-row hover:text-primary cursor-pointer'>Company
            <span className={activecompany && 'rotate-90'} onClick={() => setactivecompany(!activecompany)}><FaAngleRight /></span>
            {/* child ul */}
            {activecompany && <ul className='c-ul absolute bg-white p-4 top-[80px] rounded-md'>
              <li><Link>Webinar</Link></li>
              <li><Link>Blog</Link></li>
              <li><Link>Assets</Link></li>
            </ul>}
          </li>
        </ul>
      </nav>

      <div className="right f-row-l">
        <div className="buttons hidden md:flex gap-4">
          <Link to='' className='cta'>Contact</Link>
          <Link to='/login' className='cta-outline'>Login</Link>
        </div>
        <div className="icons f-row">
          <span> <FaRegUserCircle size={35} /></span>
        </div>
      </div>

    </header>
  )
}

export default Header