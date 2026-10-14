import Navbar from './components/Navbar'
import Portfolio from './components/Portfolio'
import Hero from './components/Hero'
import Articles from './components/Articles'
import Subscribe from './components/Subscribe'
import Footer from './components/Footer'
import Profile from './components/profile'
import Gallery from './components/gallery'
import Post from './components/post'
import Contact from './components/Contact'
import Login from './components/login'
import SignUp from './components/Signup'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <Routes>

        
        <Route path="/post" element={<Post />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/" element={
          <>
            <Navbar />
            <Hero />
            <Profile />
            <Articles />
            <Portfolio />
            <Gallery />
            <Subscribe />
            <Contact />
            <Footer />
          </>
        } />

      </Routes>
    </BrowserRouter>
  )
}

export default App