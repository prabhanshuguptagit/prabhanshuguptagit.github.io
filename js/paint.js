var myPath;
var color;

tool.maxDistance = 40;
tool.minDistance = 5;


function onMouseDown(event) {
	myPath = new Path();
	// myPath.strokeColor = 'black';
	// myPath.strokeWidth = 5;
	// myPath.strokeJoin = 'round';
	// myPath.strokeCap = 'round';
	myPath.add(event.point);

	myPath.fillColor = getRandomColor();
	color = myPath.fillColor;
}

function onMouseDrag(event) {
	//myPath.add(event.point);

	var step = event.delta;
	step.angle += 90;

	var top = event.middlePoint + step/3;
	var bottom = event.middlePoint - step/3;
	
	// var line = new Path();
	// line.strokeColor = 'green';
	// line.add(top);
	// line.add(bottom);

	myPath.add(top);
	myPath.insert(0, bottom);

	myPath.smooth();

}


function onMouseUp(event) {
	myPath.add(event.point);
	myPath.smooth();
}



function getRandomColor() {
  return "#"+((1<<24)*Math.random()|0).toString(16);

}


function clear() {
	console.log('dwe');	
	//project.activeLayer.removeChildren();
}
