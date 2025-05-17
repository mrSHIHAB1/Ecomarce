import React from 'react'
import Banner from './Banner'
import Featured from './Featured'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
    <Banner></Banner>
    <Featured></Featured>
    <Link to={'/ProductPage'}><button className='btn btn-primary'>click</button></Link>
    
        </>
  )
}

export default Home