
var GroovyDancer = function(height, width, timeBetweenSteps){
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  Dancer.call(this, height, width, timeBetweenSteps);
  var $dancer2 = $('#dancers .dancer2');
  this.speed = 400;
  $dancer2.clone().appendTo(this.$node).show();
  this.$node.addClass("groovy");
};
GroovyDancer.prototype.step = function(){
  // call the old version of step at the beginning of any call to this new version of step
//  this.oldStep();
  Dancer.prototype.step.call(this);
};
//BlinkyDancer.prototype.oldStep = Dancer.prototype.step;

