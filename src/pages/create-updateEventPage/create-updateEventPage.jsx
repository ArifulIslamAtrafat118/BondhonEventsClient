import React from 'react'
import { Outlet } from 'react-router'
import Footer from '../../components/Footer/Footer'

function CreateUpdateEventPage() {
  return (
    <>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default CreateUpdateEventPage