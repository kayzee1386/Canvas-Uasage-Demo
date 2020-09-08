
let canvas = document.getElementById("my-canvas");
canvas.width = canvas.scrollWidth;
canvas.height = canvas.scrollHeight;
const ctx = canvas.getContext('2d');

var square = {
    corner: [0,0],
    width: 50,
    height: 50,
    color: "red",
    draw: function() {
        ctx.fillStyle = this.color;
        ctx.fillRect(this.corner[0], this.corner[1], this.width, this.height);
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    square.draw();
}

draw();






