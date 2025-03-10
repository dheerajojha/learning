import React from 'react'
import { Link } from 'react-router-dom'
import { LuDot } from "react-icons/lu";
const Explore = () => {
    return (
        <section className="explore-wrapper grid-2 bg-graydark">
            <div className="col">
                <img src="/train.webp" className=' w-full object-cover max-h-[400px]' alt="left img" />
            </div>

            <div className="col space-y-8">
                <div className="heading space-y-4">
                    <h2>Manage Learning with NetCom365 Portal</h2>
                    <p>NetCom365 is a highly scalable, dedicated in-house learning management portal.
                        Designed to elevate your team’s performance, this virtual training platform
                        provides a comprehensive 360-degree view of your team’s upskilling journey.</p>
                </div>

                <ul>
                    <li className='f-row'><LuDot />Get real-time insights with streamlined progress tracking</li>
                    <li className='f-row'><LuDot />Track team's progress with engagement reporting</li>
                    <li className='f-row'><LuDot />A rich Virtual Instructor-Led Training (vILT) environment </li>
                    <li className='f-row'><LuDot />Impactful learning with pre and post-training assessment</li>
                </ul>

                <button className="cta-outline w-full md:max-w-[200px]">
                    <Link to=''>Explore more</Link>
                </button>

            </div>
        </section>
    )
}

export default Explore