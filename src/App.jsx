import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Faq from "./pages/faq";
import Aloqa from "./pages/aloqa";
import AddElon from "./pages/addElon";
import Register from "./pages/register";
import Login from "./pages/login";
import ProductDetail from "./pages/productDetail";
import Profile_dashboard from "./pages/profile_dashboard";
import Profile_approved from "./pages/profile_approved";
import Profile_pending from "./pages/profile_pending";
import Profile_favorites from "./pages/profile_favorits";
import Filter from "./pages/filter";
import NotFound from "./pages/notFound";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/aloqa" element={<Aloqa />} />
        <Route path="/create" element={<AddElon />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product-detail/:id" element={<ProductDetail />} />
        <Route path="/profile/dashboard" element={<Profile_dashboard />} />
        <Route path="/profile/approved" element={<Profile_approved />} />
        <Route path="/profile/pending" element={<Profile_pending />} />
        <Route path="/profile/favorites" element={<Profile_favorites />} />
        <Route path="/filter/:param1/:param2" element={<Filter />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
