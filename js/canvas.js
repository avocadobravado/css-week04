var canvas = document.querySelector('canvas');

canvas.width = "100vw".innerWidth;
canvas.height = "100vh".innerHeight;

var c = canvas.getContext('2d');


// c.fillStyle = "rgba(255, 0, 0, 0.3)";
// c.fillRect(0, 0, 100, 100);
//
// c.fillStyle = "rgba(0, 0, 255, 0.3)";
// c.fillRect(100, 100, 100, 100);
//
// c.fillStyle = "rgba(0, 255, 0, 0.3)";
// c.fillRect(200, 200, 100, 100);
//
// c.fillStyle = "rgba(255, 0, 255, 0.3)";
// c.fillRect(300, 300, 100, 100);

// Line - draws an x
//
// c.beginPath();
// c.moveTo(20, 250);
// c.lineTo(200, 100);
// c.strokeStyle = "#999";
// c.lineWidth = 15;
// c.lineCap = "round";
// c.stroke();
//
// c.beginPath();
// c.moveTo(200, 250);
// c.lineTo(20, 100);
// c.strokeStyle = "#999";
// c.lineWidth = 15;
// c.lineCap = "round";
// c.stroke();

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(250, 100);
// c.strokeStyle = "#999";
// c.lineWidth = 10;
// c.lineCap = "round";
// c.stroke();
//
//
// c.beginPath();
// c.moveTo(50, 600);
// c.lineTo(250, 100);
// c.strokeStyle = "#999";
// c.lineWidth = 10;
// c.lineCap = "round";
// c.stroke();

// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "#999";
// c.lineWidth = 10;
// c.lineCap = "round";
// c.stroke();

// Arc / Circle

// c.beginPath();
// c.arc(450, 450, 30, 0, Math.PI * 2, true);
// c.strokeStyle = "#c0c0c0";
// c.lineWidth = 5;
// c.stroke();

// Multiple circles
//
// for (var i = 0; i < 300; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.arc(x, y, 30, 0, Math.PI * 2, true);
//   c.strokeStyle = "rgb("+
//     Math.floor(Math.random()*256)+","+
//     Math.floor(Math.random()*256)+","+
//     Math.floor(Math.random()*256)+")";
//   c.lineWidth = 5;
//   c.stroke();
// }

// Multiple lines

// for (var i = 0; i < 50; i++) {
//   var x = Math.random() * window.innerWidth;
//   var y = Math.random() * window.innerHeight;
//   c.beginPath();
//   c.moveTo(x, y);
//   c.lineTo(Math.floor(Math.random() * 600), Math.floor(Math.random() * 400));
//   c.strokeStyle = "rgb("+
//     Math.floor(Math.random()*256)+","+
//     Math.floor(Math.random()*256)+","+
//     Math.floor(Math.random()*256)+")";
//   c.lineWidth = 5;
//   c.lineCap = "round";
//   c.stroke();
// }


// Draw an x function

canvas.addEventListener("mouseup", mouseUp, false);

canvas.addEventListener("mouseup", mouseUp, false);

function drawX(x, y) {
    c.beginPath();

    c.moveTo(x - 20, y - 20);
    c.lineTo(x + 20, y + 20);
    c.stroke();

    c.moveTo(x + 20, y - 20);
    c.lineTo(x - 20, y + 20);
    c.stroke();
}

function mouseUp(e) {
    mouseX = e.pageX - canvas.offsetLeft;
    mouseY = e.pageY - canvas.offsetTop;
    drawX(mouseX, mouseY);
}


// Circle object


function Circle(x, y, xVelocity, yVelocity, radius) {
  this.x = x;
  this.y = y;
  this.xVelocity = xVelocity;
  this.yVelocity = yVelocity;
  this.radius = radius;

  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = "rgb("+
      Math.floor(Math.random()*256)+","+
      Math.floor(Math.random()*256)+","+
      Math.floor(Math.random()*256)+")";
    c.lineStyle = "#fff";
    c.lineWidth = 5;
    c.stroke();
    c.fill();
  }

  this.update = function() {
    if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
      this.xVelocity = -this.xVelocity;
    }

    if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
      this.yVelocity = -this.yVelocity
    }

    this.x += this.xVelocity;
    this.y += this.yVelocity;

    this.draw();
  }

}

var circleArray = [];

for (var i = 0; i < 100; i++) {

  var radius = 5;
  var x = Math.random() * (innerWidth - radius * 2) + radius;
  var y = Math.random() * (innerHeight - radius * 2) + radius;;
  var yVelocity = (Math.random() - 0.5) * 10;
  var xVelocity = (Math.random() - 0.5) * 10;

  circleArray.push(new Circle(x, y, yVelocity, xVelocity, radius));
}

// var y = 200;

function animate () {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }

}

animate();
