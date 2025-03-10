import React from 'react'
import { RiArrowRightSLine } from "react-icons/ri";
import {Link} from "react-router-dom"
const Populartraining = () => {
    const trainingData = [{
        id: 1,
        title: 'adobe'
    },
    {
        id: 2,
        title: 'adobe'
    },
    {
        id: 3,
        title: 'adobe'
    },
    {
        id: 4,
        title: 'adobe'
    },
    {
        id: 5,
        title: 'adobe'
    },
    {
        id: 6,
        title: 'adobe'
    },
    {
        id: 7,
        title: 'adobe'
    },
    {
        id: 8,
        title: 'adobe'
    },
    ]
    return (
        <section className='popular-training-wrapper bg-gray-50 space-y-8'>
            <h2>Popular Technology & Business Training</h2>

            <div className="grid-3 md:bg-white p-8 md:border gap-4">
                <ul className='space-y-4'>
                    <li className='f-between'>
                        <h4>Microsoft</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>

                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                </ul>

                <ul className='space-y-4'>
                    <li className='f-between'>
                        <h4>Microsoft</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>

                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                </ul>

                <ul className='space-y-4'>
                    <li className='f-between'>
                        <h4>Microsoft</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>

                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                    <li className='f-between'>
                        <h4>Ai & Data</h4>
                        <span><RiArrowRightSLine /></span>
                    </li>
                </ul>
            </div>

            <div className="f-center  text-primary">
                <Link to='/' >View more</Link>
                <span>< RiArrowRightSLine /></span>
            </div>
        </section>
    )
}

export default Populartraining