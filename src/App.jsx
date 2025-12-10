import React from 'react'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import Hero from './components/Hero'
import Featured from './components/Featured'
import Footer from './components/Footer'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <Featured />
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App