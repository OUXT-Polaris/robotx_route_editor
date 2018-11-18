window.addEventListener("load", init);
window.addEventListener("click", handleClick);

function init() {
  var stage = new createjs.Stage("MapCanvas");
  var bg = new createjs.Shape();
  bg.graphics.beginFill("Blck").drawRect(0, 0, 640, 640);
  stage.addChild(bg);
  for (var i = 0; i < 31; i++)
  {
    var line = new createjs.Graphics();
    line.s("Gray").mt(0,20*(i+1)).lt(640,20*(i+1)).es();
    var line_shape = new createjs.Shape(line);
    stage.addChild(line_shape)
  }
  for (var i = 0; i < 31; i++)
  {
    var line = new createjs.Graphics();
    line.s("Gray").mt(20*(i+1),0).lt(20*(i+1),640).es();
    var line_shape = new createjs.Shape(line);
    stage.addChild(line_shape)
  }
  stage.update();
}