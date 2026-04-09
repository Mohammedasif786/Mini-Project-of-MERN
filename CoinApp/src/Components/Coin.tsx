import { useState } from "react";

function Coin() {
  const [turn, setTurn] = useState(true);

  const handleImages = () => {
        setTurn(!turn);
  }
  const HEAD = './public/OneRupee.png';
  const TAIL = './public/oneTail.png';

  return (
    <div>
      {/* <img src="./public/OneRupee.png" hidden={turn} alt="" />
      <img src="./public/oneTail.png" hidden={false} width={400} alt="" />
      <Score /> */}
      <img src={turn? HEAD: TAIL} hidden={!turn} alt="" />
      <Score />
    </div>
  );
}

// task of Out of N flips, there have been K heads and T tails.
// N = K + T (total flips = heads + tails)
// where k is the no of Heads
// where T is the no of Tails

function Score() {
  return (
    <>
      <p>
        Out of {0}, there have been {0} Heads and {0} tails
      </p>
    </>
  );
}

export default Coin;
