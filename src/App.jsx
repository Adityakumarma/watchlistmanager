import Header from '/Components/Header';
import Footer from '/Components/Footer';
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from '../Pages/Home';
import Addshow from '../Pages/Addshow';
import Editshow from '../Pages/Editshow';
import Watchlist from '../Pages/Watchlist';
import Pagenotfound from '../Pages/Pagenotfound';

function App() {


  return (
    <>
      <Header />
      <Routes>

        <Route path='/' element={<Home />} />
        <Route path='/addshow' element={<Addshow />} />
        <Route path="/edit/:id" element={<Editshow />} />
        <Route path='/watchlist' element={<Watchlist />} />
        <Route path='/*' element={<Pagenotfound />} />

      </Routes>
      <Footer />

    </>
  )
}

export default App
