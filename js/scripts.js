/*INSTANCIAS EXTERNAS DE LAS CAPAS PARA LA OPCIÓN layers*/

/*Instancia externa de la variable capa_base para la capa ráster "toner-Stamen"*/
var tile_osm = new ol.layer.Tile({
  title:'OSM',
  type: 'base',
  visible: true,
  source: new ol.source.Stamen({
    layer: 'toner-lite'
  })
});

/*Instancia externa de la capa orto_1k (WMS ICGC)*/
var orto_1k = new ol.layer.Tile({
  title:'Ortofotografía ICGC',
  type: 'base',
  visible: false,
  source: new ol.source.TileWMS({
    url: 'http://mapcache.icc.cat/map/bases_noutm/service?',
    params: {
      'LAYERS': 'orto'
    },
    attributions: [
      new ol.Attribution ({
        html: 'Ortofotografía por &copy <a href="http://www.icc.cat/Home-ICC/Web/Avis-Legal">WMS ICGC</a>'
      })
    ]
  })
});

/*Instancia externa de la variable hosteleria"*/
var hosteleria = new ol.layer.Vector({
  title:'Establecimientos de hostelería',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/hosteleria_lleida_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Hostelería: Datos extraídos y modificados de &copy Colaboradores de <a href="http://www.openstreetmap.org/copyright"> OpenStreetMaps</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  //Añadimos el atributo id
  id:'hosteleria'
});

/*Instancia externa de la variable lineas_bus"*/
var lineas_bus = new ol.layer.Vector({
  title:'Líneas de autobús',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/linies_bus_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Líneas de Bus: Datos extraídos y modificados de <a href="http://cartolleida.paeria.es/lleidaoberta/default.aspx"> Dades obertes de Lleida</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  //Añadimos el atributo id
  id:'lineas_bus'
});

/*Instancia externa de la variable paradas_bus"*/
var paradas_bus = new ol.layer.Vector({
  title:'Paradas de autobús',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/parades_bus_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Paradas de Bus: Datos extraídos y modificados de <a href="http://cartolleida.paeria.es/lleidaoberta/default.aspx"> Dades obertes de Lleida</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  style: new ol.style.Style({
    image: new ol.style.Icon({
      size: [16,16],
      src: './imagenes/bus_stop_16.png'
    })
  }),
  //Añadimos el atributo id
  id:'paradas_bus'
});

/*Instancia externa de la variable poligonos_lleida"*/
var poligonos_lleida = new ol.layer.Vector({
  title:'Polígonos Industriales',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/poligons_lleida_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Polígonos de Lleida: Datos extraídos y modificados de <a href="http://cartolleida.paeria.es/lleidaoberta/default.aspx"> Dades obertes de Lleida</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(23,37,125,0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(1, 10, 43, 0.8)',
      width: 1.5
    })
  }),
  //Añadimos el atributo id
  id:'poligonos_lleida'
});

/*Instancia externa de la variable partidas"*/
var partidas = new ol.layer.Vector({
  title:'Partidas rústicas',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/partides_lleida_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Partidas rústicas de Lleida: Datos extraídos y modificados de <a href="http://cartolleida.paeria.es/lleidaoberta/default.aspx"> Dades obertes de Lleida</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(38,70,127,0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(1, 10, 43, 0.8)',
      width: 1.5
    })
  }),
  //Añadimos el atributo id
  id:'partidas'
});

/*Instancia externa de la variable barrios"*/
var barrios = new ol.layer.Vector({
  title:'Barrios',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/barris_lleida_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Barrios de Lleida: Datos extraídos y modificados de <a href="http://cartolleida.paeria.es/lleidaoberta/default.aspx"> Dades obertes de Lleida</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(52,95,148,0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(1, 10, 43, 0.8)',
      width: 1.5
    })
  }),
  //Añadimos el atributo id
  id:'barrios'
});

