import React from 'react'
import Navbar from './components/Navbar'
import { ThemeProvider } from './components/theme-provider'
import Hero from './components/Hero'
import Featured from './components/Featured'

const App = () => {
  return (
    <ThemeProvider>
      <div>
        <Navbar />
        <Hero />
        <Featured />
      </div>
    </ThemeProvider>
  )
}

export default App