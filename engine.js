var canvas = null;
var c2d = null;
var game = null;
var elements = new Array();


function startGame()
{
	try
	{
		GameMain();
	}
	catch(err)
	{
		elements = new Array();
		setTimeout(startGame, 10);
	}
}


function init(el, FPS)
{
	GameInit();
	canvas = document.getElementById(el);
	c2d = canvas.getContext('2d');
	game = new Engine();
	setInterval(game.draw, 1000 / FPS);
	document.onkeydown = function(event){game.keyDown(event)};
	document.onkeyup = function(event){game.keyUp(event)};
	started=false;
	startGame();
}

function Engine()
{	
	
	this.draw = function()
	{
		c2d.save();
			c2d.clearRect(0,0,canvas.width, canvas.height);
			c2d.fillStyle = "rgb(0,0,0)";
			c2d.fillRect(0,0,canvas.width, canvas.height);
			
			
			var ii=0;
			for(var i=0;ii<elements.length;ii++)
			{
				c2d.save();
					c2d.translate((elements[ii]).x, (elements[ii]).y);
					(elements[ii]).draw();
				c2d.restore();
			}


			for(i=0;i<elements.length;i++)
				elements[i].prestep();

			
			for(i=0;i<elements.length;i++)
			{
				for(j=0;j<elements.length;j++)
				{
					if(elements[i] != elements[j])
					{
						x=elements[i].collides(elements[j]);
						if(x != 0)
						{
							elements[i].collide(elements[j],x);
						}
					}
				}
			}
			

			for(i=0;i<elements.length;i++)
				elements[i].step();


			for(i=0;i<elements.length;i++)
				elements[i].poststep();
				
		c2d.restore();
	}

	this.keyDown = function(key)
	{
		for(i=0;i<elements.length;i++)
		{
			elements[i].handleKeyDown(key.keyCode);
		}
	}
	
	this.keyUp = function(key)
	{
		for(i=0;i<elements.length;i++)
		{
			elements[i].handleKeyUp(key.keyCode);
		}
	}

	this.add=function(x) //can take a single element or [nested] arrays
	{
		if(x[0])
		{
			var u=0;
			for(var u=0;u<x.length;u++)
			{
				this.add(x[u]);
			}
		}
		else
		{
			elements.push(x);
			elements.sort(function(a,b){ return (a.z > b.z)? 1 : (a.z < b.z)? -1: 0; });
		}
	}
}


function includeFile(file)
{
	// you can add more files if you want
	var scripts = [file];

	var scriptElement = new Array(scripts.length);
	var headTag = document.getElementsByTagName("head")[0];
	var fragment = document.createDocumentFragment();

	for(var i=0, count = scripts.length; i < count; i++)
	{
	  scriptElement[i] = document.createElement("script");
	  scriptElement[i].setAttribute("src", scripts[i]);
	  fragment.appendChild(scriptElement[i]);
	}

	headTag.appendChild(fragment);
}

