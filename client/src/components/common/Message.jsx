import React, { useState } from 'react'
import { FaMessage } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const Message = () => {
    const [active, setactive] = useState(false)
    return (
        <div className="message-wrapper fixed z-10 right-2 bottom-24 lg:bottom-2 bg-primary p-4 text-white rounded-md">
            <span onClick={() => setactive(!active)} className='cursor-pointer'>{active ?<IoMdClose/>:<FaMessage/>}</span>
            {active &&
                <article className='absolute right-10 bottom-20 bg-white text-primary p-4'>
                    <p>Hey bro wassup!</p>
                </article>}
        </div>
    )
}

export default Message