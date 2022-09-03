import type p5Type from "p5";

let x = 50;
let y = 50;

let resizeTimeout: NodeJS.Timeout;

// let canvasSize =
//   window.innerWidth > window.innerHeight
//     ? window.innerHeight - 1
//     : window.innerWidth;

const resize = (p5: p5Type, canvasParentRef: Element) => {
  p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(
    canvasParentRef
  );
};

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  p5.createCanvas(window.innerWidth, window.innerHeight, p5.WEBGL).parent(
    canvasParentRef
  );

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(() => resize(p5, canvasParentRef), 50);
  });
};

export const draw = (p5: p5Type): void => {
  let canvasX = window.innerWidth;
  let canvasY = window.innerHeight;
  p5.background(0, 1);
  p5.stroke(255, 0, 0);
  p5.ellipse(canvasX / 2, -canvasY / 2, 500, 500);
};
