function ImageDrawable(src) //a non-solid image
{
	this.solid=false;
	this.myImage = new Image();
	this.myImage.src=src;

	this.z = -10; //default to lower z

	this.setSize(this.myImage.width, this.myImage.height);

	this.draw = function()
	{
		try
		{
			c2d.drawImage(this.myImage,0,0);
		}
		catch(err){}
	}
}

ImageDrawable.prototype = new Drawable();

