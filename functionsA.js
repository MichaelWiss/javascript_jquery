function getSize(width, height, depth) {
	var area = width * height;
	var volume = width * height * depth;
	var sizes = [area, volume];
	return sizes;
}
var areaOne = getSize(3, 3, 3)[0];
var volumeOne = getSize(3, 2 3)[1];

//immediately invoked function expressions IIFFE

var area = ( function() {
	var width = 3;
	var height = 2;
	return width * height;
} () );

