import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import Blogs from "./Pages/Blogs/Blogs";
import About from "./Pages/About/About";
import Login from "./Pages/Login/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Login/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import Bikes from "./Pages/Home/Bikes/Bikes";
import RidingKits from "./Pages/Home/RidingKits/RidingKits";
import Spares from "./Pages/Home/Spares/Spares";
import RequireAuth from "./Pages/RequireAuth/RequireAuth";
import Inventory from "./Pages/Inventory/Inventory";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/blogs" element={<Blogs />}></Route>
        <Route path="/bikes" element={<Bikes />}></Route>
        <Route path="/kits" element={<RidingKits />}></Route>
        <Route path="/spares" element={<Spares />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/inventory/:inventoryId" element={<RequireAuth>
          <Inventory/>
        </RequireAuth>}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
