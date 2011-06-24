Ext.Loader.setConfig({
		enabled : true
	});

Ext.Loader.setPath('Ext.ux', './ext-4.0-beta2/examples/ux');
Ext.require([
		'Ext.window.*',
		'Ext.ux.GMapPanel'
	]);

Ext.onReady(function () {

		var map;

		var win = Ext.create('Ext.Window', {
				layout : 'fit',
				title : 'Тестовое задание №2',
				closeAction : 'hide',
				width : 450,
				height : 450,
				listeners : {
					show : function () {
						//var map = new OpenLayers.Map("demoMap");
						//console.log(this.body.id);
						map = new OpenLayers.Map(this.body.id);
						var mapnik = new OpenLayers.Layer.OSM();
						map.addLayer(mapnik);
						map.setCenter(new OpenLayers.LonLat(-0.1279688, 51.5077286) // Center of the map
							.transform(
								new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
								new OpenLayers.Projection("EPSG:900913") // to Spherical Mercator Projection
							), 16// Zoom level
						);

						//map.addLayer(new OpenLayers.Layer.OSM());

					}
				},
				fbar : [{
						text : 'Загрузить маркеры',
						width : 150,
						handler : function () {
							//alert(1);

							var conn = new Ext.data.Connection();
							conn.request({
									url : '192.168.0.2:8001/maps',
									method : 'GET',
									success : function (response, options) {

										var json = Ext.util.JSON.decode(response.responseText);

										if (json.success) {
											alert("Lat:" + json.lat + ", Lon:" + json.lon );
										} else {
											alert("Причина: " + json.errors);
										} //if
									}, //success
									failure : function (response, opts) {
										alert("Server connection failed");
									} //failure
								}) //conn

							/*
							var lonLat = new OpenLayers.LonLat(-0.1279688, 51.5077286)
							.transform(
							new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
							map.getProjectionObject() // to Spherical Mercator Projection
							);

							var lonLat2 = new OpenLayers.LonLat(-0.124, 51.5054)
							.transform(
							new OpenLayers.Projection("EPSG:4326"), // transform from WGS 1984
							map.getProjectionObject() // to Spherical Mercator Projection
							);

							var zoom = 16;

							var markers = new OpenLayers.Layer.Markers("Markers");
							map.addLayer(markers);

							markers.addMarker(new OpenLayers.Marker(lonLat));
							markers.addMarker(new OpenLayers.Marker(lonLat2));

							map.setCenter(lonLat, zoom);
							*/
						} //handler
					}
				]
			});

		win.show();

	});
