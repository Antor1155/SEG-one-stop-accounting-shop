import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/about'>about</Link>
        <Link to='/others'>other</Link>

        <Link to="/about/new"> New about</Link>
        <Link to="/about/112"> about post</Link>
    </div>
  )
}
