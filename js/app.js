var firstPoint;
var secondPoint;

function onMouseDown(event){
	firstPoint = event.point;
}

function onMouseUp(event) {
	var myPath = new Path();
	myPath.strokeColor = 'black';
	myPath.add(event.downPoint);
	myPath.strokeWidth = 5;
	myPath.add(event.point);
}

function onMouseDrag(event) {
	var trackingPath = new Path();
	trackingPath.add(firstPoint);
	trackingPath.strokeColor = 'green';
	trackingPath.strokeWidth = 10;
	trackingPath.add(event.point);

	trackingPath.removeOn({
        drag:true,
        down: true,
        up:true
    });
}
