// import "./App.css";
import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/navbar";
import HomePage from "./components/pages/index";
import ProductPage from "./components/pages/product";
import ContactPage from "./components/pages/contact";

function Header() {
  return (
    <header>
      <Nav />
    </header>
  );
}

function Footer() {
  return <footer>© Karolina Szymanska 2024</footer>;
}

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function Home() {
  return <HomePage />;
}

function Contact() {
  return <ContactPage />;
}

function Product() {
  return <ProductPage />;
}

function RouteNotFound() {
  return <div>Page not found</div>;
}

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          {/* <Route path="cart" element={<Cart />} /> */}
          <Route path="product/:id" element={<Product />} />
          <Route path="*" element={<RouteNotFound />} />
          {/* <Route path="success" element={<Success />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
