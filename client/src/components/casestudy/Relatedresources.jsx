import React from 'react'
import { FaBlog, FaBook, FaWeibo } from "react-icons/fa"
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Pagination, Autoplay, } from 'swiper/modules';
const Relatedresources = () => {
    const resourcedata = [{
        title: 'How to boost your app growth',
        cat: 'Blog',
        description: 'pturi pariatur eos eligendi rem dolorum eveniet odio consectetur. Eligendi ipsa distinctio repudiandae itaque!',
        icons: <FaBlog />
    },
    {
        title: 'How to boost your app growth',
        cat: 'Webinar',
        description: 'pturi pariatur eos eligendi rem dolorum eveniet odio consectetur. Eligendi ipsa distinctio repudiandae itaque!',
        icons: <FaWeibo />
    },
    {
        title: 'How to boost your app growth',
        cat: 'Ebook',
        description: 'pturi pariatur eos eligendi rem dolorum eveniet odio consectetur. Eligendi ipsa distinctio repudiandae itaque!',
        icons: <FaBook />
    },
    ]
    return (
        <section className="relatedresources-wrapper">
            <h2 className='t-center'>Related Resources</h2>
            {/*no  swiper */}
            <div className="card-container grid-3">
                {resourcedata.map((item, index) => (
                    <div className="card border hidden md:block" key={index}>
                        <div className="card-header f-row bg-graylight p-4">
                            <span>{item.icons}</span>
                            <h5>{item.cat}</h5>
                        </div>
                        <div className="card-body p-4 space-y-4">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                            <button><Link className='text-primary'>Read blog </Link></button>
                        </div>
                    </div>
                ))}
            </div>
            {/* swiper */}
            <Swiper pagination={true} autoplay={true}
                modules={[Pagination, Autoplay]}>
                {resourcedata.map((item, index) => (
                    <SwiperSlide>
                        <div className="card border block md:hidden mb-10" key={index}>
                            <div className="card-header f-row bg-graylight p-4">
                                <span>{item.icons}</span>
                                <h5>{item.cat}</h5>
                            </div>
                            <div className="card-body p-4 space-y-4">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                                <button><Link className='text-primary'>Read blog </Link></button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </section>
    )
}

export default Relatedresources