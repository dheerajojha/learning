import React from 'react'
import { FaClock, FaTv } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay, } from 'swiper/modules';
const Popularcourses = () => {
  const coursesdata = [{
    title: 'Cloud protector',
    duration: 4,
    sources: 'vhiu'
  },
  {
    title: 'Tecyon protector',
    duration: 3,
    sources: 'vhiu'
  },
  {
    title: 'JSON protector',
    duration: 2,
    sources: 'vhiu'
  },
  {
    title: 'Spice protector',
    duration: 4,
    sources: 'vhiu'
  },
  ]
  return (
    <section className="popularcourses-wrapper space-y-8">
      <h2 className='t-center'>Popular Courses For Skilling on Federal Government</h2>

      <div className="card-container grid-4">
        {coursesdata.map((item, index) => (
          <div className="card p-8 border hidden md:block" key={index}>
            <div className="card-body space-y-4">
              <h4>{item.title}</h4>
              <p className='f-row'><span><FaClock /></span>{item.duration}Days</p>
              <p className='f-row'><span><FaTv /></span>{item.sources}</p>
            </div>
          </div>
        ))}
      </div>

      <Swiper pagination={true} autoplay={true}
        modules={[Pagination, Autoplay]}>
        {coursesdata.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="card block md:hidden p-4 rounded-md bg-white card border mb-10">
              <div className="card-body space-y-4">
                <h4>{item.title}</h4>
                <p className='f-row'><span><FaClock /></span>{item.duration}Days</p>
                <p className='f-row'><span><FaTv /></span>{item.sources}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center">
        <Link className='cta-outline'>Explore All Fedral Cources</Link>
      </div>
    </section>
  )
}

export default Popularcourses