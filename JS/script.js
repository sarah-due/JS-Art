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

/* create random starting axis for blocks */
var x = (Math.random()* canvas.width);
var y = (Math.random()* canvas.height);

/* drop random rectangle "blocks" */
c.fillStyle = 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';
c.fillRect(x, y, 100, 100);
