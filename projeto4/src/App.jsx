import './App.css'
import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import DuvidasPage from './pages/DuvidasPage'
import Footer from './components/Footer'
import { ToastContainer } from 'react-toastify'

import 'react-toastify/dist/ReactToastify.css';
import CadastroPage from './pages/CadastroPage'
import HomePage from './pages/HomePage'
import ProdutosPage from './pages/ProdutosPage'
import SobreNos from './pages/SobreNos'
function App() {

  return (
    <Router>
     <Header/>
     <main>
      <Routes>  
        <Route path='/cadastro' element={<CadastroPage/>}/>
        <Route path='/duvidas' element={<DuvidasPage/>}/>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/produtos' element={<ProdutosPage/>}/>
        <Route path='/sobreNos' element={<SobreNos/>}/>
      </Routes>
     </main>
    <Footer/>
    <ToastContainer position='top-right' autoClose={3000}/>
    </Router>
      
  )
}

export default App