/*Instancia externa de la variable termino"*/
var termino = new ol.layer.Vector({
  title:'Término municipal',
  visible: false,
  source: new ol.source.Vector({
    url: './datos/terme_lleida_4326.geojson.js',
    format: new ol.format.GeoJSON(),
    attributions: [
      new ol.Attribution ({
        html: '<br>Término municipal de Lleida: Datos extraídos y modificados de <a href="http://cartolleida.paeria.es/lleidaoberta/default.aspx"> Dades obertes de Lleida</a> bajo <a href="http://creativecommons.org/licenses/by/3.0/">CC BY 3.0.</a>'
      })
    ]
  }),
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(178,199,216,0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(1, 10, 43, 0.8)',
      width: 1.5
    })
  }),
  //Añadimos el atributo id
  id:'termino'
});

/*ESTILOS DE LAS CAPAS*/

/*Estilos de la capa hosteleria*/
restaurantStyle =  new ol.style.Style({
  image: new ol.style.Icon({
    size: [16,16],
    src: './imagenes/restaurant_16.png'
  })
});
barStyle =  new ol.style.Style({
  image: new ol.style.Icon({
    size: [16,16],
    src: './imagenes/bar_16.png'
  })
});
fastfoodStyle =  new ol.style.Style({
  image: new ol.style.Icon({
    size: [16,16],
    src: './imagenes/fast_food_16.png'
  })
});
pubStyle =  new ol.style.Style({
  image: new ol.style.Icon({
    size: [16,16],
    src: './imagenes/pub_16.png'
  })
});
cafeStyle =  new ol.style.Style({
  image: new ol.style.Icon({
    size: [16,16],
    src: './imagenes/cafe_16.png'
  })
});

/*Listener (oyente) para estilos hosteleria*/
hosteleria.once('change', function(e) {
  //comprobamos el estado
  if (hosteleria.getSourceState()=='ready'){
    //recorremos todas las entidades
    hosteleria.getSource().forEachFeature(function(feature){
      //si el atributo amenity=restaurant aplicamos un estilo
      if (feature.getProperties().amenity=='restaurant'){
        feature.setStyle(restaurantStyle);
      }
      //cuando no seguimos buscando
      else {
        //si el atributo amenity=bar aplicamos un estilo
        if (feature.getProperties().amenity=='bar'){
          feature.setStyle(barStyle);
        }
        //cuando no seguimos buscando
        else {
          //si el atributo amenity=fastfood aplicamos un estilo
          if (feature.getProperties().amenity=='fast_food'){
            feature.setStyle(fastfoodStyle);
          }
          //cuando no seguimos buscando
          else{
            //si el atributo amenity=pub aplicamos un estilo
            if (feature.getProperties().amenity=='pub'){
              feature.setStyle(pubStyle);
            }
            //cuando no aplicamos estilo cafe
            else {feature.setStyle(cafeStyle);}
          }
        }
      }
    });
  }
});

/*Estilos de la capa lineas_bus*/

l1Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#f6d705'
  })
});
l2Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#db1c16'
  })
});
l3Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#f77521'
  })
});
l4Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#1261e7'
  })
});
l5Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#139c39'
  })
});
l6Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#4b2798'
  })
});
l7Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#a8a8a8'
  })
});
l8Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#a4477f'
  })
});
l9Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#000000'
  })
});
l10Style =  new ol.style.Style({
  stroke: new ol.style.Stroke({
    width: 4,
    color: '#492908'
  })
});

/*Listener (oyente) para estilos lineas_bus*/

