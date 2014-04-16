/* declare the map container from the HTML object */
var mapper = document.getElementById('map');
var map = new google.maps.Map(mapper, {
    zoom: 15,
    center: new google.maps.LatLng(locations[0][3],locations[0][4]),
    mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();
var marker, i;

//Format: Main(0), Cross (1), Camera (2), Latitude (3), Longitude (4), pin image (5), township (6)

for(i=0;i<locations.length;i++){  
	marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][3], locations[i][4]),
        map: map,
        icon: locations[i][5],
	});
	
	google.maps.event.addListener(marker,'click',(function(marker,i){
		return function(){
			//infowindow.setContent(locations[i][0]);
			infowindow.setContent('<div style="height: auto; width: 360px;"><strong>'+locations[i][0]+' at '+locations[i][1]+'</strong><br />Camera Direction: '+locations[i][2]+'</div>');
			infowindow.open(map, marker);
        }
	})(marker,i));
}