var c,ctx,cwidth,cheight;
function int(){
	c = document.getElementById('screen');
	ctx = c.getContext('2d');
	cwidth=c.width;
	cheight=c.height;
	startscreen();
}
function startscreen(){
	ctx.fillStyle = "Black";
	ctx.fillRect(0,0,cwidth,cheight);
	ctx.fillStyle = "#ff0000";
	ctx.font = "100px Arial ";
	ctx.fillText("Bomberman",cwidth/5,cheight/4);
}

