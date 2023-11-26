/** Representation of a body. */
export default class PhysicalBody {
    // https://pdg.lbl.gov/2017/listings/rpp2017-list-photon.pdf
    mass = 1.783e-54; // 1e-18 eV -> 1.783e-51 g -> 1.783e-54 kg
    position = {x: 0, y: 0};
    /**
     * @param {number} mass Body mass.
     * @param {{x: number, y: number}} position Body position.
     */
    constructor(mass, position) {
        this.mass = mass || 1.783e-54;
        this.position = position || {x:0,y:0};
    }
}