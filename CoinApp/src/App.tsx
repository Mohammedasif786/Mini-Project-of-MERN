import FlipCoin from "./Components/FlipCoin";
import Coin from "./Components/Coin";
import { useState } from "react";
import { TurnContext } from "./context/turnContext";

function App() {
  const [turn, setTurn] = useState(true);
  const TruthDare = [false, true];
  const [forbidden, setForbidden] = useState<number[]>([]);
  const [truth, setTruth] = useState<number[]>([]);

  const collectionTruthandDare = {
    forbidden,
    setForbidden,
    truth,
    setTruth,
  };

  const counting2 = {
    forbidden: forbidden.reduce((acc, value) => acc + value, 0),
    truth: truth.reduce((acc, value) => acc + value, 0),
    total: () => (counting2.forbidden ?? 0) + (counting2.truth ?? 0),
  };

  return (
    <TurnContext.Provider
      value={{ turn, setTurn, TruthDare, counting2, collectionTruthandDare }}
    >
      <div className="grid place-items-center h-screen">
        <h1 className="text-3xl border-2 font-black tracking-wider p-4">
          Let's Flip Coin!
        </h1>
        <FlipCoin />
        <Coin />
      </div>
    </TurnContext.Provider>
  );
}

export default App;
