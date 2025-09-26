import "../Cssfiles/Winner.css";
import { useState } from "react";
import Confetti from "react-confetti";
import { useWindowSize } from 'react-use';

function Winner(props) {
  const [winner, setWinner] = useState("");
  const [loading, setLoading] = useState(false);
  const [celebrate, setCelebrate] = useState(false);
  const { width, height } = useWindowSize();

  function pickone() {
    setLoading(true);
    setWinner("");
    setCelebrate(false);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * props.array.length);
      setWinner(props.array[randomIndex].name);
      setLoading(false);
      setCelebrate(true);

      // Stop confetti after 5 seconds
      setTimeout(() => setCelebrate(false), 5000);
    }, 1000);
  }

  return (
    <div className="winnercontainer">
      <button onClick={pickone}>Lucky Draw</button>

      {loading && <div className="loader"></div>}
      {winner && !loading && <p>Winner is {winner}</p>}

      {celebrate && <Confetti width={width} height={height} />}
    </div>
  );
}

export default Winner;
