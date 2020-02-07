import { Component, OnInit } from '@angular/core';

import { Polygon, Point } from 'ol/geom';
import { Style, Fill, Text, Stroke, Icon } from 'ol/style';
import { View, Map } from 'ol';
import * as proj from 'ol/proj';
import Feature from 'ol/Feature';
import TileLayer from 'ol/layer/Tile';
import XYZ from 'ol/source/XYZ';
import { defaults as defaultInteractions } from 'ol/interaction';
import OSM from 'ol/source/OSM';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
})
export class AppComponent implements OnInit {
  map = null;

  something() {
    console.log(1);
  }

  ngOnInit() {
    this.map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM(),
        }),
      ],
      view: new View({
        center: [0, 0],
        zoom: 2,
      }),
    });
  }
}
