import React from 'react'
import { Breadcrumb } from '../components/common'
import {Banner,Popularcourses,Story, Resources } from '../components/industry'

const Industry = () => {
  return (
    <>
      {/* <Breadcrumb title='Fedral' /> */}
      <Banner/>
      <Popularcourses/>
      <Story/>
      <Resources/>
    </>
  )
}

export default Industry