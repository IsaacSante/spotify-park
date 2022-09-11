import type p5Type from "p5";
import Bubble from "./bubble";

let bubbles = [];
let maxBubbles = 20;
let resizeTimeout: NodeJS.Timeout;

const resize = (p5: p5Type, canvasParentRef: Element, width, height) => {
  p5.createCanvas(width, height).parent(canvasParentRef);
};

export const setup = (p5: p5Type, canvasParentRef: Element): void => {
  let width = window.innerWidth;
  let height = window.innerHeight;
  p5.createCanvas(width, height).parent(canvasParentRef);

  for (let i = 0; i < maxBubbles; i++) {
    bubbles[i] = new Bubble(p5, width, height);
  }

  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout);

    resizeTimeout = setTimeout(
      () => resize(p5, canvasParentRef, width, height),
      50
    );
  });
};

export const draw = (p5: p5Type): void => {
  p5.background(255, 20);
  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move(p5);
    bubbles[i].display(p5);
  }
};
