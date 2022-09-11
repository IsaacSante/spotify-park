import dynamic from "next/dynamic";
import { draw, setup } from "../p5/base.p5";
import { useRef, useEffect } from "react";

const Sketch = dynamic(import("react-p5"), { ssr: false });

function App() {
  const canvasRef = useRef(null);

  useEffect(() => {});
  return (
    <>
      <Sketch setup={setup} draw={draw} />
    </>
  );
}

export default App;
