import Space from "../src/space.mjs";
import BasicShapes from "../src/shapes.mjs";

function main() {
    let ms = new Space();
    let s = new BasicShapes();
    s.makeSquare({filled: false});
    s.makeCircle();
}

window.addEventListener("load", main);