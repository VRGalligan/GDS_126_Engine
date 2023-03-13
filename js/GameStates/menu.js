/*---------------------------------
This file contains all of the code for the Main Menu
----------------------------------*/

var startButton = new GameObject({width:200});
//startButton.img.src="images/Galligan_StartScreen.png"
//startButton.width=200;
startButton.hitBoxWidth=800
console.log(startButton.collisionPoints.right)


var menuBackground = new GameObject();
menuBackground.img.src = "images/Galligan_StartScreen.png"
menuBackground.width=canvas.width
menuBackground.height=canvas.height

gameStates[`menu`] =function(){

	//Makes the button clickable
	if(startButton.overlap(mouse))
	{
		if(mouse.pressed)
		{
			//Changes to the game state
			gameStates.changeState(`level1`)
		}

		//Hover Effect Graffic
		startButton.color = `darkgreen`
	}
	else
	{
		//Default Button Graphic
		startButton.color = `green`
	}
	
	menuBackground.drawStaticImage();
	startButton.render()
}
	
	
