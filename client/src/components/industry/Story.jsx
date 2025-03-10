import React from 'react'
import { Link } from 'react-router-dom'
const Story = () => {

    return (
        <section className="story-wrapper bg-tertiary">
            <h2 className='text-white t-center'>How Our Solutions Drive Industry-Specific Results</h2>

            <div className="row grid-2 bg-white p-4">
                <div className="col space-y-8">
                    <h3>US Armed Forces Group Upskilled Its Teams On Latest Network Technologies And Capabilities With Authorized Cisco Training</h3>
                    <p>Which training solution to choose when your organization needs to establish a robust network infrastructure? Watch this video by NetCom Learning to witness how the workforce of a US Armed Forces Group was upskilled on the latest Cisco technologies with authorize</p>
                    <button className='cta-outline'>
                        <Link>Read more</Link>
                    </button>
                </div>
                <div className="col">
                    <img src='/talent.webp' className='w-full object-cover max-h-[320px] border' alt="" />
                </div>
            </div>

        </section>
    )
}

export default Story