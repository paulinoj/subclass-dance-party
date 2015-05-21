$(document).ready(function(){
  var stepper = true;
  window.dancers = [];
  $('.topbar').on("click", ".button1", function(){
    console.log("clicked:", this);
    callMakeBlinkyDancer();
  });

  // make a dancer with a random position
  var callMakeBlinkyDancer = function (){
    var dancer = makeBlinkyDancer(
      $("body").height(),
      $("body").width(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
  };

  var makeBlinkyDancer = function(top, left, timeBetweenSteps){
    return new BlinkyDancer(top, left, timeBetweenSteps);
  }

  $('.topbar').on("click", ".button3", function(){
    makeCircle();
  });

  $(".addDancerButton").on("click", function(event){
    /* This function sets up the click handlers for the create-dancer
     * buttons on index.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */


  });
});

