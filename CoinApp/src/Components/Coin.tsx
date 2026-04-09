import { turnContext } from "../context/turnContext";

function Coin() {
  const { turn } = turnContext();

  const HEAD = "./public/OneRupee.png";
  const TAIL = "./public/oneTail.png";

  return (
    <div className=" flex flex-col justify-center items-center">
      {/* <img src="./public/OneRupee.png" hidden={turn} alt="" />
      <img src="./public/oneTail.png" hidden={false} width={400} alt="" />
      <Score /> */}
      <img
        src={turn ? HEAD : TAIL}
        draggable={false}
        className="select-none"
        width={400}
        alt=""
      />
      <Score />
    </div>
  );
}

// task of Out of N flips, there have been K heads and T tails.
// N = K + T (total flips = heads + tails)
// where k is the no of Heads
// where T is the no of Tails

function Score() {
  const { counting2 } = turnContext();

  return (
    <>
      <p className=" text-center text-2xl font-bold tracking-wider mt-4 border-2 rounded-xl p-4">

        Out of {counting2.total()}, there have been {counting2.truth} Heads and{" "}
        {counting2.forbidden} tails

        {/* Out of {counting2.total()}, there have been {collectionTruthandDare.truth} Heads and{" "}
        {collectionTruthandDare.forbidden} tails */}

      </p>
    </>
  );
}

export default Coin;
