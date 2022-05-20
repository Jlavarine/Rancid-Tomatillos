import React from 'react'
import './NoPageFound.css'
import { Link } from 'react-router-dom'
const NoPageFound = () => {
  return (
    <div className='fof-box'>
      <p className='fof-message'>That url does not exist :/</p>
      <Link to='/' className='redirect'>Click here to go back to the homepage</Link>
    </div>
  )
}
export default NoPageFound
