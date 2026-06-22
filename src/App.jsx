import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Reserve from "./pages/Reserve";
import MainLayout from "./Layouts/Mainlayout";


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
                <Route path="/Admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;