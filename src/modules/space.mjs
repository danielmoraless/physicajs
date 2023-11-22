export default class Space extends Document {
    constructor(limitX, limitY) {
        super();
        this.limitX = limitX || window.innerWidth - 15;
        this.limitY = limitY || window.innerHeight - 15;
        this.canvas = this.#createSpace(this.limitX, this.limitY);
        this.ctx = this.canvas.getContext("2d");
    }

    #createSpace(w, h) {
        // Parent div for a centered canvas
        let d = document.createElement("div");
        d.style = "display: flex; justify-content: center; align-items: center; margin-top: 6px";

        // (Canvas || 2D Context) => space
        let element = document.createElement("canvas");
        element.width = w;
        element.height = h;
        element.style = "border: 1px solid gray; background-color: black;";
        element.id = "space";

        d.appendChild(element);
        document.body.appendChild(d);
        
        return element;
    }
}