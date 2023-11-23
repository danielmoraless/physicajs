export default class BasicShapes extends Document {
    defaultColor = "#ffffff"
    constructor(ctx, defaultColor) {
        super();
        this.rctx = ctx || document.getElementById("space").getContext("2d");
        this.defaultColor = defaultColor || "#ffffff";
    }

    makeSquare(
        {
            color=this.defaultColor,
            pos={x: 25, y: 25},
            wh=25,
            filled=true
        } = {}) {

        this.rctx.fillStyle = color;
        this.rctx.strokeStyle = color;

        let sPath = new Path2D();
        sPath.rect(pos.x, pos.y, wh, wh);

        if (filled) {
            this.rctx.fill(sPath);
        } else {
            this.rctx.stroke(sPath);
        }
    }

    makeCircle({
        color=this.defaultColor,
        position={x:50, y:50},
        radius=25/2,
        startAngle=0,
        endAngle=Math.PI*2,
        cclockwise=false,
        filled=true
    } = {}) {

        this.rctx.fillStyle = color;
        this.rctx.strokeStyle = color;

        let cPath = new Path2D();
        cPath.arc(position.x, position.y, radius, startAngle, endAngle, cclockwise);

        if (filled) {
            this.rctx.fill(cPath);
        } else {
            thix.rctx.stroke(cPath);
        }
    }
}