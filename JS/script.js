/* set up variables for basic canvas body and context */
var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;


/* create random color variables */
var r = (Math.floor(Math.random() * 256));
var g = (Math.floor(Math.random() * 256));
var b = (Math.floor(Math.random() * 256));
var a = 1;

/* create random starting axis for blocks and ending points for animation*/
var x = (Math.random()* canvas.width);
var y = 0;
var mx;
var my;

/* drop random rectangle "blocks" */

function blockDrop() {
  y++;

  c.clearRect(0, 0, canvas.width, canvas.height);

  c.beginPath();
  c.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
  c.closePath();
  c.fillRect(x, y, 100, 100);


  requestAnimFrame(blockDrop);

};

/* Begin dropping blocks! */
blockDrop();
