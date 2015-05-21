var makeCircle = function () {
    console.log("makeCircle");
  var distributeFields = function() {
    var radius = 200;
    var fields = $('.dancer'), container = $('body'),
        width = container.width(), height = container.height(),
        angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
  };
  distributeFields();
};
