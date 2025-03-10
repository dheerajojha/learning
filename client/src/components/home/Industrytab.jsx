import React, { useState } from 'react'
import { FaFonticonsFi, FaHeart, FaHome, FaInfinity, FaMonero } from "react-icons/fa"
import { Link } from 'react-router-dom'
const Industrytab = () => {

  const [activetab, setActiveTab] = useState(1)

  const industrydata = [{
    title: 'US Armed Forces Group Upskilled Its Teams On Latest Network Technologies And Capabilities With Authorized Cisco Training',
    description: 'Which training solution to choose when your organization needs to establish a robust network infrastructure? Watch this video by NetCom Learning to witness how the workforce of a US Armed Forces Group was upskilled on the latest Cisco technologies with authorized Cisco training and supported the ongoing transformation of the army.',
    image: '/monument.webp',
    category: 1,
  },
  {
    title: 'Leading Health Services Innovation Company Moves 40,000 Local Servers To Microsoft Azure Cloud Via NetCom Learnings LAAS Solution',
    description: 'Know how NetCom Learning, with its Microsoft certified trainers aided and trained a leading health service client’s IT workforce in cloud migration, deployment, and development decision process via expertise consulting services. The result – The client moved 40,000 servers to Microsoft Azure Cloud, successfully and effectively.',
    image: '/health.webp',
    category: 2,
  },
  {
    title: 'Americas Second Largest Bank Upskilled Its Workforce On Microsoft Technologies To Support Its Digital Transformation & Serve 40 Million Customers',
    image: '/finance.webp',
    category: 3,
  },
  {
    title: 'County Civil Engineers Upskilled To Design And Deliver Complex Projects On-Time Via Official Autodesk Civil 3D® Training',
    description: 'Which training solution to choose when your organization needs to establish a robust network infrastructure? Watch this video by NetCom Learning to witness how the workforce of a US Armed Forces Group was upskilled on the latest Cisco technologies with authorized Cisco training and supported the ongoing transformation of the army.',
    image: '/information.webp',
    category: 4
  },
  {
    title: 'American Multinational Corporation Migrates Big Data To The Cloud And Reduces IT Costs With AWS Training Solution',
    description: 'Which training solution to choose when your organization needs to establish a robust network infrastructure? Watch this video by NetCom Learning to witness how the workforce of a US Armed Forces Group was upskilled on the latest Cisco technologies with authorized Cisco training and supported the ongoing transformation of the army.',
    image: '/trust.png',
    category: 5
  },

  ]
  return (
    <section className="indusrtytab-wrapper bg-tertiary space-y-8">
      <h2 className='text-white t-center'>How Our Solutions Drive Industry-Specific Results</h2>

      {/* tab */}
      <div className="card-container grid-4">
        <div className={`card ${activetab == 1 ? 'bg-primary text-white border border-white':'bg-white'} p-8 cursor-pointer`} onClick={() => setActiveTab(1)}>
          <div className="card-body">
            <span><FaHome size={30} /></span>
            <h4>Government</h4>
          </div>
        </div>

        <div className={`card ${activetab == 2 ? 'bg-primary text-white border-white border':'bg-white'} p-8 cursor-pointer`} onClick={() => setActiveTab(2)}>
          <div className="card-body">
            <span><FaHeart size={30} /></span>
            <h4>Health</h4>
          </div>
        </div>

        <div className={`card ${activetab == 3 ? 'bg-primary text-white border-white border':'bg-white'} p-8 cursor-pointer`} onClick={() => setActiveTab(3)}>
          <div className="card-body">
            <span><FaMonero size={30} /></span>
            <h4>Financial Assiatance</h4>
          </div>
        </div>
        <div className={`card ${activetab == 4 ? 'bg-primary text-white border-white border':'bg-white'} p-8 cursor-pointer`} onClick={() => setActiveTab(4)}>
          <div className="card-body">
            <span><FaInfinity size={30} /></span>
            <h4>Information Technology</h4>
          </div>
        </div>
      </div>

      {/* tab data */}
      {industrydata.filter((i) => i.category == activetab).map((item, index) => (
        <div className="row grid-2 bg-white p-4" key={index}>
          <div className="col order-last space-y-8">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button className='cta-outline w-full md:max-w-[200px]'>
              <Link to={`/casestudy/${item.category}`}>Read more</Link>
            </button>
            <button className='cta-outline w-full md:max-w-[280px]'>
            <Link to={`/industry/${item.category}`}>Explore Financial Services</Link>
            </button>       
          </div>
          <div className="col order order-first md:order-last">
            <img src={item.image} className='w-full object-cover border rounded-md' alt="" />
          </div>
        </div>
      ))}

    </section>
  )
}

export default Industrytab