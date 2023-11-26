import PhysicalBody from "../../body.mjs";

export const G = 6.67430e-11;

/** Sum of forces. */
export default class Forces {
    /**
     * @param {Array<Vector2>} vecs List of forces acting on a body.
     */
    constructor(vecs) {
        this.vecs = vecs;
    }

    /**
     * @returns {Vector2} Returns the resultant force of the sum of all forces acting on a body.
     */
    resulting() {
        const vecsl = this.vecs.length;

        let rx = 0;
        let ry = 0;

        for (let i = 0; i < vecsl; i++) {
            let actualVec = this.vecs[i];
            rx += actualVec.components.x;
            ry += actualVec.components.y;
        }

        let mag = Math.hypot(rx, ry);
        let rads = Math.atan(Math.abs(ry)/Math.abs(rx));

        return new Vector2(mag, rads);
    }
}

/** Gravity as a force. */
export class Gravity {
    /**
     * @param {Array<PhysicalBody>} bodys
     */
    constructor(bodys) {
        this.m1 = bodys[0].mass;
        this.m2 = bodys[1].mass;
        this.d = Math.hypot(bodys[1].position.x - bodys[0].position.x, bodys[1].position.y-bodys[0].position.y);
        this.force = (G * ((this.m1*this.m2)/Math.pow(this.d, 2)));
    }

    //TODO: implement this
    // asVector2() {}
}

/** The Vector2 class is a representation of a force. */
export class Vector2 {
    /**
     * @param {number} mod Module or magnitud of the force.
     * @param {number} rads Angle in radians.
     */
    constructor(mod, rads) {
        this.mod = mod;
        this.rads = rads;
        this.components = this.#components();
    }

    #components() {
        const x = this.mod * Math.cos(this.rads);
        const y = this.mod * Math.sin(this.rads);

        let r = {
            x: Math.round((x + Number.EPSILON) * 100) / 100,
            y: Math.round((y + Number.EPSILON) * 100) / 100,
        }

        if (r.x == -0) r.x = 0;
        if (r.y == -0) r.y = 0;

        return r;
    }
}