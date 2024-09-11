import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { Restaurant } from './pages/Restaurant'
import { Disclaimer } from './components/Disclaimer'
import ScrollToTop from './components/common/ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <Disclaimer />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