lineas_bus.once('change', function(e) {
  //comprobamos el estado
  if (lineas_bus.getSourceState()=='ready'){
    //recorremos todas las entidades
    lineas_bus.getSource().forEachFeature(function(feature){
      //si el atributo Layer=L1 aplicamos un estilo
      if (feature.getProperties().Layer=='L1'){
        feature.setStyle(l1Style);
      }
      //cuando no seguimos buscando
      else {
        //si el atributo Layer=L2 aplicamos un estilo
        if (feature.getProperties().Layer=='L2'){
          feature.setStyle(l2Style);
        }
        //cuando no seguimos buscando
        else {
          //si el atributo Layer=L3 aplicamos un estilo
          if (feature.getProperties().Layer=='L3'){
            feature.setStyle(l3Style);
          }
          //cuando no seguimos buscando
          else{
            //si el atributo Layer=L4 aplicamos un estilo
            if (feature.getProperties().Layer=='L4'){
              feature.setStyle(l4Style);
            }
            else{
              //si el atributo Layer=L5 aplicamos un estilo
              if (feature.getProperties().Layer=='L5'){
                feature.setStyle(l5Style);
              }
              else{
                //si el atributo Layer=L6 aplicamos un estilo
                if (feature.getProperties().Layer=='L6'){
                  feature.setStyle(l6Style);
                }
                else{
                  //si el atributo Layer=L7 aplicamos un estilo
                  if (feature.getProperties().Layer=='L7'){
                    feature.setStyle(l7Style);
                  }
                  else{
                    //si el atributo Layer=L8 aplicamos un estilo
                    if (feature.getProperties().Layer=='L8'){
                      feature.setStyle(l8Style);
                    }
                    else{
                      //si el atributo Layer=L9 aplicamos un estilo
                      if (feature.getProperties().Layer=='L9'){
                        feature.setStyle(l9Style);
                      }
                      //cuando no aplicamos estilo l10
                      else {feature.setStyle(l10Style);}
                    }
                  }
                }
              }
            }
          }
        }
      }
    });
  }
});

/*FUNCIONES DE INTERACCIÓN MEDIANTE LA CLASE ol.interaction*/
/*Definimos la interacción al seleccionar entidades poligonales*/
var selectInteractionPolygons = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove,
  layers: [poligonos_lleida, partidas, barrios],
  style: new ol.style.Style({
    fill: new ol.style.Fill({
      color: 'rgba(50,153,187,0.6)'
    }),
    stroke: new ol.style.Stroke({
      color: 'rgba(50,153,187,1)',
      width: 1.5
    })
  })
});

/*Definimos la interacción al seleccionar otras entidades*/
var selectInteractionOthers = new ol.interaction.Select({
  condition: ol.events.condition.pointerMove,
  layers: [hosteleria, lineas_bus, paradas_bus],
});

/*EL POPUP MEDIANTE LA CLASE ol.Overlay*/

/*Definición de popup como variable global*/
var popup = new ol.Overlay({
  //indicamos cual es el elemento contenedor
  element: document.getElementById('popup')
});

/*Definición de info como variable global*/
var info;

//funcion para la interacción en entidades poligonales
selectInteractionPolygons.on('select', function(browserevent) {
  var coordinate = browserevent.mapBrowserEvent.coordinate
  feature = browserevent.target.getFeatures().getArray()[0];
  //Si se ha seleccionado una entidad
  if (feature){
    var content = document.getElementById('popup');
    //Insertamos las coordenadas en el objeto popup
    popup.setPosition(coordinate);
    content.innerHTML = info;
  }
  //Si se ha des-seleccionado una entidad
  else{
    //Insertamos unas coordenadas undefined para que no aparezca en pantalla
    popup.setPosition(undefined);
  }
});

//funcion para la interacción en otras entidades
selectInteractionOthers.on('select', function(browserevent) {
  var coordinate = browserevent.mapBrowserEvent.coordinate
  feature = browserevent.target.getFeatures().getArray()[0];
  //Si se ha seleccionado una entidad
  if (feature){
    var content = document.getElementById('popup');
    //Insertamos las coordenadas en el objeto popup
    popup.setPosition(coordinate);
    content.innerHTML = info;
  }
  //Si se ha des-seleccionado una entidad
  else{
    //Insertamos unas coordenadas undefined para que no aparezca en pantalla
    popup.setPosition(undefined);
  }
});

