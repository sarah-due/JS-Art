/* set up variables for basic canvas body and context */
var button = document.getElementById('button');
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

button.addEventListener("click", function() {
  /* create random color variables */
    var r = (Math.floor(Math.random() * 256));
    var g = (Math.floor(Math.random() * 256));
    var b = (Math.floor(Math.random() * 256));
    var a = 1;

    var x = Math.random() * canvas.width;
    var y= Math.random() * canvas.height;
    var dx = (Math.random()-0.5) * 15;
    var dy = (Math.random()-0.5) * 15;
    var radius = 50;
    var color = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

    function animate() {
        requestAnimFrame(animate);

        c.beginPath();
        c.arc(x, y, radius, 0, Math.PI*2, false);
        c.strokeStyle = color;
        c.stroke();

        if (x + radius > canvas.width || x - radius < 0) {
            dx = -dx;
            }
        if (y + radius > canvas.height || y - radius < 0) {
            dy = -dy;
            }
        x +=dx;
        y += dy;
        }

      animate();
      var audio = document.querySelector('audio');
      audio.play();

});
