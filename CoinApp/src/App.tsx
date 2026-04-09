import FlipCoin from "./Components/FlipCoin";
import Coin from "./Components/Coin";
import { useState } from "react";
import { TurnContext } from "./context/turnContext";

function App() {
  const [turn, setTurn] = useState(true);
 const TruthDare = [false, true];
  // const [turn, setTurn] = useState(true);
  // const Hold = turnContext();
  return (
    <TurnContext.Provider value={{ turn, setTurn , TruthDare}}>
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
