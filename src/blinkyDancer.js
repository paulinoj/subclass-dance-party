
var BlinkyDancer = function(height, width, timeBetweenSteps){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, height, width, timeBetweenSteps);
  var $dancer1 = $('#dancers .dancer1');
  this.speed = 2000;
  $dancer1.clone().appendTo(this.$node).show();
  this.$node.addClass("blinky");
};
BlinkyDancer.prototype = Object.create(Dancer.prototype);
BlinkyDancer.prototype.constructor = BlinkyDancer;
