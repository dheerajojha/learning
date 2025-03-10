// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { CiSearch } from "react-icons/ci";
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom'

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay, } from 'swiper/modules';

const HomeBanner = () => {

    const bannerdata = [{

        id: 1,
        title: 'Accelarate your growth at ease',
        des: 'nesciunt repellat eius. Molestiae sapiente beatae rem omnis suscipit possimus alias voluptatum itaque voluptatibus.'

    },
    {

        id: 2,
        title: 'Pace Up your growth at ease',
        des: 'nesciunt repellat eius. Molestiae sapiente beatae rem omnis suscipit possimus alias voluptatum itaque voluptatibus.'

    },
    {

        id: 3,
        title: 'Case Up your growth at ease',
        des: 'nesciunt repellat eius. Molestiae sapiente beatae rem omnis suscipit possimus alias voluptatum itaque voluptatibus.'

    },
    ]

    return (

        <div className="homebanner-wrapper h-[80vh] w-full f-center bg-tertiary text-white p-8">
            <Swiper
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                mousewheel={true}
                autoplay={true}
                modules={[Navigation, Pagination, Mousewheel, Autoplay]}>
                {bannerdata.map((data, index) => (
                    <SwiperSlide key={index} className='space-y-14 mb-20'>
                        <article>
                            <h1>{data.title}</h1>
                            <p className='hidden md:flex'>{data.des}</p>
                        </article>
                        <form action='' className='f-row w-full md:w-[50%] bg-white'>
                            <input type="text" placeholder='Search' className='w-full p-3 text-primary' />
                            <span className='bg-primary text-white p-2'><CiSearch size={30} /></span>
                        </form>
                        <div className="buttons space-y-4">
                            <button className='cta w-full md:max-w-[280px]'>
                                <Link to='/course-catelog'>Book Free Consultation</Link></button>
                            <button className='cta-white w-full md:w-[40%] lg:w-[20%] md:hidden'>
                                <Link to='/course-catelog'>Contact us</Link></button>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>

    );
}
export default HomeBanner