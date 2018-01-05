var myPath;
var canvas = document.getElementById('canvas');
var clearButton = false;
/*var pointTextLocation = new paper.Point(100,100);
var myText = new paper.PointText(pointTextLocation);
myText.fillColor = 'purple';
myText.content = 'Test Content for PointText Object';
myText.fontFamily = 'sans-serif';*/

function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeColor = 'black';
	myPath.strokeWidth = 4;
	myPath.strokeJoin = 'round';
	myPath.strokeCap = 'round';
	myPath.add(event.point);
	myPath.add(event.point);

	clearAppend();
	
}

function onMouseDrag(event) {
	
	if(event.modifiers.shift) {
		// If the shift key is down, change the point of
		// the last segment to the position of the mouse:
		myPath.lastSegment.point = event.point;
	} else {
		// If the shift key is not down, add a segment

		// to the path at the position of the mouse:
		myPath.add(event.point);
	}

	myPath.smooth();

}

function onMouseUp(event) {
	// myPath.simplify(5);
	/*var myCircle = new Path.Circle({
		center: event.point,
		radius: 2.5
	});
	myCircle.strokeColor = 'black';
	myCircle.fillColor = 'black';*/
	
}

/*function clear() {
	// myPath.remove();
	var image = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");
	console.log(image);
	//window.location.href=image;
}*/

function onKeyDown(event) {
	// When a key is pressed, set the content of the text item:
	if (event.key == 'a')
		globals.sayclear();
	if (event.key == 'z')
		myPath.visible = false;

}


function getRandomColor() {
  return "#"+((1<<24)*Math.random()|0).toString(16);

}

window.globals = {
sayclear : function() {
	document.getElementById('clear').style.display = 'none';
	clearButton = false;
	project.clear();
}
}


function clearAppend(){
	if (!clearButton)
	{
		console.log('wedwed');
		document.getElementById('clear').style.display = 'inline';
		clearButton =true;
	}
}
