import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import { Pagination, Autoplay, } from 'swiper/modules';
const Relatedsolution = () => {
    const solutiondata = [{
        title: 'tech field such',
        description: 'neque quis quam velit. Ipsum non fugit ratione inventore iste autem ex molestias quas sed.quam velit. Ipsum non fugit ratione inv'
    },
    {
        title: 'Fetch field such',
        description: 'neque quis quam velit. Ipsum non fugit ratione inventore iste autem ex molestias quas sed.quam velit. Ipsum non fugit ratione inv'
    },
    {
        title: 'Info field such',
        description: 'neque quis quam velit. Ipsum non fugit ratione inventore iste autem ex molestias quas sed.quam velit. Ipsum non fugit ratione inv'
    },
    ]
    return (
        <section className="relatedsolution-wrapper bg-tertiary">
            <h2 className='t-center text-white'>Related Solution</h2>
            <div className="card-container grid-3">
                {solutiondata.map((item, index) => (
                    <div className="card p-4 rounded-md bg-white hidden md:block" key={index}>
                        <div className="card-body">
                            <h3>{item.title}</h3>
                            <p>{item.description}</p>
                        </div>
                    </div>
                ))}
            </div>

            <Swiper pagination={true} autoplay={true}
                modules={[Pagination, Autoplay]}>
                {solutiondata.map((item, index) => (
                    <SwiperSlide key={index}>
                        <div className="card block md:hidden p-4 rounded-md bg-white card border mb-10">
                            <div className="card-body">
                                <h3>{item.title}</h3>
                                <p>{item.description}</p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    )
}

export default Relatedsolution