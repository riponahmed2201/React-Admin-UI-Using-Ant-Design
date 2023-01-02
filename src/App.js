import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Resetpassword from './pages/Resetpassword';
import Forgotpassword from './pages/Forgotpassword';
import MainLayout from './components/MainLayout';
import Enquiries from './pages/Enquiries';
import Bloglist from './pages/Bloglist';
import Blogcategorylist from './pages/Blogcategorylist';
import Orders from './pages/Orders';
import Customers from './pages/Customers';
import Colorlist from './pages/Colorlist';
import Categorylist from './pages/Categorylist';
import Brandlist from './pages/Brandlist';
import Productlist from './pages/Productlist';
import Addblog from './pages/Addblog';
import Addblogcategory from './pages/Addblogcategory';
import Addcolor from './pages/Addcolor';
import Addcategory from './pages/Addcategory';
import Addbrand from './pages/Addbrand';
import Addproduct from './pages/Addproduct';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/reset-password" element={<Resetpassword />} />
        <Route path="/forgot-password" element={<Forgotpassword />} />
        <Route path="/admin" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path='enquiries' element={<Enquiries />} />
          <Route path='blog-list' element={<Bloglist />} />
          <Route path='blog' element={<Addblog />} />
          <Route path='blog-category-list' element={<Blogcategorylist />} />
          <Route path='blog-category' element={<Addblogcategory />} />
          <Route path='orders' element={<Orders />} />
          <Route path='customers' element={<Customers />} />
          <Route path='color-list' element={<Colorlist />} />
          <Route path='color' element={<Addcolor />} />
          <Route path='category-list' element={<Categorylist />} />
          <Route path='category' element={<Addcategory />} />
          <Route path='brand-list' element={<Brandlist />} />
          <Route path='brand' element={<Addbrand />} />
          <Route path='product-list' element={<Productlist />} />
          <Route path='product' element={<Addproduct />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
