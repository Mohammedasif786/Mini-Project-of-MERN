import { Button } from "@mui/material";
import { turnContext } from "../context/turnContext";

function FlipCoin() {
  const TURN = turnContext();
  const { collectionTruthandDare } = turnContext();

  const handleRandomze = () => {
    const hold = Math.floor(Math.random() * TURN?.TruthDare.length);
    TURN.setTurn(hold ? true : false);
    if (hold) collectionTruthandDare.setTruth((prev) => [...prev, 1]);
    else collectionTruthandDare.setForbidden((prev) => [...prev, 1]);
  };

  return (
    <>
      <Button
        variant="contained"
        startIcon={"🌟"}
        onClick={handleRandomze}
        // onClick={() => {
        //   console.log(randomize);
        // }}
      >
        Flip the Coin
      </Button>
    </>
  );
}

export default FlipCoin;
