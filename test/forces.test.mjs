import { Vector2, Gravity } from "../src/classical/mechanics/dynamics/forces.mjs";
import PhysicalBody from "../src/classical/body.mjs";

export default function All_Forces_Tests() {
    Test_Vector2();
    Test_Gravity(45);
}

function Test_Vector2() {
    let gotted = [];

    const expected = [
        {x: 50, y: 0},
        {x: 0, y: 50},
        {x: -50, y: 0},
        {x: 0, y: -50},
        {x: 50, y: 0},
    ]

    for (let i = 0; i <= 360; i += 90) {
        gotted.push(new Vector2(50, (i * (Math.PI/180))));
    }

    gotted.forEach((v, i) => {
        let [ex, gx] = [expected[i].x, v.components.x];
        let [ey, gy] = [expected[i].y, v.components.y];

        console.assert(ex == gx, `${ex} != ${gx} @ ${i}`);
        console.assert(ey == gy, `${ey} != ${gy} @ ${i}`);
    });
}

function Test_Gravity(mass) {
    const Re = 6.3781e6; // https://en.wikipedia.org/wiki/Earth_radius
    const Me = 5.9722e24; // https://en.wikipedia.org/wiki/Earth_mass

    let tb = [new PhysicalBody(Me), new PhysicalBody(mass, {x: 0, y: Re})];

    let g = new Gravity(tb);
    let a = Math.round((g.force/mass) * 100) / 100;

    console.assert(a == 9.8, "Earth gravity acceleration isn't approx. 9.8?");
}