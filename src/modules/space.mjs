export default class Space extends Document {
    constructor(limitX, limitY) {
        super();
        this.limitX = limitX || window.innerWidth - 15;
        this.limitY = limitY || window.innerHeight - 15;
        this.ctx = this.#createSpace(this.limitX, this.limitY);
    }

    #createSpace(w, h) {
        // Parent div for a centered canvas
        let d = document.createElement("div");
        d.style = "display: flex; justify-content: center; align-items: center; margin-top: 6px";

        // (Canvas || 2D Context) => space
        let element = document.createElement("canvas");
        element.width = w;
        element.height = h;
        element.style = "border: 1px solid black";
        element.id = "space";

        d.appendChild(element);
        document.body.appendChild(d);
        
        return element.getContext("2d");
    }
}