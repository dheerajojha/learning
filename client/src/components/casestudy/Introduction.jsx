import React from 'react'

const Introduction = () => {
    return (
        <section className="introduction-wrapper flex flex-col md:flex-row">
            <div className="col flex-[3] mb-4 md:mb-0">
                <p>NetCom Learning upskilled the workforce of a US Armed Forces Group via a blended training solution on Cisco technology tracks to manage new Cisco equipment and install robust network infrastructure. Let’s look closely at the execution of this comprehensive training solution that supported the ongoing transformation of the US Army!</p>
            </div>
            <div className="col flex-[1] ">
                <article className='p-4 border space-y-4'>
                    <h3>Client Overview</h3>
                    <p>A US Armed Forces Group responsible for improving the career management potential of Army soldiers, having more than 40 operations throughout the United States</p>
                    <h3>Industry</h3>
                    <p>Federal, Human Resource Mangement</p>
                    <h3>Organisation size</h3>
                    <p>17,000+ employees</p>
                </article>
            </div>
        </section>
    )
}

export default Introduction