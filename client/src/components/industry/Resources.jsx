import React from 'react'
import { FaAngleRight } from "react-icons/fa"
import { Link } from "react-router-dom"
const Resources = () => {
  const resourcedata = [{
    title: 'United Fedral Medal',
    category: 'case study',
    description: 'consequatur nostrum omnis sed qui excepturi repellendus! Maiores inventore beatae porro repellat eveniet!',
    image: '/fedral.webp'
  },
  {
    title: 'Republic Fedral Medal',
    category: 'case study',
    description: 'consequatur nostrum omnis sed qui excepturi repellendus! Maiores inventore beatae porro repellat eveniet!',
    image: '/republic.webp'
  },
  {
    title: 'Union Fedral Medal',
    category: 'Optics study',
    description: 'consequatur nostrum omnis sed qui excepturi repellendus! Maiores inventore beatae porro repellat eveniet!',
    image: '/union.webp'
  },
  ]
  return (
    <section className="resources-wrapper space-y-8">
      <h2 className='text-center'>Latest Federal Government Resources</h2>

      <div className="card-container grid-3 ">
        {resourcedata.map((item, index) => (
          <div className="card" key={index}>
            <div className="card-header">
              <img src={item.image} className='w-full max-h-[100px] object-cover' alt="" />
            </div>
            <div className="card-body p-8 space-y-4">
              <span className='border border-primary text-primary p-2'>{item.category}</span>
              <h4>{item.title}</h4>
              <p>{item.description}</p>
              <Link to='/' className='text-primary f-row'>
                <small>Read more</small>
                <span><FaAngleRight /></span>
              </Link>
            </div>
          </div>
        ))}


      </div>
      <Link to='' className='flex justify-center'><button className='cta'>Read more</button></Link>
    </section>
  )
}

export default Resources;