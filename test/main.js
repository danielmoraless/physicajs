import Space from "../src/space.mjs";
import BasicShapes from "../src/shapes.mjs";
import All_Forces_Tests from "./forces.test.mjs";

function main() {
    // TESTS
    All_Forces_Tests();

    let ms = new Space();
    let s = new BasicShapes();
    s.makeSquare({filled: false});
    s.makeCircle();
}

window.addEventListener("load", main);