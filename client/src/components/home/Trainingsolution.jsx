import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

// import required modules
import { EffectCoverflow, Mousewheel } from 'swiper/modules';
import { Link } from 'react-router-dom'
import { FaAngleRight } from 'react-icons/fa';
const Trainingsolution = () => {
    const trainingdata = [
        {
            title: 'Learning Passport',
            subtitle: 'Optimize your annual training budget',
            description: 'Effortlessly manage and strategize your teams annual training requirements using Learning Passport. Whether youre training one or many, gain exclusive access to NetCom365, our 247 learning portal, and maximize your training investment.',
            image: '/learning.webp'
        },
        {
            title: 'Public Enrollment',
            subtitle: 'Open enrollment schedules',
            description: 'For individuals seeking comprehensive skill enhancement, explore our inclusive open enrollment schedules. Choose from various delivery formats, including virtual instructor-led training (vILT) and e-Learning, for a flexible learning experience..',
            image: '/explore.png'
        },
        {
            title: 'Private Training',
            subtitle: 'Customize your group training needs',
            description: 'Looking to upskill your team with customized needs? We can customize the training curriculum to align perfectly with your organizations needs. Access proven content and hands-on labs to reinforce critical skills. Tailor your training with delivery formats that suit your requirements, including virtual instructor-led training (vILT) and e-Learning.',
            image: '/talent.webp'
        },
        {
            title: 'Education Assistance',
            subtitle: 'Explore tuition reimbursement benefits',
            description: 'Effortlessly manage and strategize your teams annual training requirements using Learning Passport. Whether youre training one or many, gain exclusive access to NetCom365, our 247 learning portal, and maximize your training investment.',
            image: '/education.webp'
        },
    ]
    return (
        <section className="trainingsolution-wrapper bg-tertiary h-full">
            <h2 className='t-center text-white'>Transform Your Workforce into solution</h2>
            <Swiper effect={'coverflow'}
                mousewheel={true}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={'auto'}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: true,
                }}
                modules={[EffectCoverflow, Mousewheel]}>
                {trainingdata.map((item, index) => (
                    <SwiperSlide className='bg-white' key={index}>
                        <div className="swiper-header">
                            <img src={item.image} alt="" className='max-h-[100px] w-full object-cover' />
                        </div>
                        <div className="swiper-body p-4 space-y-4">
                            <h3>{item.title}</h3>
                            <h4>{item.subtitle}</h4>
                            <p>{item.description}</p>
                            <button className='text-primary f-row'>
                                <Link to=''>Know more</Link>
                                <FaAngleRight />
                            </button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Trainingsolution