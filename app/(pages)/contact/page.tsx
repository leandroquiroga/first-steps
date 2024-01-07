import React from 'react'
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact Page",
  description: "This page show contact information",
};

function ContactPage() {
  return (
    <>
      <span className='text-5xl'>
        Contact Page
      </span>
    </>
  )
}

export default ContactPage