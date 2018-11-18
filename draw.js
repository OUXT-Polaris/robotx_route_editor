window.addEventListener("load", init);
window.addEventListener("click", handleClick);

function init() {
  // Create Stage Object
  var stage = new createjs.Stage("myCanvas");

  // Draw Circle
  var shape = new createjs.Shape();
  var bg = new createjs.Shape();
  bg.graphics.beginFill("Blck").drawRect(0, 0, 640, 640);
  stage.addChild(bg);
  shape.graphics.beginFill("DarkRed"); 
  shape.graphics.drawCircle(0, 0, 10); // set radius
  shape.x = 200; 
  shape.y = 200;
  stage.addChild(shape);

  // update state
  stage.update();
}