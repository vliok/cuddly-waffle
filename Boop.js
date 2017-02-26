var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");

var stop = document.getElementById("stop");
stop.addEventListener("click",stopIt);

var growing = document.getElementById("growing");
growing.addEventListener("click",growCircle);

var DVD = document.getElementById("DVD");
DVD.addEventListener("click",move);

var rid = 0;

function growCircle() {
    var x = 0;
    var grow = true;
    
    function circle() {
	window.cancelAnimationFrame( rid );
	
	function expandCircle() {
	    ctx.clearRect(0,0,canv.width,canv.height);
	    ctx.beginPath();
	    ctx.arc(canv.width/2, canv.height/2, x, 0, 2 * Math.PI);
	    ctx.fill();
	    x = x + 3;
	    if (x >= canv.width/2 || x >= canv.height/2) {
                grow = false;
            };
	};
	
	function shrinkCircle() {
	    ctx.clearRect(0,0,canv.width,canv.height);
	    ctx.beginPath();
	    ctx.arc(canv.width/2, canv.height/2, x, 0, 2 * Math.PI);
	    ctx.fill();
	    x = x - 3;
	    if (x == 0) {
                grow = true;
            };
	};

	if (grow == true) {
	    expandCircle();
	}
	else {
	    shrinkCircle();
	};
	rid = window.requestAnimationFrame( circle );
	
    };
    
    circle();
    
};

function move() {
    window.cancelAnimationFrame( rid );
    var x = canv.width/2;
    var y = canv.height/2;
    var xspeed = 3;
    var yspeed = 3;
    function moveCircle() {
	if (x >= canv.width - 50 || x <= 50) {
	    xspeed = -xspeed;
	};
	if (y >= canv.height - 50 || y <= 50) {
	    yspeed = -yspeed;
	};
	ctx.clearRect(0,0,canv.width,canv.height);
	ctx.beginPath();
	ctx.arc(x, y, 50, 0, 2 * Math.PI);
	ctx.fill();
	x = x + xspeed;
	y = y + yspeed;
	rid = window.requestAnimationFrame( moveCircle );
    };
    moveCircle();
};

function stopIt() {
    window.cancelAnimationFrame( rid );
};
