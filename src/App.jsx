import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import Contact from './pages/Contact';
import Admin from './pages/Admin';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import ReserveaTable from './pages/Reserveatable';
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
          {/* <Route path="/Reservetable" element={<ReserveTable />} /> */}
        </Route>
        <Route path="/Reserveatable" element={<ReserveaTable />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;