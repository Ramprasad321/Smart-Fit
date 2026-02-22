import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  return (
    <div style={pageStyle}>

      {/* NAVBAR */}
      <div style={navbarStyle}>
        <h2 style={logoStyle}>SMART-FIT</h2>
        <div>
          <button 
  className="navButton"
  onClick={()=>navigate("/login")}
>
  Login
</button>

<button 
  className="navButton"
  onClick={()=>navigate("/signup")}
>
  Signup
</button>
        </div>
      </div>

      {/* HERO */}
      <div style={heroContainer}>

        <div style={sliderWrapper}>
          <div className="sliderTrack">

            {/* SET 1 */}
            <div style={imageCard}><img src="https://i.pinimg.com/736x/dd/81/74/dd8174e5c86b9ec28d24b5e08b0b1f33.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/1200x/41/07/e8/4107e886809268cb4258abb72476405e.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/87/cf/30/87cf3004732bff2fad34deaf353fab81.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/0c/2c/9c/0c2c9c77113a9f3e0d33c4bd7cfbc211.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/ee/6c/c2/ee6cc2f0bf570f5449f85a728ec34664.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/40/aa/aa/40aaaae8b53c12845bfb46fb595c448d.jpg" style={imgStyle} /></div>

            {/* SET 2 (Duplicate) */}
            <div style={imageCard}><img src="https://i.pinimg.com/736x/dd/81/74/dd8174e5c86b9ec28d24b5e08b0b1f33.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/1200x/41/07/e8/4107e886809268cb4258abb72476405e.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/87/cf/30/87cf3004732bff2fad34deaf353fab81.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/0c/2c/9c/0c2c9c77113a9f3e0d33c4bd7cfbc211.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/ee/6c/c2/ee6cc2f0bf570f5449f85a728ec34664.jpg" style={imgStyle} /></div>
            <div style={imageCard}><img src="https://i.pinimg.com/736x/40/aa/aa/40aaaae8b53c12845bfb46fb595c448d.jpg" style={imgStyle} /></div>
          </div>
        </div>

        {/* Overlay */}
        <div style={overlayBox}>
          <h1 style={titleStyle}>WELCOME TO SMART-FIT</h1>
          <p style={paraStyle}>DESIGN  YOUR  OWN  OUTFIT!</p>
        </div>
      <div className="ballBtnWrapper">
  <button className="ballBtn"  onClick={()=>navigate("/quiz")}>
    <span className="btnText">Get Started</span>
  </button>
</div>

      </div>
    </div>
  );
}

/* ===== STYLES ===== */

const pageStyle = {
  height: "100vh",
  background: "linear-gradient(90deg, #040404, #ff0505, #040404)",
  overflow: "hidden"
};

const navbarStyle = {
  height: "70px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "0 50px",
  background: "rgba(6, 0, 0, 0.7)",
  backdropFilter: "blur(10px)",
  color: "white"
};

const logoStyle = {
  fontSize: "25px",
  marginBottom: "10px",
  letterSpacing: "20px",
  fontFamily: "Cinzel, serif",
  textTransform: "uppercase"
};

const navBtn = {
  padding: "8px 20px",
  marginLeft: "10px",
  borderRadius: "20px",
  border: "none",
  cursor: "pointer"
};

const heroContainer = {
  display: "flex",
  alignItems: "center",
  height: "calc(100vh - 70px)",
  position: "relative",
  overflow: "hidden"
};

const sliderWrapper = {
  width: "100%",
  overflow: "hidden",
  position: "absolute"
};

const sliderTrack = {
  display: "flex",
  width: "200%",
  gap: "40px",
  animation: "scroll 30s linear infinite"
};

const imageCard = {
  width: "400px",
  height: "550px",
  borderRadius: "15px",
  overflow: "hidden",
  boxShadow: "0 20px 40px rgba(0,0,0,0.5)"
};

const imgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover"
};

const overlayBox = {
  position: "absolute",
  top: "50%",
  left: "50%",
  border:"white 5px double",
  transform: "translate(-50%, -50%)",
  textAlign: "center",
  padding: "15px 50px",
  background: "rgba(18, 16, 16, 0.15)",
  backdropFilter: "blur(15px)",
  borderRadius: "0px 100px 0px 100px",
  color: "white",
  boxShadow: "0 10px 30px rgba(0,0,0,0.3)"
};
const fallButton = {
  position: "absolute",
  top: "65%",
  left: "50%",
  transform: "translate(-50%,-50%)",
  padding: "15px 30px",
  borderRadius: "50px",
  background: "white",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer",
  overflow: "hidden"
};

const titleStyle = {
  fontSize: "28px",
  marginBottom: "20px",
  letterSpacing: "10px",
  fontFamily: "Cinzel, serif",
  textTransform: "uppercase",
  color:"white"
};

const paraStyle ={
  // width:"100%",
  padding:"3px",
  fontSize:"10px",
  marginTop:"8px",
  wordSpacing:"20px",
  letterSpacing:"10px",
  color:"red",
  fontFamily: "Cinzel, serif",
  background:"rgba(0,0,0,0.6)",
  borderRadius:"0px 50px 0px 50px",
  fontWeight:"1000",
  border:"2px outset white"
}
const ctaButton = {
  padding: "12px 35px",
  borderRadius: "30px",
  background: "white",
  color: "black",
  fontWeight: "bold",
  cursor: "pointer"
};

export default Home;