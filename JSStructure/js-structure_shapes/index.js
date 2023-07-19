console.clear();

import { Circle } from "./components/Circle/circle.js";
import { Pentagon } from "./components/Pentagon/Pentagon.js";
import { Square } from "./components/Square/Square.js";

const root = document.getElementById("root");

const circleElement = Circle();

const pentagonElement = Pentagon();

const squareElement = Square();
root.append(circleElement, squareElement, pentagonElement);
