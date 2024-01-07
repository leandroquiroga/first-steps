import React from 'react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'About Page',
  description: 'This page is infomative',
}

function AboutPage() {
  return (
    <>
      <span className='text-5xl'>
        About Page
      </span>
    </>
  )
}

export default AboutPage