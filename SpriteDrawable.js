function SprteDrawable(src) //a solid image
{
	this.solid=true;
	this.myImage = new Image();
	this.myImage.src=src;

	this.z = -10; //default to lower z

	this.setSize(this.myImage.width, this.myImage.height);

	this.draw = function()
	{
		c2d.drawImage(this.myImage,0,0);
	}
}

ImageDrawable.prototype = new Drawable();
