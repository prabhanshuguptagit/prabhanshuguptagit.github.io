var circle =  new Path.Circle({
	center: view.center,
	radius: 30,
	strokeColor: '#a10000',
	strokeWidth: 5,
	fillColor: '#a12d23'
});

var firstPoint, secondPoint = new Point();
var myPath;
var vectorRot;
var myCircle = new Path.Circle();

function onMouseDown(event){
	firstPoint = event.point;

	myPath = new Path();
	myPath.strokeColor = 'green';

}


function onMouseUp(event) {
	circle = new Path.Circle({
		center: event.downPoint,
		radius: event.delta.length
	});
	circle.strokeColor = 'black';
	circle.fillColor = 'white';
	circle.fillColor.alpha = 0.5;

	myCircle = new Path.Circle({
		center: event.point,
		radius: 5
	});
	myCircle.strokeColor = 'black';
	myCircle.fillColor = 'white';

}


function onMouseDrag(event) {

    //get the point on mouse up and calculate the distance with 1st point
	secondPoint = event.point;
	var distance = ( firstPoint - secondPoint ).length
	
    var trackingPath = new Path.Line(firstPoint, secondPoint);
    trackingPath.strokeColor = 'red';

    //create a circle positioned at point where mousedown was, with radius
    //the distance between mousedown/mouseup
	var trackingCircle = new Path.Circle(firstPoint, distance);
    trackingCircle.strokeColor = 'red';
    
	//remove tracking circle/line and display another one while dragging
	trackingPath.add(event.point);
    
    trackingPath.removeOn({
        drag:true,
        down: true,
        up:true
    });
    
    trackingCircle.removeOn({
        drag: true,
        down: true,
        up:true
    });

    myPath.add(event.point);
}


function onFrame(event){
	vectorRot = circle.position - myCircle.position;
	vectorRot.angle += 0.5;
	myCircle.position = circle.position + vectorRot;
}

