/*
include google map api before use.
*/
var map;
var map_div = [];
function add_map_div(element, north, east, left, top){
	map_div.push([element, north, east, left, top]);
}

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		zoom: 12,
		center: {lat: 25.0507563, lng: 121.572116},
	});

	function CanvasProjectionOverlay() {}
	CanvasProjectionOverlay.prototype = new google.maps.OverlayView();
	CanvasProjectionOverlay.prototype.constructor = CanvasProjectionOverlay;
	CanvasProjectionOverlay.prototype.onAdd = function(){};
	CanvasProjectionOverlay.prototype.draw = function(){};
	CanvasProjectionOverlay.prototype.onRemove = function(){};
	var canvasProjectionOverlay = new CanvasProjectionOverlay();
	canvasProjectionOverlay.setMap(map);

	map.addListener("tilesloaded", function() {
		map_div_fixed();
	});
	map.addListener("center_changed", function() {
		map_div_fixed();
	});
	map.addListener("idle", function() {
		map_div_fixed();
	});
	
	function map_div_fixed(){
		if(map_div.length > 0){
			for(var i=0; i<map_div.length; i++){
				var latLng = new google.maps.LatLng(map_div[i][1], map_div[i][2]);
				var leftTop = canvasProjectionOverlay.getProjection().fromLatLngToContainerPixel(latLng);
				$(map_div[i][0]).css({
					"left":leftTop.x + map_div[i][3] + "px",
					"top":leftTop.y + map_div[i][4] + "px"
				});
			}
		}
	}
}

google.maps.event.addDomListener(window, 'load', initMap);