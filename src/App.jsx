import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Aadmin';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Reserve from "./pages/Reserve";
import MainLayout from "./Layouts/Mainlayout";
import Aadmin from "./pages/Aadmin";


function App() {
  return (
    <BrowserRouter>

      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/Menu" element={<Menu />} />
          <Route path="/Offers" element={<Offers />} />
          <Route path="/Contact" element={<Contact />} />
          
        </Route>
        <Route path="/reserve" element={<Reserve />} />
        <Route path="/Aadmin" element={<Aadmin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;