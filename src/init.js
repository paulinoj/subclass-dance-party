$(document).ready(function(){
  window.dancers = [];
  $('.topbar').on("click", ".button1", function(){
    callMakeBlinkyDancer();
  });

  // make a dancer with a random position
  var callMakeBlinkyDancer = function (){
    var dancer = makeBlinkyDancer(
      $(".aquarium").height(),
      $(".aquarium").width(),
      Math.random() * 1000
    );
    $('.aquarium').append(dancer.$node);
  };

  $('.topbar').on("click", ".button2", function(){
    callMakeGroovyDancer();
  });

  var callMakeGroovyDancer = function (){
    var dancer = makeGroovyDancer(
      $(".aquarium").height(),
      $(".aquarium").width(),
      Math.random() * 500 +1000
    );
    $('.aquarium').append(dancer.$node);
  };

  $('.topbar').on("click", ".button3", function(){
    toggleStepper();
  });
  $('.topbar').on("click", ".button4", function(){
    makeCircle();
  });
  $('.topbar').on("click", ".button5", function(){
    step();
  });

});

var stepper = true;
var toggleStepper = function(){
  console.log("toggle");
  stepper = !stepper;
}

var makeBlinkyDancer = function(top, left, timeBetweenSteps){
  return new BlinkyDancer(top, left, timeBetweenSteps);
}
var makeGroovyDancer = function(top, left, timeBetweenSteps){
  return new GroovyDancer(top, left, timeBetweenSteps);
}
