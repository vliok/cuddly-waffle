var canv = document.getElementById("canv");
var ctx = canv.getContext("2d");
canv.addEventListener("click", circle);

var b = document.getElementById("b");
b.addEventListener("click",stopIt);

var rid = 0;

function start() {
    var x = 0;
    var grow = true;
    
    function circle() {
	window.cancelAnimationFrame( rid );
	
	function expandCircle() {
	    ctx.clearRect(0,0,canv.width,canv.height);
	    //console.log("boop");
	    //console.log(rid);
	    ctx.beginPath();
	    ctx.arc(canv.width/2, canv.height/2, x, 0, 2 * Math.PI);
	    ctx.fill();
	    x++;
	    rid = window.requestAnimationFrame( createCircle );
	};
	
	function shrinkCircle() {
	    ctx.clearRect(0,0,canv.width,canv.height);
	    //console.log("boop");
	    //console.log(rid);
	    ctx.beginPath();
	    ctx.arc(canv.width/2, canv.height/2, x, 0, 2 * Math.PI);
	    ctx.fill();
	    x--;
	    rid = window.requestAnimationFrame( createCircle );
	};

	if (x >= canv.width/2) || (x >= canv.height/2) {
	    grow = false;
	};

    };
    
};

function stopIt() {
    window.cancelAnimationFrame( rid );
};
