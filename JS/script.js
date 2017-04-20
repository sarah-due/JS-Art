/* set up variables for basic canvas body and context */
var circButton = document.getElementById('circlebtn');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


  /* click even to drop random "slinkies" */
circButton.addEventListener('click', function() {
  
  /* create random color variables */
  var r = (Math.floor(Math.random() * 256));
  var g = (Math.floor(Math.random() * 256));
  var b = (Math.floor(Math.random() * 256));
  var a = 1;

  /* create random starting axis for blocks and ending points for animation*/
  var x = (Math.random()* canvas.width);
  var y = 0;

  function circleDrop() {
    y+=10;

    c.beginPath();
    c.arc(x, y, 30, 0, Math.PI*2, false);
    c.strokeStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
    c.stroke();
    c.closePath();

    requestAnimFrame(circleDrop);

  };

  circleDrop();
});
