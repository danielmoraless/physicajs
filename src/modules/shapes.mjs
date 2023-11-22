export default class BasicShapes extends Document {
    constructor(ctx) {
        super();
        this.rctx = ctx || document.getElementById("space").getContext("2d");
    }

    makeSquare(
        {
            color="white",
            pos={x: 25, y: 25},
            wh=25,
            filled=true
        } = {}) {

        this.rctx.fillStyle = color;
        this.rctx.strokeStyle = color;

        if (filled) {
            this.rctx.fillRect(pos.x, pos.y, wh, wh);
        } else {
            this.rctx.strokeRect(pos.x, pos.y, wh, wh);
        }
    }

    makeCircle({
        color="white",
        position={x:50, y:50},
        radius=25/2,
        startAngle=0,
        endAngle=Math.PI*2,
        cclockwise=false,
        filled=true
    } = {}) {

        this.rctx.beginPath();
        this.rctx.arc(position.x, position.y, radius, startAngle, endAngle, cclockwise);

        this.rctx.fillStyle = color;
        this.rctx.strokeStyle = color;

        if (filled) {
            this.rctx.fill();
        } else {
            thix.rctx.stroke();
        }
    }
}