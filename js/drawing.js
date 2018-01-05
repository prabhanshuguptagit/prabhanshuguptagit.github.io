var myPath;


function onMouseDown(event) {
	myPath = new Path();
	myPath.strokeColor = 'black';
	myPath.strokeWidth = 5;
	myPath.strokeJoin = 'round';
	myPath.strokeCap = 'round';
	myPath.add(event.point);
}

function onMouseDrag(event) {
	myPath.add(event.point);

	var step = event.delta;
	step.angle += 90;

	var top = event.middlePoint + step + step.normalize(2.5);
	var bottom = event.middlePoint - step - step.normalize(2.5);
	
	var line = new Path();
	line.strokeColor = 'green';
	line.add(top);
	line.add(bottom);

	//myPath.add(top);
	//myPath.insert(0, bottom);

}

function onMouseUp(event) {
	var myCircle = new Path.Circle({
		center: event.point,
		radius: 2.5
	});
	myCircle.strokeColor = 'black';
	myCircle.fillColor = 'black';
}

