import React from 'react'
import { LuDot } from "react-icons/lu";
const Banner = () => {
    return (
        <section className='casestudy-banner flex flex-col md:flex-row  bg-tertiary text-white'>
            <div className="col space-y-6 flex-[60%]">
                <h2>US Armed Forces Group Upskilled Its Teams On Latest Network Technologies And Capabilities With Authorized Cisco Training</h2>
                <div className="f-row">
                    <p className='f-row'><LuDot />Cisco Enterprise </p>
                    <p className='f-row'><LuDot />TrackNetworking</p>
                </div>
                <button className='cta w-full md:w-[10%]'>Learn more</button>
            </div>
            <div className="col hidden md:flex-[40%]">
                <img src='/pic1.webp' className='w-full max-h-[300px] object-cover rounded-md' alt="" />
            </div>
        </section>
    )
}

export default Banner