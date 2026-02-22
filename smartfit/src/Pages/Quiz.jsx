import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Quiz() {
  const [style, setStyle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = () => {
    localStorage.setItem("style", style);
    navigate("/result");
  };

  return (
    <div>
      <h2>Select Your Style</h2>

      <select onChange={(e) => setStyle(e.target.value)}>
        <option value="">Select</option>
        <option value="casual">Casual</option>
        <option value="formal">Formal</option>
      </select>

      <br /><br />

      <button onClick={handleSubmit}>
        Get Recommendation
      </button>
    </div>
  );
}

export default Quiz;

