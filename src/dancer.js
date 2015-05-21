// Creates and returns a new dancer object that can step
var Dancer = function(height, width, timeBetweenSteps){
console.log("board: ", height, width);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');
  this.timeBetweenSteps = timeBetweenSteps;
  this.step();
  this.height = height;
  this.width = width;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.hdir = "+";
  this.vdir = "+";
  this.$node.css({
    top: height * Math.random(),
    left: width * Math.random()
  });
};


Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //
  //

  if (this.$node.position().left > this.width - 200) {
    this.hdir = "-";
  }
  if (this.$node.position().left < 200) {
    this.hdir = "+";
  }
  if (this.$node.position().top > this.height - 200) {
    this.vdir = "-";
  }
  if (this.$node.position().top < 200) {
    this.vdir = "+";
  }


  var h = Math.random() * 100;
  var v = Math.random() * 100;
  this.$node.animate({
    "left" : this.hdir + "=" + h + "px",
    "top" : this.vdir + "=" + v + "px"
  }, "easeInOut" );
  if (stepper) {
    window.setTimeout(this.step.bind(this), this.timeBetweenSteps);
  }
};
