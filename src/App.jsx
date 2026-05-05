import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import BlogDetail from './pages/BlogDetail'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
