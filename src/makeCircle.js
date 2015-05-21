var makeCircle = function () {
    console.log("makeCircle");
toggleStepper();
  var distributeFields = function(dancer, radius) {

    var fields = $(dancer), container = $('.aquarium'),
        width = container.width(), height = container.height(),
        angle = 0, step = (2*Math.PI) / fields.length;
    console.log("fields: ", fields);
    fields.each(function() {
        $(this).stop();
        console.log("this: ", $(this));
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        $(this).animate({
            left: x + 'px',
            top: y + 'px'
        }, 1000);
        angle += step;
    });
    toggleStepper();
  };
  setTimeout(function() {
    distributeFields('.blinky', 200)}, 1000);

  setTimeout(function() {
    distributeFields('.groovy', 150)}, 2000);

};

var step = function () {
    toggleStepper();
    for (var i = 0; i<dancers.length; i++) {
        dancers[i].step();
    }
}
