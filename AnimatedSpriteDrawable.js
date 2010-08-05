function AnimatedSpriteDrawable(src, fwidth) //animated solid sprite
{
	this.solid=true;
        this.myImage = new Image();
        this.myImage.src=src;
	this.frame = 0;
	this.fspeed = 1; //1 step per frame
	this.fduration = 0;
	this.fwidth = fwidth;
	this.framect = this.myImage.width / this.fwidth;
        this.z = -10; //default to lower z

        this.setSize(this.myImage.width/fwidth, this.myImage.height);

        this.draw = function()
        {
                c2d.drawImage(this.myImage, 
			this.fwidth*this.frame, 0,
			this.fwidth, this.myImage.height,
			0, 0,
			this.fwidth, this.myImage.height);
		this.fduration++;
		if(this.fduration == this.fspeed)
		{
			this.frame++;
			this.frame = this.frame % this.framect;
			this.fduration = 0;
		}
        }
	
}

AnimatedSpriteDrawable.prototype = new Drawable(); 
