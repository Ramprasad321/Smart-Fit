import { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";

function Result() {
  const style = localStorage.getItem("style");

  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }, []);

  // Simple style filtering logic
  const filteredProducts = products.filter((item) => {
    if (style === "casual") {
      return item.category === "men's clothing";
    }
    if (style === "formal") {
      return item.category === "jewelery";
    }
    return true;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2 style={{ textAlign: "center" }}>
        Your Recommended Outfit 👔
      </h2>

      <div style={containerStyle}>
        {filteredProducts.map((item) => (
          <ProductCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

const containerStyle = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap"
};

export default Result;



