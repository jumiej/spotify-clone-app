import React from 'react'

import MainPhase from './MainPhase'
import Sidebar from './widget/Sidebar'
import RightAside from './widget/RightAside'


const LandingPage = () => {
  return (
    <>

    <div className="main-container">
    <Sidebar />
    <MainPhase />
    <RightAside />
    </div>
   
    
    </>
  )
}

export default LandingPage