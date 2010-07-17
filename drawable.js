/******
 *  1) prestep
 *  2) collisions
 *  3) step
 *  4) posttep
 */

function Drawable()
{
	this.x=0; //x and y are top-left corner
	this.y=0;
	this.width=0;
	this.height=0;
	this.z=0;
	this.solid=true;
	this.name="";
}
Drawable.prototype.draw=function(){};

Drawable.prototype.prestep=function(){};
Drawable.prototype.step=function(){};
Drawable.prototype.poststep=function(){};

Drawable.prototype.handleKeyDown=function(key){};
Drawable.prototype.handleKeyUp=function(key){};
Drawable.prototype.collide=function(other,dir){};
Drawable.prototype.setPos=function(a,b)
{
	this.x=a;
	this.y=b;
}

Drawable.prototype.setSize=function(a,b)
{
	this.width=a;
	this.height=b;
}

Drawable.prototype.collides=function(other) //true if I collide with other, false otherwise
{
	/*
	lr=false;
	ud=false;
	//horizontal collisions
	if(this.x <= other.x && this.x+this.width >= other.x) //on left
		lr=true;
	if(this.x >= other.x && other.x+other.width >= this.x) //on right
		lr=true;

	//vertical collisions
	if(this.y <= other.y && this.y+this.height >= other.y) //on bottom
		ud=true;
	if(this.y >= other.y && other.y >= this.y+this.height) //on top
		ud=true;
	
	return lr&&ud;*/

	left1=this.x;
	left2=other.x;
	right1=this.x+this.width;
	right2=other.x+other.width;

	top1=this.y;
	top2=other.y;
	bottom1=this.y+this.height;
	bottom2=other.y+other.height;

	if(bottom1 < top2) {return false;}
	if(bottom2 < top1) {return false;}
	
	if(right1 < left2) {return false;}
	if(right2 < left1) {return false;}

	return true;
}

Drawable.prototype.destroy = function()
{
	for(i=0;i<elements.length;i++)
	{
		if(elements[i] == this)
			delete elements.splice(i,1);
	}
}
