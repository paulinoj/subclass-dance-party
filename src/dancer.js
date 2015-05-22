 // Creates and returns a new dancer object that can step
var Dancer = function(height, width, timeBetweenSteps){
console.log("board: ", height, width);
  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"><span class="infos"></span></span>');
  this.id = setId();
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node.children(".infos").html(timeBetweenSteps);
  this.step();
  this.speed = 50;
  this.height = height;
  this.width = width;
  this.timer;

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  this.hdir = "+";
  this.vdir = "+";
  this.$node.css({
    top: height * Math.random(),
    left: width * Math.random()
  });
  var that = this;
  this.$node.on("click", function(){
    $(this).remove();
    that.remove(that.id);
  });
  window.dancers.push(this);
};

var ids = 0;
var setId = function(){
  return ids++;
}

var saw = new Wad({source : 'sawtooth'});


Dancer.prototype.remove = function(id){
  console.log("remove: ", this.timer);
  for (var i = 0; i < window.dancers.length; i++) {
    if (window.dancers[i].id === id) {
      console.log("timer b: ", this.timer);
      clearTimeout(this.timer);
      delete window.dancers[i];
      window.dancers.splice(i,1);
    }
  }
};

Dancer.prototype.step = function(){
  // the basic dancer doesn't do anything interesting at all on each step,
  // it just schedules the next step
  //
  saw.play({
    volume  : 0.8,
    wait    : 0,     // Time in seconds between calling play() and actually triggering the note.
    loop    : false, // This overrides the value for loop on the constructor, if it was set.
    pitch   : 'A4',  // A4 is 440 hertz.
    env     : {hold : 9001},
    filter  : {frequency : 900},
    delay   : {delayTime : .8}
})
  console.log("step: ", this.$node);
  this.$node.dequeue();
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
  }, this.speed, "linear" );
  if (stepper) {
    this.timer = setTimeout(this.step.bind(this), this.timeBetweenSteps);
    console.log("timer: ", this.timer);
  }
};
