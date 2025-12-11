import { Routes, Route } from "react-router-dom"
import Homepage from "./Homepage"
import Blogpost from "./components/Blogpost"
import Navbar from "./components/Navbar"
import { ThemeProvider } from "./components/theme-provider"

const App = () => {
  return (
    <>
      <ThemeProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/blog/:id" element={<Blogpost />} />
        </Routes>
      </ThemeProvider>

    </>

  )
}

export default App