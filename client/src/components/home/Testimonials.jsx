// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { FaQuoteLeft } from "react-icons/fa";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';
import { FaUser } from 'react-icons/fa';

const Testimonials = () => {

    const testimonialdata = [{

        id: 1,
        user: 'kevin tensain',
        des: 'nesciunt repellat eius. Molestiae sapiente beatae rem omnis suscipit possimus alias voluptatum itaque voluptatibus.'

    },
    {

        id: 2,
        user: 'Suniyo',
        des: 'nesciunt repellat eius. Molestiae sapiente beatae rem omnis suscipit possimus alias voluptatum itaque voluptatibus.'

    },
    {

        id: 3,
        user: 'Peter',
        des: 'nesciunt repellat eius. Molestiae sapiente beatae rem omnis suscipit possimus alias voluptatum itaque voluptatibus.'

    },
    ]
    return (

        <section className="testimonial-wrapper space-y-8 my-[2rem]" >
            <h2 className='text-center'>Testimonials</h2>
            <Swiper
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {testimonialdata.map((data, index) => (
                    <SwiperSlide key={index} className='space-y-4 px-[1rem] lg:px-[12rem] mb-20'>
                        <span className='text-primary'><FaQuoteLeft size={40} /></span>
                        <p className='text-[26px]'>{data.des}</p>
                        <div className="f-between">
                            <h3>{data.user}</h3>
                            <span><FaUser /></span>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>

    );
}
export default Testimonials;