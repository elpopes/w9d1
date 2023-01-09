const MovingObject = require("./moving_object.js");

console.log("index is working");

document.addEventListener("DOMContentLoaded", function () {
  const canvasEl = document.getElementById("game-canvas");
  canvasEl.width = 1200;
  canvasEl.height = 600;

  const ctx = canvasEl.getContext("2d");

  ctx.fillStyle = "black";
  ctx.fillRect(25, 25, 1200, 600);
  ctx.strokeStyle = "yellow";
  ctx.strokeWidth = 2;

  //   ctx.beginPath();
  //   ctx.arc(100, 100, 8, 0, 2 * Math.PI, true);
  //   ctx.strokeStyle = "white";
  //   ctx.lineWidth = 10;
  //   ctx.stroke();
  //   ctx.fillStyle = "red";
  //   ctx.fill();
});

console.log("But where is everything???");
// import MovingObject from "./moving_object.js";
// window.MovingObject = MovingObject;
