import React from 'react'

const Breadcrumb = ({ title }) => {
    return (
        <nav class="breadcrumb px-[4%] py-6">
            <ol class="flex-row">
                <li>Home/</li>
                <li>{title}</li>
            </ol>
        </nav>
    )
}

export default Breadcrumb