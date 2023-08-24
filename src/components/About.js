import React from 'react'
import { Outlet } from 'react-router-dom'

export default function About() {
  const data = "name is antor"
  return (
    <div>About

      <Outlet context={data}></Outlet>
    </div>
  )
}