/*PARÁMETROS DE LA CLASE ol.control*/

//Parámetros para la clase ol.control.OverviewMap
var overviewoptions = {
  //Definimos la clase para asignar un estilo concreto al objeto
  className: 'ol-overviewmap ol-custom-overviewmap'
  ,
  //Capas que se mostrarán en el OverviewMap
  //Mantenemos la misma capa del mapa aunque podría ser distinta
  layers:[
    new ol.layer.Tile({
      source: new ol.source.OSM ()
    })
  ]
  ,
  //Oculto por defecto
  collapsed: false
  ,
  //ToolTip
  tipLabel: 'Mapa de referencia'
};

//Parámetros para la clase ol.control.FullScreen
var fullscreenoptions = {
  //Definimos la clase para asignar un estilo concreto al objeto
  className: 'ol-fullscreen ol-custom-fullscreen'
};

//Parámetros para la clase ol.control.ScaleLine
var scalelineoptions = {
  className: 'ol-scale-line'
};

//Parámetros para la clase ol.control.MousePosition
var mousepositionoptions = {
  coordinateFormat: ol.coordinate.createStringXY(5),
  projection: '4326',
  //undefinedHTML: '&nbsp;'
};

//Parámetros para la clase ol.control.LayerSwitcher
var layerswitcheroptions = {
  tipLabel: 'Leyenda'
};

/*INSTANCIA DE LA CLASE ol.map*/

/*Definimos la variable map que alojará nuestro mapa*/
map = new ol.Map({
  layers: [
    /*Es necesario agrupar (LayerSwitcher) */
    new ol.layer.Group({
      title: 'Mapa base',
      layers: [
        tile_osm,
        orto_1k
      ]
    }),
    new ol.layer.Group({
      title: 'Límites administrativos',
      layers: [
        termino,
        partidas,
        barrios,
        poligonos_lleida
      ]
    }),
    new ol.layer.Group({
      title: 'Movilidad',
      layers: [
        lineas_bus,
        paradas_bus
      ]
    }),
    new ol.layer.Group({
      title: 'Información turística',
      layers: [
        hosteleria
      ]
    })
  ],
  target: 'map',
  view: new ol.View({
    center: [69860, 5103520],
    zoom: 14,
    minZoom: 11,
    extent: [40000, 5087738, 82750, 5122492]
  }),
  controls: ol.control.defaults().extend([
    new ol.control.OverviewMap(overviewoptions),
    new ol.control.FullScreen(fullscreenoptions),
    new ol.control.ScaleLine(scalelineoptions),
    new ol.control.MousePosition(mousepositionoptions),
    new ol.control.LayerSwitcher(layerswitcheroptions),
  ]),
  interactions: ol.interaction.defaults().extend([selectInteractionPolygons, selectInteractionOthers]),
  overlays: [popup]
});

/*Captura de distintos features para distintas layers*/
map.on(ol.MapBrowserEvent.EventType.POINTERMOVE, function (e) {
  map.forEachFeatureAtPixel(e.pixel, function (feature, layer) {
    if (layer.get('id')=='poligonos_lleida'){
      info = feature.get('NOM');
    }
    else{
      if (layer.get('id')=='partidas'){
        info = feature.get('PARTIDA');
      }
      else{
        if (layer.get('id')=='barrios'){
          info = feature.get('BARRISAS_N');
        }
        else{
          if (layer.get('id')=='hosteleria'){
            info = feature.get('name');
          }
          else{
            if (layer.get('id')=='lineas_bus'){
              info = feature.get('Layer');
            }
            else{
              if (layer.get('id')=='paradas_bus'){
                info = feature.get('nom_parada');
              }
            }
          }
        }

      }
    }
  });
});
