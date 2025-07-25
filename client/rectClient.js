class RectClient extends ShapeClient {
    constructor(x, y, w, h) {
        super(x, y);
        this.w = w;
        this.h = h;
    }

    draw() {
        ctx.setLineDash([]);
        ctx.strokeStyle = "black";
        ctx.lineWidth = 2;

        ctx.beginPath();
        ctx.rect(this.x, this.y, this.w, this.h);
        ctx.stroke();
    }
}