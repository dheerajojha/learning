import React, { useState } from 'react'
import { RiClockwise2Fill, RiStackFill } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
const Course = () => {
    const [search, setSearch] = useState('')
    const [activetab, setactivetab] = useState(1)
    const certificateData = [{
        title: 'Compile Network',
        category: 'core'
    },
    {
        title: 'Json Network',
        category: 'Inetral'
    },
    {
        title: 'Intern Network',
        category: 'Proffession'
    },
    ]

    const courseData = [{
        title: 'Ai Cloud',
        category: 'Intermediate Level',
        time: 4,
    },
    {
        title: 'Ai Data',
        category: 'Intermediate Level',
        time: 5,
    },
    {
        title: 'Ai Developer',
        category: 'Intermediate Level',
        time: 4,
    },
    ]
    return (
        <section className="course-wrapper space-y-4 bg-graydark">
            <div className="tab f-row">
                <button className={`${activetab == 1 ? 'cta' : 'cta-outline'} cursor-pointer w-[50%] md:max-w-[120px]`} onClick={() => setactivetab(1)}>Course</button>
                <button className={`${activetab !== 1 ? 'cta' : 'cta-outline'} cursor-pointer w-[50%] md:max-w-[120px]`} onClick={() => setactivetab(2)}>Certificate</button>
            </div>

            {/* row start */}

            {activetab == 1 ? <div className="row flex flex-col md:flex-row gap-4">
                <div className="col flex-[30%] space-y-6">
                    <h3>Filter</h3>
                    <div className='filter-data bg-white p-4'>
                        <small className='block'>Vendor</small>
                        <select name="" id="">
                            <option value="">Microsoft</option>
                            <option value="">Techstack</option>
                        </select>
                    </div>
                </div>
                <div className="col flex-[70%] space-y-6">
                    <div className="flex flex-col md:flex-row md:justify-between gap-4 mb:gap-0">
                        <h4>920 Courses</h4>
                        <form action="" className='f-row bg-white p-2 rounded-md w-full md:w-[30%]' >
                            < CiSearch size={24} />
                            <input type="text" className='w-full' placeholder='search Course' onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>

                    <div className="card-container space-y-4">
                        {courseData.map((item, index) => (
                            <div className="card p-4 bg-white" key={index}>
                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <div className="f-row">
                                        <div className="f-row">
                                            <span>< RiStackFill /></span>
                                            <p>{item.category}</p>
                                        </div>
                                        <div className="f-row">
                                            <span>< RiClockwise2Fill /></span>
                                            <p>{item.time}</p>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div> : <div className="row flex flex-col md:flex-row gap-4">
                <div className="col flex-[30%] space-y-6">
                    <h3>Filter</h3>
                    <div className='filter-data bg-white p-4'>
                        <small className='block'>Vendor</small>
                        <select name="" id="">
                            <option value="">Microsoft</option>
                            <option value="">Techstack</option>
                        </select>
                    </div>
                </div>
                <div className="col flex-[70%] space-y-6">
                <div className="flex flex-col md:flex-row md:justify-between gap-4 mb:gap-0">
                        <h4>920 Certification</h4>
                        <form action="" className='f-row bg-white p-2 rounded-md w-full md:w-[30%]' >
                            < CiSearch size={24} />
                            <input type="text" className='w-full' placeholder='Search Certificate' onChange={(e) => setSearch(e.target.value)} />
                        </form>
                    </div>

                    <div className="card-comtainer space-y-4">
                        {certificateData.map((item, index) => (
                            <div className="card p-4 bg-white" key={index}>
                                <div className="card-body">
                                    <h5>{item.title}</h5>
                                    <div className="f-row">
                                        <span>< RiStackFill /></span>
                                        <p>{item.category}</p>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>}
        </section>
    )
}

export default Course