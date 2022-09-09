
canvas = new fabric.Canvas('myCanvas')

 block_y=1;
 block_x=1;

block_image_width = 350;
block_image_height = 430;

var imageObj= "";

function new_image(get_image)
{
	fabric.Image.fromURL(get_image, function (img)
    {
        imageObj = img
        imageObj.scaleToWidth(block_image_width);
        imageObj.scaleToHeight(block_image_height);
        imageObj.set(
            {
                top:block_y,
                left:block_x
            }
        )
        canvas.add(imageObj)
    })	
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
keyPressed = e.keyCode;
console.log(keyPressed);

	if(keyPressed == '82') // add appropriate keycode
	{
		new_image("rr1.png")
		console.log
	}
	if(keyPressed == '71')
	{
		block_x = 200;
		new_image("gr.png")
	}
	
	if(keyPressed == '89')
	{
		block_x =350;
		new_image("yr.png")
	}
	if(keyPressed == '80')
	{
		block_x = 600;
		new_image("pr.png")
	}
	if(keyPressed == '66')
	{
		block_x = 700;
		new_image("br.png")
	}
	
}

