import React from 'react'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'
import Explore from './components/Explore'

const Homepage = () => {
    return (
        <div>
            <Hero />
            <Featured />
            <Explore />
            <Footer />
        </div>
    )
}

export default Homepage