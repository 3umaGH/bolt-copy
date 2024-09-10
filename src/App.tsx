import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainPage from './pages/MainPage'
import { Restaurant } from './pages/Restaurant'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/restaurant/:id' element={<Restaurant />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
