import { React, useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import Products from "./components/Products";

// The function that makes the fetch request to the Products API
import { getProducts } from "./services/getProducts";
import Footer from "./components/Footer";

function App() {
  // use the products variable to read all of your products
  // and display them on your page
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const products = await getProducts();
      setProducts(products);
    };

    loadData();
  }, []);

  return (
    <>
      <div className="container">
        <NavBar />
        <HeroSection />
        <Products products={products} />
      </div>
      <Footer />
    </>
  );
}

export default App;
