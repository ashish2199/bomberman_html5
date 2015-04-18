var c,ctx,cwidth,cheight,img;

function int(){
	c = document.getElementById('screen');
	ctx = c.getContext('2d');
	cwidth=c.width;
	cheight=c.height;
	img = document.getElementById("sprites");
	img.style.visiblity
    startscreen();
}
document.onkeydown = checkKey;

function checkKey(e) {
	    e = e || window.event;
	    if (e.keyCode == '38') {
	        // up arrow
	    }
	    else if (e.keyCode == '40') {
	        // down arrow
	    }
	    else if (e.keyCode == '37') {
	       // left arrow
	    }
	    else if (e.keyCode == '39') {
	       // right arrow
	    }
}
function startscreen(){
	ctx.fillStyle = "Black";
	ctx.fillRect(0,0,cwidth,cheight);
	ctx.fillStyle = "Red";
	ctx.lineWidth=10;
	ctx.strokeStyle="Yellow";
	ctx.strokeRect(cwidth/5-10,cheight/6-33,570,100);
	ctx.font = "100px Arial ";
	ctx.fillText("Bomberman",cwidth/5,cheight/4);
	ctx.fillStyle = "Blue";
	ctx.font = "50px Arial ";
	ctx.fillText("By Ashish",cwidth/2+10,cheight/2-80);
}
function gamescreen(){
	ctx.fillStyle = "Black";
	//ctx.fillRect(0,0,cwidth,cheight);
	ctx.fillStyle = "#ff0000";
	ctx.font = "100px Arial ";
	//ctx.fillText("Bomberman",cwidth/5,cheight/4);

	//down standing position
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,0,0,18,21,0,0,36,42);
	
	//down walk position 1
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,0,30,18,21,0,50,36,42);

	//down walk position 2
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,0,60,18,21,0,100,36,42);

	

	//up standing position 
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,60,0,17,21,150,50,36,42);

	//up walk position 1
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,60,30,17,21,150,100,36,42);

	//up walk position 2
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,60,60,17,21,150,150,36,42);

	//right standing position 
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,90,0,18,21,0,150,36,42);

	//right walk position 1
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,90,30,18,21,50,150,36,42);

	//right walk position 2
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,90,60,18,21,100,150,36,42);

	//left standing position
	//image,sx,sy,swidth,sheight,x,y,width,height	
	ctx.drawImage(img,30,0,18,21,50,0,36,42);

	//walkingleft();
}



var x=800;
function walkingleft(){
globalID = requestAnimationFrame(walkingleft);
		if(x%30<15){
			ctx.fillStyle = "Lime";
			ctx.fillRect((x),0,37,42);
			//left walk position 1
			//image,sx,sy,swidth,sheight,x,y,width,height	
			ctx.drawImage(img,30,30,18,21,(x),0,36,42);
		}
		else if(	(x%30>10)||(x%30<20)	)
		{
			ctx.fillStyle = "Lime";
			ctx.fillRect((x),0,37,42);
			//left standing position
			//image,sx,sy,swidth,sheight,x,y,width,height	
			ctx.drawImage(img,30,0,18,21,x,0,36,42);
			
		}
		else
		{
			ctx.fillStyle = "Lime";
			ctx.fillRect((x),0,37,42);
			//left walk position 2
			//image,sx,sy,swidth,sheight,x,y,width,height	
			ctx.drawImage(img,30,60,18,21,(x),0,36,42);
		}
		x--;
}

