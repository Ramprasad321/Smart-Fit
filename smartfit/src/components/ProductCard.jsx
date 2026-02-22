function ProductCard({ item }) {
  return (
    <div style={cardStyle}>
      <img
        src={item.image}
        alt={item.title}
        style={imageStyle}
      />

      <h3>{item.title}</h3>
      <p>₹{item.price}</p>

      <button style={buttonStyle}>
        Add to Cart
      </button>
    </div>
  );
}

const cardStyle = {
  width: "220px",
  padding: "15px",
  margin: "15px",
  borderRadius: "10px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
  textAlign: "center",
  backgroundColor: "white"
};

const imageStyle = {
  width: "100%",
  height: "180px",
  objectFit: "contain",
  borderRadius: "8px",
  marginBottom: "10px"
};

const buttonStyle = {
  padding: "8px 15px",
  backgroundColor: "black",
  color: "white",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer"
};

export default ProductCard;

