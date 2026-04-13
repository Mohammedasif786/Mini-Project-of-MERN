import Box from "./Box";

function BoxContainer() {
  // all grid ssystem alignment!
  const ThreeIntoSixGrid = () => {
    const box = [];
    for (let index = 0; index < 4; index++) {
      for (let j = 0; j < 6; j++) {
        box.push(<Box key={`${index}-${j}`} />);
      }
    }
    return box;
  };

  const WithUsingMapFunc = () => {
    const grid = new Array(30).fill(0);
    return grid.map((_,i) => {
      return <Box key={i} />
    })
  }

  return (
    <div className="grid grid-cols-6 text-center font-bold p-2 grid-rows-3 gap-1">
      {/* <ThreeIntoSixGrid /> */}
      <WithUsingMapFunc />
    </div>
  );
}

export default BoxContainer;
