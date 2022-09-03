import dynamic from "next/dynamic";
import { draw, setup } from "../p5/base.p5";

const Sketch = dynamic(import("react-p5"), { ssr: false });

function App() {
  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}

export default App;
