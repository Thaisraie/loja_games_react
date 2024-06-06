import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DeletarCategoria from './componets/categorias/deletarcategorias/DeletarCategoria';
import FormCategoria from './componets/categorias/formcategoria/FormCategoria';
import ListarCategorias from './componets/categorias/listarcategorias/ListarCategorias';
import Footer from './componets/footer/Footer';
import Navbar from './componets/navbar/Navbar';
import Home from './pages/home/Home';
import DeletarProduto from './componets/produtos/deletarprodutos/DeletarProdutos';
import FormularioProduto from './componets/produtos/formproduto/FormularioProduto';
import ListarProdutos from './componets/produtos/listarprodutos/ListarProdutos';

function App() {

  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-h-[90vh] bg-gray-200'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/categorias" element={<ListarCategorias />} />
            <Route path="/cadcategoria" element={<FormCategoria />} />
            <Route path="/editarcategoria/:id" element={<FormCategoria />} />
            <Route path="/deletarcategoria/:id" element={<DeletarCategoria />} />
            <Route path="/produtos" element={<ListarProdutos />} />
            <Route path="/cadastrarproduto" element={<FormularioProduto />} />
            <Route path="/editarproduto/:id" element={<FormularioProduto />} />
            <Route path="/deletarproduto/:id" element={<DeletarProduto />} />
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App
