import React from 'react'
import Navbar from './Navbar'
import HomeScreen from './HomeScreen'

const Home = ({setSearch,openvoicesearch})=> {
  return (
    <div>
        <Navbar/>
        <HomeScreen setSearch={setSearch} openvoicesearch={openvoicesearch}/>
    </div>
  )
}

export default Home