import { Component, OnInit } from '@angular/core';
import { VectorLayerModule, VectorLayer } from './vector-module';

// This is necessary to access ol3!
declare var ol: any;

@Component({
  selector: 'app-ae-map',
  templateUrl: './ae-map.component.html',
  styleUrls: ['./ae-map.component.css']
})

export class AeMapComponent implements OnInit {
  canvas: any;
  context: any;
  pixelRatio: any;
  map: any;

  constructor() { }

  ngOnInit() {
    this.canvas = document.createElement('canvas');
    this.context = this.canvas.getContext('2d');
    this.pixelRatio = ol.has.DEVICE_PIXEL_RATIO;

    console.log("PixelRatio", this.pixelRatio);

    console.log("Rendering function called");

    var controls = [
      new ol.control.MousePosition({
        undefinedHTML: 'outside',
        coordinateFormat: function (coordinate) {
          return ol.coordinate.format(coordinate, '{x}, {y}', 0);
        }
      }),
      new ol.control.Zoom(),
      // new ol.control.FullScreen(),
    ];

    // oh shit the real map code kinda starts here!
    var mapExtent = [0.00000000, -1931.00000000, 1285.00000000, 0.00000000];
    var mapMinZoom = 0;
    var mapMaxZoom = 3;
    var mapMaxResolution = 1.00000000;
    var tileExtent = [0.00000000, -1931.00000000, 1285.00000000, 0.00000000];

    var mapResolutions = [];

    for (var z = 0; z <= mapMaxZoom; z++) {
      mapResolutions.push(Math.pow(2, mapMaxZoom - z) * mapMaxResolution);
    }

    var mapTileGrid = new ol.tilegrid.TileGrid({
      extent: tileExtent,
      minZoom: mapMinZoom,
      resolutions: mapResolutions
    });

    var tiles = new ol.layer.Tile({
      source: new ol.source.XYZ({
        url: "/assets/amish_tiles/{z}/{x}/{y}.png",
        tileGrid: mapTileGrid,
      }),
    });

    var vm = new VectorLayer();

    var vectorLayer = new ol.layer.Vector({
      source: vm.generateSource(),
      style: vm.styleFunction
    });

    this.map = new ol.Map({
      layers: [
        tiles,
        vectorLayer
      ],
      target: 'map',
      controls: controls,
      view: new ol.View({
        projection: ol.proj.get('PIXELS'),
        extent: mapExtent,
        maxResolution: mapTileGrid.getResolution(mapMinZoom)
      })
    });

    this.map.getView().fit(mapExtent, this.map.getSize());
  }

}
