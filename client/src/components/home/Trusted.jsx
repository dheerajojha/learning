import React from 'react'
import CountUp from "react-countup"
const Trusted = () => {
    const trusteddata = [{
        title: 26,
        description: 'Years of Business Experience',
        icon: '+'
    },
    {
        title: 80,
        description: 'Companies servedOf',
        icon: '%'
    },
    {
        title: 40,
        description: 'Locations covered globally',
        icon: 'K+'
    },
    {
        title: 1300,
        description: 'Learners Trained',
        icon: '+'
    },
    {
        title: 1,
        description: 'Of Customers Recommended Us',
        icon: 'M+'
    },
    {
        title: 96,
        description: 'Certified Instructors',
        icon: '%'
    },
    {
        title: 3300,
        description: 'Microsoft Training Partne',
        icon: '+'
    },
    {
        title: 1,
        description: 'Of Fortune 1000 companies served',
        icon: '+'
    },
    ]
    return (
        <section className="trusted-wrapper space-y-8">
            <h2 className='t-center'>Why NetCom Learning is the Most Trusted Training Provider</h2>

            <div className="row grid-4">
                {trusteddata.map((item, index) => (
                    <div className="col p-4 text-center md:text-left" key={index}>
                        <CountUp duration={300} start={0} end={item.title} className='text-primary text-[40px] font-semibold'>{item.title}</CountUp>
                        <span className='text-primary text-[40px] font-semibold'>{item.icon}</span>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Trusted