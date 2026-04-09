import { Button } from "@mui/material";
import { turnContext } from "../context/turnContext";

function FlipCoin() {
  const TURN = turnContext();
  
  const handleRandomze = () => {
    // const hold = Math.floor(Math.random() * TruthDare.length);
    const hold = Math.floor(Math.random() * TURN?.TruthDare.length);
    console.log(hold);
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
